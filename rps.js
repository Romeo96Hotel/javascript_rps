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
  /* set starting counts to the new count's value for new round*/
  userCount = newUserCount;
  computerCount = newComputerCount;
}

/* compares computer score to user score at the end of the game */
if (computerCount > userCount) {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Computer wins the game!");
} else if (userCount > computerCount) {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("User wins the game!");
} else {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Draw! both players win... NOTHING!");
}
