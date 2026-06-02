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

/* ===================================================================
ALTERNATIVE VERSION USING 'ELSE IF' (Without needing 'return' inside each block)
===================================================================

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        humanScore++;
        console.log("You win! Rock beats Scissors");
        console.log(`Score -> Human ${humanScore} - Computer ${computerScore}`);
    } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        computerScore++;
        console.log("You lost! Rock beats Scissors");
        console.log(`Score -> Human ${humanScore} - Computer ${computerScore}`);
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        humanScore++;
        console.log("You win! Paper beats Rock");
        console.log(`Score -> Human ${humanScore} - Computer ${computerScore}`);
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        humanScore++;
        console.log("You win! Scissors beat Paper");
        console.log(`Score -> Human ${humanScore} - Computer ${computerScore}`);
    } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        computerScore++;
        console.log("You lost! Paper beats Rock");
        console.log(`Score -> Human ${humanScore} - Computer ${computerScore}`);
    } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        computerScore++;
        console.log("You lost! Scissors beat Paper");
        console.log(`Score -> Human ${humanScore} - Computer ${computerScore}`);
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
}
*/

while (humanScore < 5 && computerScore < 5) {
    // Added .toUpperCase() at the end to automatically fix lowercase inputs like "rock" to "ROCK"
    let humanSelection = prompt("Choose between ROCK, SCISSORS, PAPER:").toUpperCase(); // Ask the user for their move and store it in 'humanSelection' variable
    let computerSelection = getComputerChoice(); // Store result inside 'computerSelection' variable 
    playRound(humanSelection, computerSelection); // Compare both previous variables (humanSelection and computerSelection) and determine winner
}
// After playRound finishes, the computer jumps back to the top of the 'while' to check the scores again.
// If someone reached 5, the loop stops immediately

if (humanScore === 5) { // Check if the human reached the winning score
    console.log("CONGRATULATIONS! You won the entire game! 🏆");
} else { // If the computer reached 5 points
    console.log("GAME OVER! The computer won the game! 🤖");
}