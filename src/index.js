const d3 = require('d3v4');

import './style/main.css'
const textData = require('./data/text.json');
const data = require('./data/budget.json');

const scroll = require('./scroll');

let svgDiv = document.querySelector('#svg')
let textDiv = document.querySelector('#text')

svg.innerHTML = `<svg id="chart" class="treemap" width="100%" height="100%"></svg>`

let textParagraphs = [];
textData.paragraphs.forEach(function (p) {
  let html = `<p class="text-paragraph" id="${p.id}">${p.text}</p>`
  textParagraphs.push(html)
})
textDiv.innerHTML = `${textParagraphs.join('')}`

window.onload = function() {
  init();
};

function init() {
  var chartDiv = document.getElementById("chart");
  chartDiv.innerHTML = '';
  var svg = d3.select(chartDiv).append("svg");
  var width = chartDiv.clientWidth;
  var height = chartDiv.clientHeight;

  var fader = function(color) { return d3.interpolateRgb(color, "#fff")(0.2); },
  color = d3.scaleOrdinal(d3.schemeCategory20.map(fader)),
  format = d3.format(",d");

  var treemap = d3.treemap()
  .tile(d3.treemapResquarify)
  .size([width, height])
  .round(true)
  // FIXME: padding here
  .paddingInner(0);

  // d3.json("./data/budget.json", function(error, data) {
    // if (error) throw error;

    var root = d3.hierarchy(data)
    .eachBefore(function(d) { d.data.id = (d.parent ? d.parent.data.id + "-" : "") + d.data.name; })
    .eachBefore(function(d) { d.data.parent = (d.parent ? d.parent.data.id : ""); })
    .sum(sumBySize)
    .sort(function(a, b) { return b.height - a.height || b.value - a.value; });

    treemap(root);

    var cell = svg.selectAll("g")
    .data(root.leaves())
    .enter().append("g")
    .attr("id", function(d) { return "g-" + d.data.id; })
    .attr("class", function(d) { return d.data.parent; })
    .style("opacity", 0.2)
    .attr("transform", function(d) { return "translate(" + d.x0 + "," + d.y0 + ")"; });

    cell.append("rect")
    .attr("id", function(d) { return d.data.id; })
    .attr("width", function(d) { return d.x1 - d.x0; })
    .attr("height", function(d) { return d.y1 - d.y0; })
    .attr("stroke", "#fff")
    .attr("stroke-width", 0)
    .attr("fill", function(d) { return color(d.parent.data.id); });

    cell.append("clipPath")
    .attr("id", function(d) { return "clip-" + d.data.id; })
    .append("use")
    .attr("xlink:href", function(d) { return "#" + d.data.id; });

    // cell.append("text")
    // .attr("clip-path", function(d) { return "url(#clip-" + d.data.id + ")"; })
    // .selectAll("tspan")
    // .data(function(d) { return d.data.name.split(/(?=[A-Z][^A-Z])/g); })
    // .enter().append("tspan")
    // .attr("x", 4)
    // .attr("y", function(d, i) { return 13 + i * 10; })
    // .text(function(d) { return d; });
    //
    // cell.append("title")
    // .text(function(d) { return d.data.id + "\n" + format(d.value); });

    d3.selectAll("input")
    .data([sumBySize, sumByCount], function(d) { return d ? d.name : this.value; })
    .on("change", changed);

    // var timeout = d3.timeout(function() {
    //   d3.select("input[value=\"sumByCount\"]")
    //       .property("checked", true)
    //       .dispatch("change");
    // }, 2000);

    function changed(sum) {
      timeout.stop();

      treemap(root.sum(sum));

      cell.transition()
      .duration(750)
      .attr("transform", function(d) { return "translate(" + d.x0 + "," + d.y0 + ")"; })
      .select("rect")
      .attr("width", function(d) { return d.x1 - d.x0; })
      .attr("height", function(d) { return d.y1 - d.y0; });
    }
  // });

  function sumByCount(d) {
    return d.children ? 0 : 1;
  }

  function sumBySize(d) {
    return d.size;
  }
}

window.addEventListener("resize", init);

// // to transition opacity a single element by id
// d3.select('#g-orcamento-pessoal-docentes')
//   .transition()
//   .duration(1000)
//   .style('opacity', 1)
// // to transition opacity a multiple elements by class
// d3.selectAll('.orcamento-pessoal')
//   .transition()
//   .duration(1000)
//   .style('opacity', 1)
//
//
// // d3.selectAll('.orcamento-pessoal').selectAll('rect')
// d3.select('#orcamento-pessoal-docentes')
//   .transition()
//   .duration(1000)
//   .attr('stroke-width', 4)
