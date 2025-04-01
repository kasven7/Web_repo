var gamePattern = [];
var buttonColors = ["red", "green", "blue", "yellow"];

$(".btn").on("click", function () {
  var userChosenColor = $(this).attr("id");
});

function nextSequence() {
  var randomNum = Math.floor(Math.random() * 4);
  var randomColor = buttonColors[randomNum];
  gamePattern.push(randomColor);
  $("#" + randomColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("./sounds/" + randomColor + ".mp3");
  audio.play();
}
