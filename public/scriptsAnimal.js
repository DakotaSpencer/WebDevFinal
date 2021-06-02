// let url = "http://localhost:3000/api";

// fetch(url).then(response => response.json()).then(data => {
//   console.log(data)
//   data.User[5].forEach(element => {

//   });
// });

const dataAnimal = {
    labels: [
      'Dog',
      'Cat',
      'Fish',
      'Bird'
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

  const configAnimal = {
    type: 'pie',
    data: dataAnimal,
    options: {}
  };

  var animalChart = new Chart(
    document.getElementById('animalChart'),
    configAnimal,
  );

