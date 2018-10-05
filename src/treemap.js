const d3 = require('d3v4');
const treemapClick = require('./slides').treemapClick;

export function create(elementId, data, interactive) {
  let chartDiv = document.getElementById(elementId);
  chartDiv.innerHTML = '';
  let svg = d3.select(chartDiv).append("svg");
  let width = chartDiv.clientWidth;
  let height = chartDiv.clientHeight;

  let fader = function(color) { return d3.interpolateRgb(color, "#fff")(0.2); },
  color = d3.scaleOrdinal(d3.schemeCategory10.map(fader)),
  format = d3.format(",d");

  let treemap = d3.treemap()
  .tile(d3.treemapResquarify)
  .size([width, height])
  .round(true)
  // FIXME: padding here
  .paddingInner(1);

  let root = d3.hierarchy(data)
  .eachBefore(function(d) { d.data.id = (d.parent ? d.parent.data.id + "-" : "") + d.data.name; })
  .eachBefore(function(d) { d.data.parent = (d.parent ? d.parent.data.id : ""); })
  .sum(sumBySize)
  .sort(function(a, b) { return b.height - a.height || b.value - a.value; });

  treemap(root);

  let cell = svg.selectAll("g")
  .data(root.leaves())
  .enter().append("g")
  .attr("id", function(d) { return "g-" + d.data.id; })
  .attr("class", function(d) { return d.data.parent; })
  .style("opacity", 0)
  .attr("transform", function(d) { return "translate(" + d.x0 + "," + d.y0 + ")"; });

  cell.append("rect")
  .attr("id", function(d) { return d.data.id; })
  .attr("class", function(d) { return d.data.name; })
  .attr("data-value", function(d) { return d.value; })
  .attr("width", function(d) { return d.x1 - d.x0; })
  .attr("height", function(d) { return d.y1 - d.y0; })
  .attr("stroke", "#fff")
  .attr("stroke-width", 0)
  .attr("fill", function(d) {
      return elementId === "chart-pmsp" ? "#333" : color(d.parent.data.id);
  })
  .attr("data-fill", function(d) {
      return elementId === "chart-pmsp" ? "#333" : color(d.parent.data.id);
  });

  if (interactive) {
    cell.on("click", treemapClick);
  }

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

  // let timeout = d3.timeout(function() {
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
