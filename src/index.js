const d3 = require('d3v4');
const fullpage = require('fullpage.js/dist/fullpage.extensions.min.js');
import 'fullpage.js/dist/fullpage.css'

import './style/main.css'
const slides = require('./slides').slides;
const data = require('./data/budget.json');

const scroll = require('./scroll');

let app = document.querySelector('#app')
app.innerHTML = `<div id="svg"></div>
<div id="text"></div>`

let svgDiv = document.querySelector('#svg')
let textDiv = document.querySelector('#text')

svg.innerHTML = `<svg id="chart" class="treemap" width="100%" height="100%"></svg>`

let textParagraphs = [];
Object.keys(slides).forEach(function(key, index) {
  let slide = slides[key]
  let text = slide.text
  let id = key
  // let html = `<p class="text-paragraph" id="${id}">${text}</p>`
  let html = `<div class="section" id="${id}">${text}</div>`
  textParagraphs.push(html)
});

textDiv.innerHTML = `<div id="fullpage">${textParagraphs.join('')}</div>`

window.onload = function() {
  init();

  new fullpage('#fullpage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  	scrollHorizontally: true,
    scrollBar: true,
    // navigation: true,
    onLeave: function(origin, destination, direction) {
      scroll.triggerSlide(destination.item.id)
    }
  });

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
  .paddingInner(1);

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
  .style("opacity", 0)
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
  // // .data(function(d) { return d.data.name.split(/(?=[A-Z][^A-Z])/g); })
  // .data(function(d) { return String((d.value / 1000000).toFixed(2)).split(/(?=[A-Z][^A-Z])/g); })
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

  function sumByCount(d) {
    return d.children ? 0 : 1;
  }

  function sumBySize(d) {
    return d.size;
  }
}

window.addEventListener("resize", init);
