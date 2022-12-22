'use strict';
//revising from the beginning again

// document.querySelector('.message').textContent = 'Correct Number 🎖️';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 19;
// document.querySelector('.guess').value = 23;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  //*When there is no input */
  if (!guess) {
    displayMessage('Enter Number !');

    //*When player Wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number🎖️');
    document.querySelector('body').style.backgroundColor = '#2ec4b6';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score + '🏆';
      document.querySelector('.highscore').textContent = highScore;
    }

    //*When guess is Not correct
  } else if (guess !== secretNumber) {
    if (score > 1) {
      let message = guess < secretNumber ? 'Go High  !' : 'Go Low  !';
      displayMessage(message);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Oops!  You lost.');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#9d0208';
    }
  }
});

/*Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start Guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#003459';
  document.querySelector('.number').style.width = '15rem';
});
