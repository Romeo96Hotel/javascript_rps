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
  /* takes in both verified user input and computer input and returns who won */
calculateWinner(verifiedInput, computerRandomSelection) {
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
}
  /* returns value of random index in array */
  function computerRandomSelection() {
    const choices = ["rock", "paper", "scissors"];
    const random = choices[Math.floor(Math.random() * choices.length)];
    return random;
  }

/* calculates who won the round */
function winnerOfRound() {}

/* Rock paper scissors game */
const computerChoice = computerRandomSelection();
const userInput = prompt("rock, paper, or scissors?... ");
const rps = new RpsGame(userInput, computerChoice);
const whoWins
if(rps.isValid = true) {

  if(calculateWinner() = 1 ) {
    console.log("You win");
  } else if(rps.calculateWinner() = 2) {
    console.log("Draw!");
  } else {
    console.log("Computer Wins!");
  }

} else {
  console.log("Invalid entry");
}
