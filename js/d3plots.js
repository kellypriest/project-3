
// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 20, left: 50},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


///BREEDS
// append the svg object to the body of the page
var svg = d3.select("#breeds")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



// Parse the Data
d3.csv("graphing_csvs/breeds.csv", function(data) {
  
 
  max = 0;
  data.forEach(function(d) {
    d.Adoption = +d.Adoption;
    d.Euthanasia = +d.Euthanasia;
    d.Transfer = +d.Transfer;
    d.Foster = +d.Foster;
    if (d.Adoption > max){
      max = d.Adoption
    }
    if (d.Euthanasia > max){
      max = d.Euthanasia
    }
    if (d.Transfer > max){
      max = d.Transfer
    }
    if (d.Foster > max){
      max = d.Foster
    }
      
      });

  // List of subgroups = header of the csv files = soil condition here
  var subgroups = ['Adoption', 'Transfer', 'Foster', 'Euthanasia']

  var groups = d3.map(data, function(d){return(d.PrimaryBreed)}).keys()
  console.log(subgroups);
  console.log(groups);
  

  // Add X axis
  var x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, max])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Another scale for subgroup position?
  var xSubgroup = d3.scaleBand()
    .domain(subgroups)
    .range([0, x.bandwidth()])
    .padding([0.05])

  // color palette = one color per subgroup
  var color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['#e41a1c','#377eb8','#4daf4a', 'yellow'])

  // Show the bars
  svg.append("g")
    .selectAll("g")
    // Enter in data = loop group per group
    .data(data)
    .enter()
    .append("g")
      .attr("transform", function(d) { return "translate(" + x(d.PrimaryBreed) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
      .attr("x", function(d) { return xSubgroup(d.key); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", xSubgroup.bandwidth())
      .attr("height", function(d) { return height - y(d.value); })
      .attr("fill", function(d) { return color(d.key); });

})


//////gender


var svg2 = d3.select("#gender")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



// Parse the Data
d3.csv("graphing_csvs/gender.csv", function(data) {
  
  
 
  max = 0;
  data.forEach(function(d) {
    d.Adoption = +d.Adoption;
    d.Euthanasia = +d.Euthanasia;
    d.Transfer = +d.Transfer;
    d.Foster = +d.Foster;
    if (d.Adoption > max){
      max = d.Adoption
    }
    if (d.Euthanasia > max){
      max = d.Euthanasia
    }
    if (d.Transfer > max){
      max = d.Transfer
    }
    if (d.Foster > max){
      max = d.Foster
    }  
      });

  // List of subgroups = header of the csv files = soil condition here
  var subgroups = ['Adoption', 'Transfer', 'Foster', 'Euthanasia']

  var groups = d3.map(data, function(d){return(d.Sex)}).keys()
  // console.log(subgroups);
  // console.log(groups);
  

  // Add X axis
  var x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])
  svg2.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0))
    .selectAll("text")
    .attr("transform", "translate(-10,0)")
    .style("text-anchor", "end");

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, max])
    .range([ height, 0 ]);
  svg2.append("g")
    .call(d3.axisLeft(y));

  // Another scale for subgroup position?
  var xSubgroup = d3.scaleBand()
    .domain(subgroups)
    .range([0, x.bandwidth()])
    .padding([0.05])

  // color palette = one color per subgroup
  var color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['#e41a1c','#377eb8','#4daf4a', 'yellow'])

  // Show the bars
  svg2.append("g")
    .selectAll("g")
    // Enter in data = loop group per group
    .data(data)
    .enter()
    .append("g")
      .attr("transform", function(d) { return "translate(" + x(d.Sex) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
      .attr("x", function(d) { return xSubgroup(d.key); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", xSubgroup.bandwidth())
      .attr("height", function(d) { return height - y(d.value); })
      .attr("fill", function(d) { return color(d.key); });

})


//////////COLOR

var svg3 = d3.select("#colors")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



// Parse the Data
d3.csv("graphing_csvs/colors.csv", function(data) {
  
 
  max = 0;
  data.forEach(function(d) {
    d.Adoption = +d.Adoption;
    d.Euthanasia = +d.Euthanasia;
    d.Transfer = +d.Transfer;
    d.Foster = +d.Foster;
    if (d.Adoption > max){
      max = d.Adoption
    }
    if (d.Euthanasia > max){
      max = d.Euthanasia
    }
    if (d.Transfer > max){
      max = d.Transfer
    }
    if (d.Foster > max){
      max = d.Foster
    }  
      });

  // List of subgroups = header of the csv files = soil condition here
  var subgroups = ['Adoption', 'Transfer', 'Foster', 'Euthanasia']

  var groups = d3.map(data, function(d){return(d.PrimaryColor)}).keys()
  console.log(subgroups);
  console.log(groups);
  

  // Add X axis
  var x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])
  svg3.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, max])
    .range([ height, 0 ]);
  svg3.append("g")
    .call(d3.axisLeft(y));

  // Another scale for subgroup position?
  var xSubgroup = d3.scaleBand()
    .domain(subgroups)
    .range([0, x.bandwidth()])
    .padding([0.05])

  // color palette = one color per subgroup
  var color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['#e41a1c','#377eb8','#4daf4a', 'yellow'])

  // Show the bars
  svg3.append("g")
    .selectAll("g")
    // Enter in data = loop group per group
    .data(data)
    .enter()
    .append("g")
      .attr("transform", function(d) { return "translate(" + x(d.PrimaryColor) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
      .attr("x", function(d) { return xSubgroup(d.key); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", xSubgroup.bandwidth())
      .attr("height", function(d) { return height - y(d.value); })
      .attr("fill", function(d) { return color(d.key); });

})


/////AGE GROUP
var svg4 = d3.select("#age")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



// Parse the Data
d3.csv("graphing_csvs/age_group.csv", function(data) {
  
 
  max = 0;
  data.forEach(function(d) {
    d.Adoption = +d.Adoption;
    d.Euthanasia = +d.Euthanasia;
    d.Transfer = +d.Transfer;
    d.Foster = +d.Foster;
    if (d.Adoption > max){
      max = d.Adoption
    }
    if (d.Euthanasia > max){
      max = d.Euthanasia
    }
    if (d.Transfer > max){
      max = d.Transfer
    }
    if (d.Foster > max){
      max = d.Foster
    }  
      });

  // List of subgroups = header of the csv files = soil condition here
  var subgroups = ['Adoption', 'Transfer', 'Foster', 'Euthanasia']

  var groups = d3.map(data, function(d){return(d['Age Group'])}).keys()
  console.log(subgroups);
  console.log(groups);
  

  // Add X axis
  var x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])
  svg4.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0))
    .selectAll("text")
    .attr("transform", "translate(-10,0)")
    .style("text-anchor", "end");

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, max])
    .range([ height, 0 ]);
  svg4.append("g")
    .call(d3.axisLeft(y));

  // Another scale for subgroup position?
  var xSubgroup = d3.scaleBand()
    .domain(subgroups)
    .range([0, x.bandwidth()])
    .padding([0.05])

  // color palette = one color per subgroup
  var color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['#e41a1c','#377eb8','#4daf4a', 'yellow'])

  // Show the bars
  svg4.append("g")
    .selectAll("g")
    // Enter in data = loop group per group
    .data(data)
    .enter()
    .append("g")
      .attr("transform", function(d) { return "translate(" + x(d['Age Group']) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
      .attr("x", function(d) { return xSubgroup(d.key); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", xSubgroup.bandwidth())
      .attr("height", function(d) { return height - y(d.value); })
      .attr("fill", function(d) { return color(d.key); });

})

