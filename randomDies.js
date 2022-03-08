
var randomNumber1 = 1 + Math.floor(Math.random() * 6);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource =randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = 1 + Math.floor(Math.random() * 6);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 =randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Bakhtiyor Wins!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Zilola Wins!"
} else {
  document.querySelector("h1").innerHTML = "Draw!"
}
