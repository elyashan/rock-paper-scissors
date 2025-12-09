const items = ["rock", "paper", "scissors"];

function getComputerChoice() {
  randomNum = Math.trunc(Math.random() * 3);
  return items[randomNum];
}

let userChoice = prompt("Rock, paper or scissors?").toLowerCase();
let computerChoice = getComputerChoice();
function playRound(userChoice, computerChoice) {
  switch (userChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          console.log("It's a draw!");
          break;
        case "paper":
          console.log("You lost!");
          break;
        case "scissors":
          console.log("You won!");
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          console.log("You won!");
          break;
        case "paper":
          console.log("It's a draw!");
          break;
        case "scissors":
          console.log("You lost!");
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "rock":
          console.log("You lost!");
          break;
        case "paper":
          console.log("You won!");
          break;
        case "scissors":
          console.log("It's a draw");
          break;
      }
      break;
  }
}
