/*
* Selecting an element.
*/
// var body = d3.select("body");
// var div = body.append("div");
// div.html("Hello world!");

/*
* Chaining methods
*/
// d3.selectAll("section")
//     .attr("class", "special")
//   .append("div")
//     .html("Hello world");

/*
* Since method chaining can only be used
* to descend into the document hierarchy,
* use [var] to keep references
* to selections and go back up.
*/

// var section = d3.selectAll("section");
// section.append("div")
//   .html("First");
// section.append("div")
//   .html("Second.");

/*
*
* 1. HTML based chart
*     http://bost.ocks.org/mike/bar/
*
*/
function HTMLcharterize() {
  var data = [4, 8, 15, 16, 23, 42];

  /*
  * Scaling function to scale on a arbitrary
  * width rather than in multiplies of 10.
  */
  var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 100]);


  d3.select(".chartHTML")
    .selectAll("div")
      .data(data)
    .enter().append("div")
      .style("width", function(d) {
        return x(d) + "px";
      })
      .text(function(d) {
        return d;
      })
}

HTMLcharterize();


/*
*
* 2. SVG based chart
*      http://bost.ocks.org/mike/bar/2/
*
*/
function SVGcharterize() {

  var width = 420,
      barHeight = 20;

  var x = d3.scale.linear()
    .range([0, width]);

  var chart = d3.select(".chartSVG")
    .attr("width", width);
    // .attr("height", barHeight * data.length);

  d3.tsv("js/data.tsv", type, function(error, data) {
    x.domain([0, d3.max(data, function(d) { return d.value; })]);

    chart.attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
      .attr("width", function(d) { return x(d.value); })
      .attr("height", barHeight - 1);

    bar.append("text")
      .attr("x", function(d) { return x(d.value) - 3; })
      .attr("y", barHeight / 2)
      .attr("dy", "0.35em")
      .text(function(d) { return d.value ; });

  });

  function type(d) {
    d.value = +d.value; // coerce to number
    return d;
  }
}
SVGcharterize();

/*
*
* 2. SVG based chart with axes, margins
*      http://bost.ocks.org/mike/bar/3/
*
*/

function fullChart() {

  var margin = {top: 20, right: 30, bottom: 30, left: 40 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");


  var chart = d3.select(".chartFull")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.tsv("js/data.tsv", type, function(error, data) {
    x.domain(data.map(function(d) {
      return d.name;
    }));
    y.domain([0, d3.max(data, function(d) {
      return d.value;
    })]);

    // var barWidth = width / data.length;

    chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    chart.append("g")
      .attr("class", "y axis")
      .call(yAxis);

    chart.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.name); })
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return height - y(d.value); })
        .attr("width", x.rangeBand());


    // var bar = chart.selectAll("g")
    //   .data(data)
    // .enter().append("g")
    //   .attr("transform", function(d) {
    //     return "translate(" + x(d.name) + ",0)";
    //   });

    // bar.append("rect")
    //   .attr("y", function(d) {
    //     return y(d.value);
    //   })
    //   .attr("height", function(d) {
    //     return height - y(d.value);
    //   })
    //   .attr("width", x.rangeBand());

    // bar.append("text")
    //   .attr("x", x.rangeBand() / 2)
    //   .attr("y", function(d) {
    //     return y(d.value) + 3;
    //   })
    //   .attr("dy", ".75em")
    //   .text(function(d) {
    //     return d.value;
    //   })

  });

  function type(d) {
    d.value = +d.value;
    return d;
  }
}

fullChart();