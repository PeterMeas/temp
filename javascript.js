

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

function playGame() {

    let humanScore = 0, computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        
        
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "rock") {
                    console.log("Tie");
                } else if (computerChoice === "paper") {
                    console.log("Paper beats rock, you lose!");
                    computerScore += 1;
                } else {
                    console.log("You win! rock beats scissors");
                    humanScore += 1;
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    console.log("You win! paper beats rock");
                    humanScore += 1;
                } else if (computerChoice === "paper") {
                    console.log("Tie");
                } else {
                    console.log("You lose!, scissors beat paper!");
                    computerScore += 1;
                }
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    console.log("You lose, rock beats scissors");
                    computerScore +=1;
                } else if (computerChoice === "paper") {
                    console.log("You win! scissors beat paper");
                    humanScore +=1;
                } else {
                    console.log("Tie!");
                }
                break;
            }
    }

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice().toLowerCase();
        playRound(humanChoice,computerChoice);
    }
    if (computerScore > humanScore) {
        console.log(`LOSE!! Computer: ${computerScore} | You: ${humanScore}`)
    } else if (humanScore > computerScore){
        console.log(`WIN!! Computer: ${computerScore} | You: ${humanScore}`)
    } else {
        console.log(`TIE! Computer: ${computerScore} | You: ${humanScore}`)
    }

}