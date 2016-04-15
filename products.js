// Product array //
var ballList = [

  // Objects with Keys in array //
  {
    name: "Baseball",
    description: "Ball used for playing baseball",
    price: "$3.99",
    img: "images/baseball.png"
  }

  {
    name: "Basketball",
    description: "Ball used for playing basketball",
    price: "$19.99",
    img: "images/basketball.png"
  }

  {
    name: "Bowling Ball",
    description: "Ball used for bowling",
    price: "$199.99",
    img: "images/bowling.png"
  }

  {
    name: "Crystal Ball",
    description: "Ball used for telling the future",
    price: "Priceless",
    img: "images/crystal.png"
  }

  {
    name: "Football",
    description: "Ball used for playing Football",
    price: "$14.99",
    img: "images/football.png"
  }

  {
    name: "Golf Ball",
    description: "Ball used for playing golf",
    price: "$9.99 (for 3)",
    img: "images/golfball.png"
  }

  {
    name: "Soccer Ball",
    description: "Ball used for playing soccer",
    price: "$49.99",
    img: "images/soccer.png"
  }

  {
    name: "Tennis Ball",
    description: "Ball used for playing tennis",
    price: "$9.99 (for 3)",
    img: "images/tennis.png"
  }
];

// Linking up with HTTML //
var ballKeys = document.getElementById("ballInfo");

// For loop to output product information //
for (var i = 0; i < ballList.length; i++) {
  var currentBall = ballList[i];

  ballKeys.innerHTML +=
  "<div>" +
    "<h2>" + currentBall.name + "</h2>" +
    "<img src=\"" + currentBall.img + "\">" +
    "<p>" + currentBall.description + "</p>" +
    "<p>" + currentBall.price + "</p>" +
  "</div>";
}