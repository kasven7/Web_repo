// image1 generation
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");


// image2 generation
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");


// a script which determines who won or was it a draw
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "👑 Player 1 wins!";
}

else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 wins! 👑";
}

else{
  document.querySelector("h1").textContent = "👑 It's a draw! 👑";
}
