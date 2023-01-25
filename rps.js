let playerCount = 0;
let computerCount = 0;
let totalCount;
const playerDisplay = document.querySelector("#player");
const computerdisplay = document.querySelector("#computer");
const scoreDisplay = document.querySelector("#score");
const winnerDisplay = document.querySelector("#winner");
const buttons = document.querySelectorAll("button");

/* Rock paper scissors game */
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerInput = button.textContent;
    const computerInput = getCompChoice();
    const winner = getWinner(playerInput, computerInput);

    display.

    if (winner === "player") playerCount++;
    if (winner === "computer") computerCount++;

    if (playerCount === 5) console.log("player wins");
    if (computerCount === 5) console.log("computer wins");
  });
});

/* returns value of random index in array */
function getCompChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}

/* plays a round of rock paper scissors and returns winner */
function getWinner(playerInput, computerChoice) {
  const playerSelection = playerInput;
  const computerInput = computerChoice;
  let winner;

  if (playerSelection === "rock" && computerInput === "scissors") {
    winner = "player";
  } else if (playerSelection === "paper" && computerInput === "rock") {
    winner = "player";
  } else if (playerSelection === "scissors" && computerInput === "paper") {
    winner = "player";
  } else if (playerSelection === computerInput) {
    winner = "tie";
  } else {
    winner = "computer";
  }
  return winner;
}
