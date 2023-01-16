/* functions */
/* gets value of random index inside of array */
function computerRandomSelection() {
  let choices = ["rock", "paper", "scissors"];
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
  let winner;

  if (userInput === "rock" && computerInput === "scissors") {
    winner = true;
  } else if (userInput === "paper" && computerInput === "rock") {
    winner = true;
  } else if (userInput === "scissors" && computerInput === "paper") {
    winner = true;
  } else {
    winner = false;
  }
  return winner;
}

/* calculates who won the round */
function winnerOfRound(userInput, computerInput) {}
/* end functions */

/* Rock paper scissors game */
const userInput = prompt("rock, paper, or scissors?... ");
const computerChoice = computerRandomSelection();
const isValid = verifyInput(userInput);

if (userInput.isValid) {
  calculateWinner(userInput, computerChoice);
  if ((calculateWinner = true)) {
    console.log("You win!");
  } else {
    console.log("You lose... computer wins!");
  }
} else {
  console.log("invalid input");
}

/* end rock paper scissors game */
