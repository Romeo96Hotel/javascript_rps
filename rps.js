for (let i = 0; i < 3; i++) {
  /* takes user input */
  const userInput = prompt("rock, paper, or scissors?... ");
  /* loops 4 times */

  /* functions */

  function computerRandomSelection() {
    let choices = ["rock", "paper", "scissors"];
    const random = choices[Math.floor(Math.random() * choices.length)];

    return random;
  }

  /* compares value of computer selection and user input to return who wins */
  function calculateWinner(computerSelection, userInput) {
    this.computerSelection = computerSelection;
    this.userInput = userInput;
    let computerScore = 0;
    let playerScore = 0;
    let totalScore =
      "Player score: " +
      playerScore +
      "//" +
      "Computer score: " +
      computerScore;
    let winner;

    if (computerSelection === "rock" && userInput === "scissors") {
      computerSelection = winner;
      return winner;
      
    } else if (computerSelection === "paper" && userInput === "rock") {
      computerSelection = winner;
      return winner;
      
    } else if (computerSelection === "scissors" && userInput === "paper") {
      computerSelection = winner;
      return winner;
      
    } else {
      
    }
  }

  /* end functions */

  const computerSelection = computerRandomSelection();

  console.log(computerSelection);

  console.log(calculateWinner(computerRandomSelection(), userInput));
}
/* end for loop */
