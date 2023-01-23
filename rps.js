/* returns value of random index in array */
function computerRandomSelection() {
  const choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}

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
  display.appendChild(text);
}

function appendComputerInput(text) {
  display.appendChild(text);
}

/* end functions */

/* Rock paper scissors game */

let userCount = 0;
let newUserCount = 0;
let newComputerCount = 0;
let computerCount = 0;

const display = document.querySelector("#display");
const computerChoice = computerRandomSelection();
let userInput;
const button = document.querySelectorAll("button");

button.forEach((button) => {
  button.addEventListener("click", () => {
    userInput = button.id;
    return userInput;
  });
});

appendUserInput(userInput);
