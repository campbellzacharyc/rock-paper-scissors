console.log("Hello World!")

function getComputerChoice() {

    const choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return "Scissors!"
    } else if (choice === 2) {
        return "Rock!"
    } else if (choice === 3) {
        return "Paper!"
    }

}   

function playRound(playerSelection, computerSelection) {

    console.log(computerSelection)

    const playerSelect = playerSelection.toLowerCase();

    if (playerSelect == "rock" && computerSelection == "Rock!") {
        return "Tie!"
    } else if (playerSelect == "rock" && computerSelection == "Scissors!") {
        return "You win! Rock beats Scissors"
    } else if (playerSelect == "rock" && computerSelection == "Paper!") {
        return "You lose! Paper beats Rock"
    } else if (playerSelect == "paper" && computerSelection == "Scissors!") {
        return "You lose! Scissors beats Paper"
    } else if (playerSelect == "paper" && computerSelection == "Rock!") {
        return "You win! Paper beats Rock"
    } else if (playerSelect == "paper" && computerSelection == "Paper!") {
        return "Tie!"
    } else if (playerSelect == "scissors" && computerSelection == "Scissors!") {
        return "Tie!"
    } else if (playerSelect == "scissors" && computerSelection == "Rock!") {
        return "You lose! Rock beats Scissors"
    } else if (playerSelect == "scissors" && computerSelection == "Paper!") {
        return "You win! Scissors beats Paper"
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
/*console.log(playRound(playerSelection, computerSelection));*/

function game() {

    let i = 1;
    let computerScore = 0;
    let playerScore = 0;

    while (i <= 5) {
        console.log(playRound(playerSelection, computerSelection));

        if (playRound === "You win! Scissors beats Paper" || playRound === "You win! Paper beats Rock" || playRound === "You win! Rock beats Scissors") {
            playerScore++;
        } else if (playRound === "You lose! Rock beats Scissors" || playRound === "You lose! Scissors beats Paper" || playRound === "You lose! Paper beats Rock") {
            computerScore++;
        }

        console.log("Player score: " + playerScore + "Computer score: " + computerScore)

    }

    if (playerScore > computerScore) {
        console.log("You win! " + playerScore + ">" + computerScore)
    } else if (computerScore > playerScore) {
        console.log("You lose! " + computerScore + ">" + playerScore)
    }

}

game()