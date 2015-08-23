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

var data = [4, 8, 15, 16, 23, 42];

/*
* Scaling function to scale on a arbitrary
* width rather than in multiplies of 10.
*/
var x = d3.scale.linear()
  .domain([0, d3.max(data)])
  .range([0, 100]);

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) {
      return x(d) + "px";
    })
    .text(function(d) {
      return d;
    })