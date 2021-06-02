let url3 = "http://localhost:3000/api";

fetch(url3).then(response => response.json()).then(data => {
  console.log(data)
  let questions = [0,0,0,0]
  data.User.forEach(element => {
    console.log(element)
    if(element.questionThree === "pizza"){
      questions[0]++
    }else if(element.questionThree === "burger"){
      questions[1]++
    }else if(element.questionThree === "chickenNugget"){
      questions[2]++
    }else if(element.questionThree === "nachoes"){
      questions[3]++
    }
  });
  const dataFood = {
    labels: [
      'Red',
      'Blue',
      'Yellow',
      'Green'
    ],
    datasets: [{
      label: 'Favorite Food',
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

  const configFood = {
    type: 'pie',
    data: dataFood,
    options: {}
  };

  var foodChart = new Chart(
    document.getElementById('foodChart'),
    configFood
  );
});

