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
});

