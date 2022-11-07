"use strict";
/*
//reding element
console.log(document.querySelector(".message").textContent);

//changing text content
document.querySelector(".message").textContent = "🎉🎉Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

//how to get input from browser in our console
console.log(document.querySelector(".guess").value);

//how to set it
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//when you want to restart the game!
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#2a9d8f";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
});

//to start palying the game.
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //when no input is given
  if (!guess) {
    displayMessage("😒 enter a number! 🚫");

    //when the player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉🎉Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#f4a261";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //when the player enter a higher number
    // } else if (guess > secretNumber) {
    //   if (score > 0) {
    //     document.querySelector(".message").textContent = "you are higher! ⬆️";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".message").textContent = "You lost the game 🥴";
    //   }

    //when player enters a lower number
    // } else if (guess < secretNumber) {
    //   if (score > 0) {
    //     document.querySelector(".message").textContent = "you are lower! ⬇️";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".message").textContent = "You lost the game 🥴";
    //   }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "you are higher! ⬆️" : "you are lower! ⬇️"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 🥴";
    }
  }
});
