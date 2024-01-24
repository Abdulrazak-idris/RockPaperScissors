let userResult = document.querySelector(".userResult");
let computerResult = document.querySelector(".computerResult");
let secondValue = 0;
let firstValue = 0;

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
    firstValue += 1;
    userResult.textContent = firstValue;
    return "You Win";
  } else if (playerSelection === "scissors" && getComputerChoice === "paper") {
    firstValue += 1;
    userResult.textContent = firstValue;
    return "You Win";
  } else if (playerSelection === "paper" && getComputerChoice === "rock") {
    firstValue += 1;
    userResult.textContent = firstValue;
    return "You Win";
  } else if (playerSelection === getComputerChoice) {
    return "Draw";
  } else {
    secondValue += 1;
    computerResult.textContent = secondValue;
    return "You Loose";
  }
}

// Choices to select!!
// User Choice
document.querySelector(".btn__rock").addEventListener("click", () => {
  let result = document.querySelector("#result");
  let userChoiceBoard = document.querySelector(".choiceBoard--user");
  userChoiceBoard.textContent = "rock";
  // Computer choice
  let compChoiceBoard = document.querySelector(".choiceBoard--computer");
  let Computer = getComputerChoice();
  compChoiceBoard.textContent = Computer;
  let winner = playRound("rock", Computer);
  result.textContent = winner;
});

document.querySelector(".btn__paper").addEventListener("click", () => {
  let result = document.querySelector("#result");
  let userChoiceBoard = document.querySelector(".choiceBoard--user");
  userChoiceBoard.textContent = "paper";

  // Computer choice
  let compChoiceBoard = document.querySelector(".choiceBoard--computer");
  let Computer = getComputerChoice();
  compChoiceBoard.textContent = Computer;
  let winner = playRound("paper", Computer);
  result.textContent = winner;
});

document.querySelector(".btn__scissors").addEventListener("click", () => {
  let result = document.querySelector("#result");
  let userChoiceBoard = document.querySelector(".choiceBoard--user");
  userChoiceBoard.textContent = "scissors";
  // Computer choice
  let compChoiceBoard = document.querySelector(".choiceBoard--computer");
  let Computer = getComputerChoice();
  compChoiceBoard.textContent = Computer;
  let winner = playRound("scissors", Computer);
  result.textContent = winner;
});
