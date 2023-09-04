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

const tie = document.querySelector("div.tie");
const win = document.querySelector("div > div.player");
const loss = document.querySelector("div > div.computer");

let playerScore = 0;
let computerScore = 0;

function playRound(computerSelection, playerSelection) {

    if ((playerSelection == "rock" && computerSelection == "Rock!") || (playerSelection == "paper" && computerSelection == "Paper!") || (playerSelection == "scissors" && computerSelection == "Scissors!")) {
        const ties = document.createElement("p");
        ties.textContent = "Tie!";
        tie.appendChild(ties);

    } else if ((playerSelection == "rock" && computerSelection == "Scissors!") || (playerSelection == "paper" && computerSelection == "Rock!") || (playerSelection == "scissors" && computerSelection == "Paper!")) {
        const wins = document.createElement("p");
        wins.textContent = "You win!";
        win.appendChild(wins);
        playerScore++;
        document.querySelector("div > div.player > span.playerscore").innerHTML = playerScore;
        if (playerScore == 5) {
            setTimeout(function() {
                alert(playerWin);
            },10)
            location.reload();
        } 

    } else if ((playerSelection == "rock" && computerSelection == "Paper!") || (playerSelection == "paper" && computerSelection == "Scissors!") || (playerSelection == "scissors" && computerSelection == "Rock!")) {
        const losses = document.createElement("p");
        losses.textContent = "You lose!";
        loss.appendChild(losses);
        computerScore++;
        document.querySelector("div > div.computer > span.computerscore").innerHTML = computerScore;
        if (computerScore == 5) {
            setTimeout(function() {
                alert(computerWin);
            },10)
            location.reload();
        }
    }
}


playerWin = "You win! Game is over!";
computerWin = "You lost! Better luck next time..";


const rock = document.querySelector("button.rock");
const paper = document.querySelector("button.paper");
const scissors = document.querySelector("button.scissors");

rock.addEventListener('click', function () {
    playRound(getComputerChoice(), "rock");
});

paper.addEventListener('click', () => {
    playRound(getComputerChoice(), "paper");
});

scissors.addEventListener('click', () => {
    playRound(getComputerChoice(), "scissors");
});