var element = document.getElementById("myChart").getContext("2d");
    var chartType = 'bar';
  var chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    };
    var optiontype = {};
var chart = new Chart(element,{type: chartType, data: chartData, options: optiontype});
