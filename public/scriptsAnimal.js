// let url = "http://localhost:3000/api";

fetch(url).then(response => response.json()).then(data => {
  console.log(data)
  let questions = [0,0,0,0]
  data.User.forEach(element => {
    console.log(element)
    if(element.questionOne === "dog"){
      questions[0]++
    }else if(element.questionOne === "cat"){
        questions[1]++
    }else if(element.questionOne === "fish"){
      questions[2]++
    }else if(element.questionOne === "bird")
    questions[3]++
  });
  const dataAnimal = {
    labels: [
      'Dog',
      'Cat',
      'Fish',
      'Bird'
    ],
    datasets: [{
      label: 'Favorite Animal',
      data: questions,
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
});


