let userCount = 0;
let newUserCount = 0;
let newComputerCount = 0;
let computerCount = 0;

/* returns value of random index in array */
function computerRandomSelection() {
  const choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}

/* takes in both verified user input and computer input and returns respective number value for round winner */
function roundWinner(verifiedInput, computerRandomSelection) {
  const userInput = verifiedInput;
  const computerInput = computerRandomSelection;
  let winner;

  if (userInput === "rock" && computerInput === "scissors") {
    winner = 1;
  } else if (userInput === "paper" && computerInput === "rock") {
    winner = 1;
  } else if (userInput === "scissors" && computerInput === "paper") {
    winner = 1;
  } else if (userInput === computerInput) {
    winner = 2;
  } else {
    winner = 3;
  }
  return winner;
}

/* takes user input and computer input and updates the display accordingly */
function updateDisplay(input1, input2) {
  const verifiedInput = verifyUserInput(userInput);
  const computerChoice = computerRandomSelection();
  verifiedInput = input1;
  computerChoice = input2;
}

/* increments the counter */
function addToCount(currentValue) {
  let currentCount = currentValue;

  currentCount++;

  return currentCount;
}

/* sets new score */
function setScore(score) {
  newScore = score++;
}
/* end functions */

/* Rock paper scissors game */




/* set starting counts to the new count's value for new round*/


/* compares computer score to user score at the end of the game */

