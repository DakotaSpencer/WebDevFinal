const dataFood = {
    labels: [
      'Pizza',
      'Burger',
      'Chicken Nuggests',
      'Nachoes'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [1,1,1,1],
      backgroundColor: [
        'pink',
        'rgb(255,165,0)',
        'purple',
        'rgb(50,205,50)'
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