/* functions */

function computerRandomSelection() {
  let choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];

  return random;
}

/* checks if user input is valid*/
function verifyInput(userInput) {
  const longHairDontCare = userInput.toLowerCase(); //ignores case sensitivity if user input
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
  this.verifiedInput = verifiedInput;
  this.computerRandomSelection = computerRandomSelection;

  let winner;

  return winner;
}

/* calculates who won the round */
function winnerOfRound(userInput, computerInput) {}

/* end functions */

/* Rock paper scissors game */
const userInput = prompt("rock, paper, or scissors?... ");
const computerChoice = computerRandomSelection();
const isValid = verifyInput(userInput);

if (userInput.isValid()) {
  calculateWinner(userInput, computerChoice);
} else {
  console.log("invalid input");
}
const calculatedWinner = calculateWinner(validInput, computerChoice);

/* end rock paper scissors game */
