function getComputerChoice() {

    const choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return "Scissors!";
    } else if (choice === 2) {
        return "Rock!";
    } else if (choice === 3) {
        return "Paper!";
    }

} 


function getPlayerChoice() {

    const playerChoice = prompt("Rock, Paper, Scissors?");
    const playerChoiceUndercase = playerChoice.toLowerCase();
    return playerChoiceUndercase;

}


function playRound(computerSelection, playerSelection) {

    if ((playerSelection == "rock" && computerSelection == "Rock!") || (playerSelection == "paper" && computerSelection == "Paper!") || (playerSelection == "scissors" && computerSelection == "Scissors!")) {
        return "Tie!";
    } else if ((playerSelection == "rock" && computerSelection == "Scissors!") || (playerSelection == "paper" && computerSelection == "Rock!") || (playerSelection == "scissors" && computerSelection == "Paper!")) {
        return "You win!";
    } else if ((playerSelection == "rock" && computerSelection == "Paper!") || (playerSelection == "paper" && computerSelection == "Scissors!") || (playerSelection == "scissors" && computerSelection == "Rock!")) {
        return "You lose!";
    }

}


function game() {
    
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log(computerSelection);
        console.log(playRound(computerSelection, playerSelection));
        console.log("----------------");

        if (playRound(computerSelection, playerSelection) == "You win!") {
            playerScore++;
        } else if (playRound(computerSelection, playerSelection) == "You lose!") {
            computerScore++;
        }
    }

    console.log("Game Over!")

    if (computerScore > playerScore) {
        console.log(`You lose! ${computerScore} > ${playerScore}`);
    } else if (playerScore > computerScore) {
        console.log(`You win! ${playerScore} > ${computerScore}`);
    } else {
        console.log("It's a tie!"); 
    }
 
} 

game()