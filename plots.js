// Initializes the page with a default plot
function init() {
    d3.csv("name of csv").then(function(dogData){
        dates = [];
        values = [];
        i = 0;
        dogData.forEach(function(d){
            dates[i] = d3.timeParse("%Y-%m-%d")(d.date);
            values[i] = +d.guns;
            i++;
        });
        console.log()
        data = [{
            x: dates,
            y: values
        }];
        Plotly.newPlot("plot_19", data)
    })

//     data = [{
//       x: [1, 2, 3, 4, 5],
//       y: [1, 2, 4, 8, 16] }];
  
//     Plotly.newPlot("plot", data);
  }
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    var x = [];
    var y = [];
  
    if (dataset === 'guns') {
      x = [1, 2, 3, 4, 5];
      y = [1, 2, 4, 8, 16];
    }
  
    if (dataset === 'ammo') {
      x = [10, 20, 30, 40, 50];
      y = [1, 10, 100, 1000, 10000];
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }
  
  init();
  