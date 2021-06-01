const dataFood = {
    labels: [
      'red',
      'Blue',
      'Yellow',
      'Green'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [1,1,1,1],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        '#daddad'
      ],
      hoverOffset: 50
    }]
  };

  const configFood = {
    type: 'pie',
    data: dataFood,
    options: {}
  };

  var foodChart = new Chart(
    document.getElementById('foodChart'),
    configFood
  );