// Computer Choice.
function getComputerChoice() {
  let choices = [];
  choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.random() * choices.length;
  const index = Math.floor(randomNumber);
  const selectedChoice = choices[index].toLowerCase();
  return selectedChoice;
}

// Player choice.
// Compare both choices.
function playRound(userChoice, getComputerChoice) {
  let playerSelection = userChoice.toLowerCase();
  if (playerSelection === "rock" && getComputerChoice === "scissors") {
    return "You Win";
  } else if (playerSelection === "scissors" && getComputerChoice === "paper") {
    return "You Win";
  } else if (playerSelection === "paper" && getComputerChoice === "rock") {
    return "You Win";
  } else if (playerSelection === getComputerChoice) {
    return "Draw";
  } else {
    return "You Loose";
  }
}

// Game function implementation!!
function game() {
  const playerChoice = prompt("What your choice").toLowerCase();
  const computerSelection = getComputerChoice().toLowerCase();
  return playRound(playerChoice, computerSelection).toLowerCase();
}

// Asking user 5 times.
// let counter = 5;
// let user = 0;
// let computer = 0;

// Loop n times, save the winner and print it letter!!
// for (let i = 0; i < counter; i++) {
//   let result = game();
//   if (result === "you win") {
//     user += 1;
//     if (user == 3) {
//       document.getElementById("result").innerHTML = "YOU WIN";
//     }
//   } else if (result === "you loose") {
//     computer += 1;
//     if (computer == 3) {
//       document.getElementById("result").innerHTML = "YOU LOOSE";
//     }
//   }
// }

// if (user == computer) {
//   document.getElementById("result").innerHTML = "DRAW";
// }

document.querySelector(".btn__rock").addEventListener("click", () => {
  let result = document.querySelector("#result");
  result.textContent = playRound("rock", getComputerChoice());
});

document.querySelector(".btn__paper").addEventListener("click", () => {
  let result = document.querySelector("#result");
  result.textContent = playRound("paper", getComputerChoice());
});

document.querySelector(".btn__scissors").addEventListener("click", () => {
  let result = document.querySelector("#result");
  result.textContent = playRound("scissors", getComputerChoice());
});
