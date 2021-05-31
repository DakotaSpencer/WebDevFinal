const dataAnimal = {
    labels: [
      'Red',
      'Blue',
      'Yellow',
      'Green'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [4,2,6,5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        '#daddad'
      ],
      hoverOffset: 1000
    }]
  };

  const configAnimal = {
    type: 'pie',
    dataAnimal,
    options: {}
  };

  var animalChart = new Chart(
    document.getElementById('animalChart'),
    configAnimal
  );