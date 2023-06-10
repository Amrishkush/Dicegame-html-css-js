// var player1 = Math.floor(Math.random()*6) + 1;

// var player2 = Math.floor(Math.random()*6) + 1;

// var diceimage1 = "images/dice" + player1 + ".png";
// var diceimagesource1 = document.querySelectorAll("img")[0];
// diceimagesource1.setAttribute("src", diceimage1);

// var diceimage2 = "images/dice" + player2 + ".png";
// var diceimagesource2 = document.querySelectorAll("img")[1];
// diceimagesource2.setAttribute("src", diceimage2);

function refresh(){
 var player1 = Math.floor(Math.random()*6) + 1;

 var player2 = Math.floor(Math.random()*6) + 1;
if (player1 > player2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (player2 > player1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
  }
var diceimage1 = "images/dice" + player1 + ".png";
var diceimagesource1 = document.querySelectorAll("img")[0];
diceimagesource1.setAttribute("src", diceimage1);

var diceimage2 = "images/dice" + player2 + ".png";
var diceimagesource2 = document.querySelectorAll("img")[1];
diceimagesource2.setAttribute("src", diceimage2);
}