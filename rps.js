/* returns value of random index in array */
function computerRandomSelection() {
  const choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}

/* returns user input */
function getUserInput() {}

/* increments the counter */
function addToCount(currentValue) {
  let currentCount = currentValue;
  currentCount++;
  return currentCount;
}
/* sets new score after each game */
function setScore(score) {
  newScore = score++;
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

const display = document.querySelector("#display");
const computerChoice = computerRandomSelection();
