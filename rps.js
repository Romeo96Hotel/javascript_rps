/* returns value of random index in array */
function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}

/* sets new score after each game */
function updateScore(score) {
  newScore = score++;
  return newScore;
}

/* plays a round of rock paper scissors and returns winner */
function roundWinner(verifiedInput, computerChoice) {
  const userInput = verifiedInput;
  const computerInput = computerChoice;
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

/* end functions */

/* Rock paper scissors game */

let userCount = 0;
let newUserCount = 0;
let newComputerCount = 0;
let computerCount = 0;

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const userSelection = document.createElement("h1");
const computerDisplay = document.createElement("h1");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userSelection.innerHTML = button.innerHTML;
    display.appendChild(userSelection);
    return userSelection;
  });
});
