/* checks if user input is valid*/
function verifyUserInput(userInput) {
  userchoice = userInput;
  switch (userchoice) {
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
/* returns value of random index in array */
function computerRandomSelection() {
  const choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}

/* calculates who won the round */
function winnerOfRound() {}
/* end functions */

/* Rock paper scissors game */
const computerChoice = computerRandomSelection();
const userInput = prompt("rock, paper, or scissors?... ");
const verifiedInput = verifyUserInput(userInput);
const roundWinner = calculateWinner(userInput, computerChoice);

if (verifiedInput) {
  console.log("user chooses " + userInput);
  console.log("computer chooses " + computerChoice);

  if (roundWinner === 1) {
    console.log("Player wins!");
  } else if (roundWinner === 2) {
    console.log("draw!");
  } else {
    console.log("computer wins!");
  }
} else {
  console.log("user chooses " + userInput + " Invalid input");
}

/* if (verifyUserInput(userInput)) {
  if ((winner = 1)) {
    console.log(userInput);
    console.log("You win");
  } else if ((winner = 2)) {
    console.log(userInput);
    console.log("Draw!");
  } else {
    console.log(userInput);
    console.log("Computer Wins!");
  }
} else {
  console.log("Invalid entry");
} */
