/*
1) User clicks rock paper or scissors button
2) computer chooses rock paper scissors
3) compare choices
3) display computer choice
4) display user choice
5) display winner
*/

class Round {
  constructor(buttons) {
    this.buttons = [...buttons];
    this.playerDisplay = playerDisplay;
    this.computerDisplay = computerDisplay;
    this.winnerDisplay = winnerDisplay;
  }

  isClicked() {
    this.buttons.map((x) =>
      x.addEventListener("click", () => {
        return x.value;
      })
    );
  }

  getCompChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  getWinner(player, computer) {
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
  }
}

class Display {
  constructor(playerDisplay, computerDisplay, winnerDisplay) {
    this.playerDisplay = playerDisplay;
    this.computerDisplay = computerDisplay;
    this.winnerDisplay = winnerDisplay;
  }

  appendText(container, value) {
    return (container.textContent = value);
  }

  displayWinner() {
    getWinner === "tie"
      ? this.appendText(this.winnerDisplay, "TIE GAME!")
      : getWinner === "player"
      ? this.appendText(this.winnerDisplay, "YOU WIN!")
      : getWinner === "computer"
      ? this.appendText(this.winnerDisplay, "YOU LOSE!")
      : undefined;
  }
}

const buttons = document.querySelectorAll("input");
const playerDisplay = document.querySelector("#player-display");
const computerDisplay = document.querySelector("#computer-display");
const winnerDisplay = document.querySelector("#winner-display");

/* initilize game */
const rpsGame = new Round(buttons);

const userInput = rpsGame.isClicked();
const computerInput = rpsGame.getCompChoice();
