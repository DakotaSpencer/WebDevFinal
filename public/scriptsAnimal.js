let url = "http://localhost:3000/api";

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
      'Red',
      'Blue',
      'Yellow',
      'Green'
    ],
    datasets: [{
      label: 'Favorite Animal',
      data: questions,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        '#daddad'
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


