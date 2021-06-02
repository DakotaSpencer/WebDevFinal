let url2 = "http://localhost:3000/api";

fetch(url2).then(response => response.json()).then(data => {
  console.log(data)
  let questions = [0,0,0,0]
  data.User.forEach(element => {
    console.log(element)
    if(element.questionTwo === "pink"){
      questions[0]++
    }else if(element.questionTwo === "orange"){
      questions[1]++
    }else if(element.questionTwo === 'purple'){
      questions[2]++
    }else if(element.questionTwo === 'limeGreen'){
      questions[3]++
    }
  });
  const dataColor = {
    labels: [
      'Pink',
      'Orange',
      'Purple',
      'Lime Green'
    ],
    datasets: [{
      label: 'Favorite Color',
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

  const configColor = {
    type: 'pie',
    data: dataColor,
    options: {}
  };

  var colorChart = new Chart(
    document.getElementById('colorChart'),
    configColor
  );
});

