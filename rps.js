let playerCount = 0;
let computerCount = 0;
const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");
const playerDisplay = document.createElement("h1");
const computerDisplay = document.createElement("h1");
const scoreDisplay = document.createElement("h1");
const winnerDisplay = document.createElement("h1");

/* Rock paper scissors game */
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerInput = button.textContent;
    const computerInput = getCompChoice();
    const winner = getWinner(playerInput, computerInput);

    playerDisplay.textContent = `Player chooses: ${playerInput}!`;
    computerDisplay.textContent = `Computer chooses: ${computerInput}!`;
    display.appendChild(playerDisplay);
    display.appendChild(computerDisplay);

    if (winner === "player") playerCount++;
    if (winner === "computer") computerCount++;

    scoreDisplay.textContent = `Player Score: 
    ${playerCount} Computer Score: ${computerCount}`;
    display.appendChild(scoreDisplay);

    if (playerCount === 5) winnerDisplay.textContent = "You win!";
    if (computerCount === 5) winnerDisplay.textContent = "You lose!";

    display.appendChild(winnerDisplay);
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
