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

function playRound(userInput, computerInput) {
  userSelection = userInput;
  computerSelection = computerInput;
  
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
