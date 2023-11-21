// Computer Choice!!!
function getComputerChoice() {
    let choices = [];
    choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.random() * choices.length;
    const index = Math.floor(randomNumber);
    const selectedChoice = choices[index];
return selectedChoice;
}

// Player choice!!!
function playRound(playerSelection, getComputerChoice) {
    const myChoice = playerSelection.toLowerCase()
    const computerSelection = getComputerChoice().toLowerCase();

// Compare both choices
    if (myChoice === "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors");
    } else if (myChoice === "scissors" && computerSelection ==="paper") {
        console.log("You Win! Scissors beats Paper");
    } else if (myChoice === "paper" && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock");
    } else if (myChoice === computerSelection) {
        console.log("DRAW!! " + myChoice + " = " + computerSelection);
    } else {
        console.log("You Loose! " + computerSelection + " beats " + myChoice);
    }
}
playRound("scissors", getComputerChoice);
