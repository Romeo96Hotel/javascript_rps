/* returns value of random index in array */
const computerInput = function() {
  const choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}

/* returns user input */
const userInput = function() {}

/* increments the counter */
const updateCount = function(currentValue) {
  let currentCount = currentValue;
  currentCount++;
  return currentCount;
}

/* sets new score after each game */
const updateScore = function(score) {
  newScore = score++;
  return newScore;
}

/* appends input taken from user to the display div */
function appendUserInput(text) {
  const newText = document.createElement("h1");
  newText.appendChild(text);
  return newText;
}

function appendComputerInput(text) {
  const newText = document.createElement("h1");
  newText.appendChild(text);
  return newText;
}

/* end functions */

/* Rock paper scissors game */

let userCount = 0;
let newUserCount = 0;
let newComputerCount = 0;
let computerCount = 0;
