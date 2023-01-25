let playerCount = 0;
let computerCount = 0;
let totalCount;
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

/* Rock paper scissors game */
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerInput = button.textContent;
    const computerInput = getCompChoice();
    const winner = getWinner(playerInput, computerInput);

    if (winner === "player") {
      playerCount++;
    } else if (winner === "computer") {
      computerCount++;
    }
    totalCount = "Player: ${playerCount} Computer: ${computerCount}.";
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
    winner = undefined;
  } else {
    winner = "computer";
  }
  return winner;
}
