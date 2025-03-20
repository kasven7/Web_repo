var randomNumber = Math.floor(Math.random() * 6) + 1;


if(randomNumber === 1){
  document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
  document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}

else if(randomNumber === 2){
  document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
  document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}

else if(randomNumber === 3 ){
  document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
  document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}

else if(randomNumber === 4){
  document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
  document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}

else if(randomNumber === 5){
  document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
  document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}

else if(randomNumber === 6){
  document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
  document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
  
}