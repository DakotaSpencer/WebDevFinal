let url = "http://localhost:3000/api";

fetch(url).then(response => response.json()).then(data => {
  console.log(data)
  data.User.forEach(element => {

  });
});

const dataColor = {
    labels: [
      'Pink',
      'Orange',
      'Purple',
      'Lime Green'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [4,2,6,5],
      backgroundColor: [
        'pink',
        'rgb(255,165,0)',
        'purple',
        'rgb(50,205,50)'
      ],
      hoverOffset: 50
    }]
  };

  const configColor = {
    type: 'pie',
    data: dataColor,
    options: {}
  };

  var colorChart = new Chart(
    document.getElementById('colorChart'),
    configColor
  );