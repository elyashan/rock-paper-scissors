const items = ["rock", "paper", "scissors"];

function getComputerChoice() {
  randomNum = Math.trunc(Math.random() * 3);
  return items[randomNum];
}

let userChoice = "";
let computerChoice = getComputerChoice();
let userScore = 0;
let computerScore = 0;
function playRound(userChoice, computerChoice) {
  userChoice = userChoice;
  switch (userChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          console.log("It's a draw!");
          drawDiv("It's a draw");
          break;
        case "paper":
          console.log("You lost!");
          drawDiv("You lost!");
          break;
        case "scissors":
          console.log("You won!");
          drawDiv("You won!");
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          console.log("You won!");
          drawDiv("You won!");
          break;
        case "paper":
          console.log("It's a draw!");
          drawDiv("It's a draw!");
          break;
        case "scissors":
          console.log("You lost!");
          drawDiv("You lost!");
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "rock":
          console.log("You lost!");
          drawDiv("You lost!");
          break;
        case "paper":
          console.log("You won!");
          drawDiv("You won!");
          break;
        case "scissors":
          console.log("It's a draw");
          drawDiv("It's a draw");
          break;
      }
      break;
  }
}
const buttons = document.querySelectorAll("button");
buttons.forEach((el) => {
  el.addEventListener("click", () => playRound(el.className, computerChoice));
});
const div = document.createElement("div");
const body = document.querySelector("body");
const scoreElement = document.createElement("div");
const winnerElement = document.createElement("div");
function drawWinner(msg) {
  winnerElement.textContent = msg;
  body.appendChild(winnerElement);
}
function drawScore() {
  scoreElement.textContent = `You: ${userScore} - Computer: ${computerScore}`;
  body.appendChild(scoreElement);
}
function drawDiv(msg) {
  div.textContent = msg;
  body.appendChild(div);
  if (msg == "You won!") {
    userScore++;
  } else if (msg == "You lost!") {
    computerScore++;
  } else {
    null;
  }
  drawScore();
  let winnermsg = "";
  if (userScore == 5 || computerScore == 5) {
    userScore == 5
      ? (winnermsg = "You won the game!")
      : (winnermsg = "You lost the game!");
    buttons.forEach((el) => {
      el.disabled = true;
    });
  }
  drawWinner(winnermsg);
}
