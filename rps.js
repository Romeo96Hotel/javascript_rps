/* returns value of random index in array */
function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}

/* returns user input */
function Userinput() {
  const button = document.querySelectorAll("button");

  button.forEach((button) => {
    button.addEventListener("click", (e) => {
      return button.innerHTML;
    });
  });
}

/* sets new score after each game */
function updateScore(score) {
  newScore = score++;
  return newScore;
}

/* end functions */

/* Rock paper scissors game */

let userCount = 0;
let newUserCount = 0;
let newComputerCount = 0;
let computerCount = 0;

