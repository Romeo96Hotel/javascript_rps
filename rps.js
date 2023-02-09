/*
1) User clicks rock paper or scissors button
2) computer chooses rock paper scissors
3) compare choices
3) display computer choice
4) display user choice
5) display winner
*/
const COMPARE = {
  getUserInput(buttons) {
    /* gets user input */
    [...buttons].map((x) =>
      x.addEventListener("click", () => x.getAttribute("data-type"))
    );
  },
  getCompChoice() {
    /* random computer choice */
    const choices = ["rock", "paper", "scissors"];
    return (random = choices[Math.floor(Math.random() * choices.length)]);
  },
  getWinner(player, computer) {
    /* compare choices */
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    let winner;
    if (player === rock && computer === scissors) {
      winner = "player";
    } else if (player === paper && computer === rock) {
      winner = "player";
    } else if (player === scissors && computer === paper) {
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
  /* display stuff */
  appendText(container, value) {
    return (container.textContent = value);
  },
};

const buttons = document.querySelectorAll("button");
const display = document.querySelector("#computer-display");
const playerDisplay = document.querySelector("#player-display");
const computerDisplay = document.querySelector("#computer-display");
const winnerDisplay = document.querySelector("#winner-display");

const playerInput = COMPARE.getUserInput(buttons);
const computerInput = COMPARE.getCompChoice();
const getWinner = COMPARE.getWinner(playerInput, computerInput);

DISPLAY.appendText(playerDisplay, playerInput);
DISPLAY.appendText(computerDisplay, computerInput);

getWinner === "tie"
  ? DISPLAY.appendText(winnerDisplay, "TIE GAME!")
  : getWinner === "player"
  ? DISPLAY.appendText(winnerDisplay, "YOU WIN!")
  : getWinner === "computer"
  ? DISPLAY.appendText(winnerDisplay, "YOU LOSE!")
  : undefined;
