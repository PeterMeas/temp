


function getComputerChoice() {
    let result;
    let rock = "rock"; // 0
    let paper = "paper"; // 1
    let scissors = "scissors"; // 2
    let randomNum = Math.floor(Math.random() * 3);

    return result = (randomNum === 2) ? scissors
    : (randomNum === 1) ? paper 
    : rock;
    console.log(result);
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?")
    return humanChoice;
}

let humanScore = 0, computerScore = 0;
let roundCount = 0;

    let rock = document.querySelector('#rock');
    let paper = document.querySelector('#paper');
    let scissors = document.querySelector('#scissors');

    rock.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
    })
    paper.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
    })
    scissors.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
    })

    
    
    const results = document.querySelector('#result');
    const score = document.querySelector('#score');

    function updateScore() {
        score.textContent = `Computer: ${computerScore} | You: ${humanScore}`;
    }
    function playRound(humanChoice, computerChoice) {
        
        let message = `You: ${humanChoice} | Computer: ${computerChoice} --- `;        
        if(roundCount <= 5) {
        if (humanChoice === computerChoice) {
            message += "It's a tie";
    
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
                    message += `You win! ${humanChoice} beats ${computerChoice}`;
                humanScore += 1;
    
        } else {
            message += `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
    
            }
        } else {
            result.textContent = "Game Over! Refresh to play again.";
            return;
        }
            roundCount += 1;
            results.textContent = message;
            updateScore();    
        }
        
updateScore();


function playGame() {


    
    //for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice().toLowerCase();
        playRound(humanChoice,computerChoice);
    //}
    if (computerScore > humanScore) {
        console.log(`LOSE!! Computer: ${computerScore} | You: ${humanScore}`)
    } else if (humanScore > computerScore){
        console.log(`WIN!! Computer: ${computerScore} | You: ${humanScore}`)
    } else {
        console.log(`TIE! Computer: ${computerScore} | You: ${humanScore}`)
    }

}

