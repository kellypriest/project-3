// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 20, left: 50},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


///////BREEDS    
// append the svg object to the body of the page
var svg5 = d3.select("#perb")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 120)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



// Parse the Data
d3.csv("graphing_csvs/breeds.csv", function(data) {
    console.log(data)
    data.forEach(function(d) {
        d.Adoption = +d.Adoption;
        d.Euthanasia = +d.Euthanasia;
        d.Transfer = +d.Transfer;
        d.Foster = +d.Foster;
      });
    
  // List of subgroups = header of the csv files = soil condition here
    var subgroups = ["Adoption", "Transfer", "Foster", "Euthanasia"]

  // List of groups = species here = value of the first column called group -> I show them on the X axis

    var groups = d3.map(data, function(d){return(d.PrimaryBreed)}).keys()
 

  // Add X axis
    var x = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.2])
    svg5.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

  // Add Y axis
     var y = d3.scaleLinear()
        .domain([0, 100])
        .range([ height, 0 ]);
    svg5.append("g")
        .call(d3.axisLeft(y));

  // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#e41a1c','#377eb8','#4daf4a', 'yellow'])

  // Normalize the data -> sum of each group must be 100!
    console.log(data)
    dataNormalized = []
    data.forEach(function(d){
    // Compute the total
        tot = 0
        for (i in subgroups){ name=subgroups[i] ; tot += +d[name] }
    // Now normalize
        for (i in subgroups){ name=subgroups[i] ; d[name] = d[name] / tot * 100}
    })

  //stack the data? --> stack per subgroup
    var stackedData = d3.stack()
        .keys(subgroups)
        (data)

  // Show the bars
    svg5.append("g")
        .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .enter().append("g")
        .attr("fill", function(d) { return color(d.key); })
        .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
        .data(function(d) { return d; })
        .enter().append("rect")
            .attr("x", function(d) { return x(d.data.PrimaryBreed); })
            .attr("y", function(d) { return y(d[1]); })
            .attr("height", function(d) { return y(d[0]) - y(d[1]); })
            .attr("width",x.bandwidth())
})


    ///////GENDER
var svg6 = d3.select("#perg")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



// Parse the Data
d3.csv("graphing_csvs/gender.csv", function(data) {
    console.log(data)
    data.forEach(function(d) {
        d.Adoption = +d.Adoption;
        d.Euthanasia = +d.Euthanasia;
        d.Transfer = +d.Transfer;
        d.Foster = +d.Foster;
      });
    
  // List of subgroups = header of the csv files = soil condition here
    var subgroups = ["Adoption", "Transfer", "Foster", "Euthanasia"]

  // List of groups = species here = value of the first column called group -> I show them on the X axis

    var groups = d3.map(data, function(d){return(d.Sex)}).keys()
 

  // Add X axis
    var x = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.2])
    svg6.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSizeOuter(0))
        

  // Add Y axis
     var y = d3.scaleLinear()
        .domain([0, 100])
        .range([ height, 0 ]);
    svg6.append("g")
        .call(d3.axisLeft(y));

  // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#e41a1c','#377eb8','#4daf4a', 'yellow'])

  // Normalize the data -> sum of each group must be 100!
    console.log(data)
    dataNormalized = []
    data.forEach(function(d){
    // Compute the total
        tot = 0
        for (i in subgroups){ name=subgroups[i] ; tot += +d[name] }
    // Now normalize
        for (i in subgroups){ name=subgroups[i] ; d[name] = d[name] / tot * 100}
    })

  //stack the data? --> stack per subgroup
    var stackedData = d3.stack()
        .keys(subgroups)
        (data)

  // Show the bars
    svg6.append("g")
        .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .enter().append("g")
        .attr("fill", function(d) { return color(d.key); })
        .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
        .data(function(d) { return d; })
        .enter().append("rect")
            .attr("x", function(d) { return x(d.data.Sex); })
            .attr("y", function(d) { return y(d[1]); })
            .attr("height", function(d) { return y(d[0]) - y(d[1]); })
            .attr("width",x.bandwidth())
    })


    ////COLORS
var svg7 = d3.select("#perc")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 60)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



// Parse the Data
d3.csv("graphing_csvs/colors.csv", function(data) {
    console.log(data)
    data.forEach(function(d) {
        d.Adoption = +d.Adoption;
        d.Euthanasia = +d.Euthanasia;
        d.Transfer = +d.Transfer;
        d.Foster = +d.Foster;
      });
    
  // List of subgroups = header of the csv files = soil condition here
    var subgroups = ["Adoption", "Transfer", "Foster", "Euthanasia"]

  // List of groups = species here = value of the first column called group -> I show them on the X axis

    var groups = d3.map(data, function(d){return(d.PrimaryColor)}).keys()
 

  // Add X axis
    var x = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.2])
    svg7.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

  // Add Y axis
     var y = d3.scaleLinear()
        .domain([0, 100])
        .range([ height, 0 ]);
    svg7.append("g")
        .call(d3.axisLeft(y));

  // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#e41a1c','#377eb8','#4daf4a', 'yellow'])

  // Normalize the data -> sum of each group must be 100!
    console.log(data)
    dataNormalized = []
    data.forEach(function(d){
    // Compute the total
        tot = 0
        for (i in subgroups){ name=subgroups[i] ; tot += +d[name] }
    // Now normalize
        for (i in subgroups){ name=subgroups[i] ; d[name] = d[name] / tot * 100}
    })

  //stack the data? --> stack per subgroup
    var stackedData = d3.stack()
        .keys(subgroups)
        (data)

  // Show the bars
    svg7.append("g")
        .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .enter().append("g")
        .attr("fill", function(d) { return color(d.key); })
        .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
        .data(function(d) { return d; })
        .enter().append("rect")
            .attr("x", function(d) { return x(d.data.PrimaryColor); })
            .attr("y", function(d) { return y(d[1]); })
            .attr("height", function(d) { return y(d[0]) - y(d[1]); })
            .attr("width",x.bandwidth())
})

////AGE GROUP
var svg8 = d3.select("#pera")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



// Parse the Data
d3.csv("graphing_csvs/age_group.csv", function(data) {
    console.log(data)
    data.forEach(function(d) {
        d.Adoption = +d.Adoption;
        d.Euthanasia = +d.Euthanasia;
        d.Transfer = +d.Transfer;
        d.Foster = +d.Foster;
      });
    
  // List of subgroups = header of the csv files = soil condition here
    var subgroups = ["Adoption", "Transfer", "Foster", "Euthanasia"]

  // List of groups = species here = value of the first column called group -> I show them on the X axis

    var groups = d3.map(data, function(d){return(d['Age Group'])}).keys()
 

  // Add X axis
    var x = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.2])
    svg8.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSizeOuter(0));

  // Add Y axis
     var y = d3.scaleLinear()
        .domain([0, 100])
        .range([ height, 0 ]);
    svg8.append("g")
        .call(d3.axisLeft(y));

  // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#e41a1c','#377eb8','#4daf4a', 'yellow'])

  // Normalize the data -> sum of each group must be 100!
    console.log(data)
    dataNormalized = []
    data.forEach(function(d){
    // Compute the total
        tot = 0
        for (i in subgroups){ name=subgroups[i] ; tot += +d[name] }
    // Now normalize
        for (i in subgroups){ name=subgroups[i] ; d[name] = d[name] / tot * 100}
    })

  //stack the data? --> stack per subgroup
    var stackedData = d3.stack()
        .keys(subgroups)
        (data)

  // Show the bars
    svg8.append("g")
        .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .enter().append("g")
        .attr("fill", function(d) { return color(d.key); })
        .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
        .data(function(d) { return d; })
        .enter().append("rect")
            .attr("x", function(d) { return x(d.data['Age Group']); })
            .attr("y", function(d) { return y(d[1]); })
            .attr("height", function(d) { return y(d[0]) - y(d[1]); })
            .attr("width",x.bandwidth())
    })