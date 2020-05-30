// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 20, left: 50},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

d3.selectAll("#selDataset").on("change", makePercentPlot);

function makePercentPlot() {
    var buttonClick = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = buttonClick.property("value");

    if (dataset === "breeds") {
        csv_path = "graphing_csvs/breeds.csv"
      }
    else if (dataset === "gender") {
        csv_path = "graphing_csvs/gender.csv"
      }
    else if (dataset === "age group") {
        csv_path = "graphing_csvs/age_group.csv"
      }
    else if (dataset === "color") {
        csv_path = "graphing_csvs/colors.csv"
      }
    else {
        console.log("error")
      }

// Parse the Data
    d3.csv(csv_path, function(data) {

  // List of subgroups = header of the csv files = soil condition here
    var subgroups = [data.Adoption, data.Transfer, data.Foster, data.Euthanasia]

  // List of groups = species here = value of the first column called group -> I show them on the X axis
    if (dataset === "breeds") {
        var groups = d3.map(data, function(d){return(d.PrimaryBreed)}).keys()
    }
    else if (dataset === "gender") {
        var groups = d3.map(data, function(d){return(d.Sex)}).keys()
    }
    else if (dataset === "age group") {
        var groups = d3.map(data, function(d){return(d["Age Group"])}).keys()
    }
    else if (dataset === "color") {
        var groups = d3.map(data, function(d){return(d.PrimaryColor)}).keys()
    }
    else {
        console.log("error")
    }

  // Add X axis
    var x = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.2])
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSizeOuter(0));

  // Add Y axis
     var y = d3.scaleLinear()
        .domain([0, 100])
        .range([ height, 0 ]);
    svg.append("g")
        .call(d3.axisLeft(y));

  // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#e41a1c','#377eb8','#4daf4a'])

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
    svg.append("g")
        .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .enter().append("g")
        .attr("fill", function(d) { return color(d.key); })
        .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
        .data(function(d) { return d; })
        .enter().append("rect")
            .attr("x", function(d) { return x(d.data.group); })
            .attr("y", function(d) { return y(d[1]); })
            .attr("height", function(d) { return y(d[0]) - y(d[1]); })
            .attr("width",x.bandwidth())
    })
}