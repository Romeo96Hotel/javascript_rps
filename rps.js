/* rps class */
class RpsGame {
  constructor(userInput, computerInput) {
    this.userInput = userInput;
    this.computerInput = computerInput;
  }
  
}

/* gets value of random index inside of array */
function computerRandomSelection() {
  const choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}

/* checks if user input is valid*/
function verifyInput(userInput) {
  //ignores case sensitivity if user input
  const longHairDontCare = userInput.toLowerCase();
  let isValid;

  switch (longHairDontCare) {
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
    winner = 3;
  } else {
    winner = 2;
  }
  return winner;
}

/* calculates who won the round */
function winnerOfRound() {}

/* end functions */

/* Rock paper scissors game */
const rps = new RpsGame();
const userInput = rps.userInput;
console.log(userinput);
