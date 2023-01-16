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
/* end functions */

/* Rock paper scissors game */
/* runs game 3 times */
for (let i = 0; i < 3; i++) {
  const computerChoice = computerRandomSelection();
  const userInput = prompt("rock, paper, or scissors?... ");
  const verifiedInput = verifyUserInput(userInput);
  const winner = roundWinner(userInput, computerChoice);
  let userCount = 0;
  let computerCount = 0;
  let totalCount = 0;

  if (verifiedInput) {
    console.log("user chooses " + userInput);
    console.log("computer chooses " + computerChoice);
    if (winner === 1) {
      userCount++;
      console.log("Player wins!");
      console.log(
        "Player score: " +
          playerCount +
          "/" +
          "Computer score: " +
          computerCount
      );
    } else if (winner === 2) {
      userCount++;
      computerCount++;
      console.log("draw!");
      console.log(
        "Player score: " + userCount + "/" + "Computer score: " + computerCount
      );
    } else {
      computerCount++;
      console.log("computer wins!");
      console.log(
        "Player score: " + userCount + "/" + "Computer score: " + computerCount
      );
    }
  } else {
    console.log("user chooses " + userInput + " Invalid input");
  }
}
