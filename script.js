let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1; 
    
    if (randomNumber === 1) {
        return "ROCK";
    }
    if (randomNumber === 2) {
        return "SCISSORS";
    }
    if (randomNumber === 3) {
        return "PAPER";
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        humanScore ++; // IF the score was going to be +2 or any other number you should have write humanScore += 2; OR humanScore = humanScore + 2;
        console.log("You win! Rock beats Scissors");
        console.log(`Score -> Human ${humanScore} - Computer ${computerScore}`)
        return;
    }
    
    if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        computerScore ++;
        console.log("You lost! Rock beats Scissors");
        console.log(`Score -> Human ${humanScore} - Computer ${computerScore}`)
        return;
    }

    if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        humanScore ++; 
        console.log("You win! Paper beats Rock");
        console.log(`Score -> Human ${humanScore} - Computer ${computerScore}`)
        return;
    }

    if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        humanScore ++; 
        console.log("You win! Scissors beat Paper");
        console.log(`Score -> Human ${humanScore} - Computer ${computerScore}`)
        return;
    }

    if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        computerScore ++;
        console.log("You lost! Paper beats Rock");
        console.log(`Score -> Human ${humanScore} - Computer ${computerScore}`)
        return;
    }

    if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        computerScore ++;
        console.log("You lost! Scissors beat Paper");
        console.log(`Score -> Human ${humanScore} - Computer ${computerScore}`)
        return;
    }

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }
}

const buttons = document.querySelectorAll("button");
const scoreDiv = document.querySelector("#score");
const message = document.querySelector("#message");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.value.toUpperCase();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        scoreDiv.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;   

        if (humanScore === 5) {
            message.textContent = "You win!";
            buttons.forEach((btn) => btn.disabled = true);
        } else if (computerScore === 5) {
            message.textContent = "You lost!";
            buttons.forEach((btn) => btn.disabled = true);
        }
    });
});