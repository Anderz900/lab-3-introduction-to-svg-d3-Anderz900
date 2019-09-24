/* main JS file */

d3.csv("data/cities.csv", function(row) {
    // do type conversion
    return row;
}).then(function(data){        
    console.log("Data loading complete. Work with dataset.");
    // filter
    let filtered =  data.filter(d=>d.eu == "true");
    
    for (i= 0; i<filtered.length;i++){
        filtered[i].x = +filtered[i].x;
        filtered[i].y = +filtered[i].y;
        filtered[i].population= +filtered[i].population

    }
    console.log(filtered);
    
    var svg = d3.select("body").append("svg").attr("width", 700).attr("height", 550);

    svg.selectAll("circle")
    .data(filtered)
    .enter()
    .append("circle")
    .attr("fill", "blue")
    .attr("r", function(d){
        if (d.population < 1000000){
            return 4;
        }
        else {return 8;}
    })
    .attr("cx", function(d){return d.x;})
    .attr("cy", function(d){return d.y;})


    svg.selectAll("text")
    .data(filtered)
    .enter()
    .append("text")
    .text(function(d){return d.city;})
    .attr("x", function(d){return d.x;})
    .attr("y", function(d){return d.y - 20;})
    .attr("opacity", function(d){
        if (d.population< 1000000) {return 0.0;}
        else {return 1.0;}
    })
    .attr("class", "city-label")

});