/* main JS file */



var sandwiches = [
    { name: "Thesis", price: 7.95, size: "large" },
    { name: "Dissertation", price: 8.95, size: "large" },
    { name: "Highlander", price: 6.50, size: "small" },
    { name: "Just Tuna", price: 6.50, size: "small" },
    { name: "So-La", price: 7.95, size: "large" },
    { name: "Special", price: 12.50, size: "small" }
]; 



var svg = d3.select("body")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500);





svg.selectAll("circle")
	.data(sandwiches)
	.enter()
	.append("circle")
    .attr("stroke", "red")
    .attr("fill", function(d){
        if (d.price< 7.0){return "purple";}
        return "black";})
    .attr('r', function(d){
        if(d.size == "small"){return 12;}
        return 24;})
    .attr("cy", 60)
	.attr("cx", function(d, i) {
        return (i * 60) + 50;
    })
    
    