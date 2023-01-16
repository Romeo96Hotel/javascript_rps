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
  function verifyInput(userInput) {
    const longHairDontCare = userInput.toLowerCase();
    let isValid;

    switch (isValid) {
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

  /* end functions */

  /* Rock paper scissors game */
}
/* end for loop */
