/* User input */
/* Rock paper scissors game */

let userCount = 0;
let newUserCount = 0;
let newComputerCount = 0;
let computerCount = 0;
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    userInput = e.innerHTML;
    
  });
});

/* returns value of random index in array */
function getCompChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}

/* plays a round of rock paper scissors and returns winner */
function getWinner(userInput, computerChoice) {
  const userSelection = userInput;
  const computerInput = computerChoice;
  let winner;

  if (userSelection === "rock" && computerInput === "scissors") {
    winner = 1;
  } else if (userSelection === "paper" && computerInput === "rock") {
    winner = 1;
  } else if (userSelection === "scissors" && computerInput === "paper") {
    winner = 1;
  } else if (userSelection === computerInput) {
    winner = 2;
  } else {
    winner = 3;
  }
  return winner;
}

/* sets new score after each game */
function updateScore(score) {
  newScore = score++;
  return newScore;
}

/* end functions */
