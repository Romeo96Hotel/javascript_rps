const userInput = prompt("Welcome to Rock Paper Scissors");

for (let i = 0; i < 3; i++) {
  /* loops 4 times */

  /* VARS */

  const computerSelection = computerRandomSelection();
  let computerScore = 0;
  let playerScore = 0;
  let totalScore =
    "Player score: " + playerScore + "Computer score: " + computerScore;

  /* functions */

  function computerRandomSelection() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return random;
    console.log(random);
  }

  function calculateWinner(computerSelection, userInput) {
    this.computerSelection = toString(computerSelection);
    this.userInput = toString(userInput);

    if (computerSelection === "rock" && userInput === "scissors") {
      computerScore++;
      console.log("You lose round" + totalScore);
    } else if (computerSelection === "paper" && userInput === "rock") {
      computerScore++;
      console.log("You lose round" + totalScore);
    } else if (computerSelection === "scissors" && userInput === "paper") {
      computerScore++;
      console.log("You lose round" + totalScore);
    } else {
      console.log("Not a valid input");
    }
  }
  /* end functions */
}
/* end for loop */
