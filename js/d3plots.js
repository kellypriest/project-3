// Initializes the page with a default plot
function init() {
    d3.csv("graphing_csvs/breeds.csv").then(function(dogData){
        breeds = [];
        adoption = [];
        euthanasia = [];
        transfer = [];
        foster = [];
        i = 0;
        dogData.forEach(function(d){
            breeds[i] = d.PrimaryBreed;
            adoption[i] = d.Adoption;
            euthanasia[i] = d.Euthanasia;
            transfer[i] = d.Transfer;
            foster[i] = d.Foster;
            i++;
        });
       
        var trace1 = {
          x: breeds,
          y: adoption,
          name: 'Adoption',
          type: 'bar'
        };
        
        var trace2 = {
          x: breeds,
          y: euthanasia,
          name: 'Euthanasia',
          type: 'bar'
        };
        var trace3 = {
          x: breeds,
          y: transfer,
          name: 'Transfer',
          type: 'bar'
        };
        var trace4 = {
          x: breeds,
          y: foster,
          name: 'Foster',
          type: 'bar'
        };
        
        var data = [trace1, trace2, trace3, trace4];
        
        var layout = {barmode: 'stack'};
        
        Plotly.newPlot('myDiv', data, layout);
    })
  }
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
  
  
    if (dataset === 'breeds') {
      init();
    }
  
    if (dataset === 'age') {
      d3.csv("graphing_csvs/age_group.csv").then(function(dogData){
        age_group = [];
        adoption = [];
        euthanasia = [];
        transfer = [];
        foster = [];
        i = 0;
        dogData.forEach(function(d){
            age_group[i] = d['Age Group'];
            adoption[i] = d.Adoption;
            euthanasia[i] = d.Euthanasia;
            transfer[i] = d.Transfer;
            foster[i] = d.Foster;
            i++;
        });
       
        var trace1 = {
          x: age_group,
          y: adoption,
          name: 'Adoption',
          type: 'bar'
        };
        
        var trace2 = {
          x: age_group,
          y: euthanasia,
          name: 'Euthanasia',
          type: 'bar'
        };
        var trace3 = {
          x: age_group,
          y: transfer,
          name: 'Transfer',
          type: 'bar'
        };
        var trace4 = {
          x: age_group,
          y: foster,
          name: 'Foster',
          type: 'bar'
        };
        
        var data = [trace1, trace2, trace3, trace4];
        
        var layout = {barmode: 'stack'};
        // figure out how to restyle plots
        // Plotly.newPlot('myDiv', data, layout);
    })
    }

    if (dataset === 'gender') {
      d3.csv("graphing_csvs/gender.csv").then(function(dogData){
        gener = [];
        adoption = [];
        euthanasia = [];
        transfer = [];
        foster = [];
        i = 0;
        dogData.forEach(function(d){
            gender[i] = d.Sex;
            adoption[i] = d.Adoption;
            euthanasia[i] = d.Euthanasia;
            transfer[i] = d.Transfer;
            foster[i] = d.Foster;
            i++;
        });
       
        var trace1 = {
          x: gender,
          y: adoption,
          name: 'Adoption',
          type: 'bar'
        };
        
        var trace2 = {
          x: gender,
          y: euthanasia,
          name: 'Euthanasia',
          type: 'bar'
        };
        var trace3 = {
          x: gender,
          y: transfer,
          name: 'Transfer',
          type: 'bar'
        };
        var trace4 = {
          x: gender,
          y: foster,
          name: 'Foster',
          type: 'bar'
        };
        
        var data = [trace1, trace2, trace3, trace4];
        
        var layout = {barmode: 'stack'};
        // figure out how to restyle plots
        // Plotly.newPlot('myDiv', data, layout);
    })
    }

    if (dataset === 'color') {
      d3.csv("graphing_csvs/colors.csv").then(function(dogData){
        color = [];
        adoption = [];
        euthanasia = [];
        transfer = [];
        foster = [];
        i = 0;
        dogData.forEach(function(d){
            color[i] = d.PrimaryColor;
            adoption[i] = d.Adoption;
            euthanasia[i] = d.Euthanasia;
            transfer[i] = d.Transfer;
            foster[i] = d.Foster;
            i++;
        });
       
        var trace1 = {
          x: color,
          y: adoption,
          name: 'Adoption',
          type: 'bar'
        };
        
        var trace2 = {
          x: color,
          y: euthanasia,
          name: 'Euthanasia',
          type: 'bar'
        };
        var trace3 = {
          x: color,
          y: transfer,
          name: 'Transfer',
          type: 'bar'
        };
        var trace4 = {
          x: color,
          y: foster,
          name: 'Foster',
          type: 'bar'
        };
        
        var data = [trace1, trace2, trace3, trace4];
        
        var layout = {barmode: 'stack'};
        // figure out how to restyle plots
        // Plotly.newPlot('myDiv', data, layout);
    })
    }
  
    // Note the extra brackets around 'x' and 'y'
    // Plotly.restyle("plot", "x", [x]);
    // Plotly.restyle("plot", "y", [y]);
  }
  
  init();
  