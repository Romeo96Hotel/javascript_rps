/* checks if user input is valid*/
function verifyUserInput(userInput) {
  userchoice = userInput.toLowerCase();

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
/* takes in both verified user input and computer input and returns respective number value for round winner */
function roundWinner(verifiedInput, computerRandomSelection) {
  const userInput = verifiedInput;
  const computerInput = computerRandomSelection;
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
/* increments the counter */
function addToCount(currentValue) {
  let currentCount = currentValue;

  currentCount++;

  return currentCount;
}

function setScore(score) {
  newScore = score++;
}
/* end functions */

/* Rock paper scissors game */

let userCount = 0;
let newUserCount = 0;
let newComputerCount = 0;
let computerCount = 0;

/* runs game 3 times */
for (let i = 0; i < 5; i++) {
  const computerChoice = computerRandomSelection();
  const userInput = prompt("rock, paper, or scissors?... ");
  const verifiedInput = verifyUserInput(userInput);
  const winner = roundWinner(userInput, computerChoice);

  /* if input is valid */
  if (verifiedInput) {
    console.log("user chooses " + userInput);
    console.log("computer chooses " + computerChoice);
    /* if player wins */
    if (winner === 1) {
      newUserCount = addToCount(userCount);
      console.log("Player wins!");
      /* if its a draw */
    } else if (winner === 2) {
      newUserCount = addToCount(userCount);
      newComputerCount = addToCount(computerCount);
      console.log("draw!");
      /* computer wins */
    } else {
      newComputerCount = addToCount(computerCount);
      console.log("computer wins!");
    }
    /* if input is not valid */
  } else {
    console.log("user chooses " + userInput + " Invalid input");
  }

  console.log(
    "Player score: " +
      newUserCount +
      " / " +
      "Computer score: " +
      newComputerCount
  );
  /* set starting counts to the new count's value*/
  userCount = newUserCount;
  computerCount = newComputerCount;
}

if (computerCount > userCount) {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Computer wins the game!");
} else if (user > computerCount) {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Computer wins the game!");
} else {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Draw! both players win... NOTHING!");
}
