let playerCount = 0;
let newplayerCount = 0;
let totalCount = 0;
let newComputerCount = 0;
let computerCount = 0;
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

/* Rock paper scissors game */
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerInput = button.innerHTML;
    const computerInput = getCompChoice();
    const winner = getWinner(playerInput, computerInput);

    console.log(winner);
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
    winner = 1;
  } else if (playerSelection === "paper" && computerInput === "rock") {
    winner = 1;
  } else if (playerSelection === "scissors" && computerInput === "paper") {
    winner = 1;
  } else if (playerSelection === computerInput) {
    winner = 2;
  } else {
    winner = 3;
  }
  return winner;
}

/* sets new score after each game */
function updateScore(winner) {}

/* end functions */
