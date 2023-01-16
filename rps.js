/* rps class */
class RpsGame {
  constructor(userInput, computerInput) {
    this.userInput = userInput;
    this.computerInput = computerInput;
  }

  /* checks if user input is valid*/
  verifyInput() {
    switch (this.userInput) {
      case "rock":
        isValid = true;
        break;

      case "scissors":
        isValid = true;
        break;

      case "paper":
        isValid = true;
        break;

      default:
        isValid = false;
        break;
    }
    return isValid;
  }
}

function computerRandomSelection() {
  ///* gets value of random index inside of array */
  const choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}

/* takes in both verified user input and computer input and returns who won */
function calculateWinner(verifiedInput, computerRandomSelection) {
  let userInput = verifiedInput;
  let computerInput = computerRandomSelection;
  let winner = 0;

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

/* calculates who won the round */
function winnerOfRound() {} ///* end functions */

/* Rock paper scissors game */
const userInput = prompt("rock, paper, or scissors?... ");
const computerChoice = computerRandomSelection();
const rps = new RpsGame(userInput, computerChoice);
if (rps.verifyInput) calculateWinner(rps.userInput);
