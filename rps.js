/*
1) User clicks rock paper or scissors button
2) computer chooses rock paper scissors
3) compare choices
3) display computer choice
4) display user choice
5) display winner
*/

const COMPARE = {
  /* gets user input */
  getUserInput(button) {
    [...button].map((x) =>
      x.addEventListener("click", () => x.getAttribute("data-type"))
    );
  },

  /* random computer choice */
  getCompChoice() {
    const choices = ["rock", "paper", "scissors"];
    return (random = choices[Math.floor(Math.random() * choices.length)]);
  },

  getWinner(player, computer) {
    let winner;
    if (player === "rock" && computer === "scissors") {
      winner = "player";
    } else if (player === "paper" && computer === "rock") {
      winner = "player";
    } else if (player === "scissors" && computer === "paper") {
      winner = "player";
    } else if (player === computer) {
      winner = "tie";
    } else {
      winner = "computer";
    }
    return winner;
  },
};

const DISPLAY = {
  displayPlayerChoice() {

  },

  displayComputerChoice() {},

  displayWinner() {},
};
