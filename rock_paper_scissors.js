let humanScore = 0; 
let computerScore = 0;
function getComputerChoice(){ 
    let computerChoice = Math.floor(Math.random() *3);

    if (computerChoice === 0){
        return "rock";
    }
    else if (computerChoice === 1){
        return "paper";
    }
    else 
    {
        return "scissors";
    }
}

function getHumanChoice(){ 
    let humanChoice = prompt("Rock Paper Scissors?");

    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Human Wins This Round");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("Computer Wins This Round");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("Human Wins This Round");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("Computer Wins This Round");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Human Wins This Round");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("Computer Wins This Round");
        computerScore++;
    }
}


for (let i = 0; i < 5; i++){
    playRound(getComputerChoice(), getHumanChoice());
}

if (humanScore > computerScore){
    console.log("Human Wins");
}
else {
    console.log("Computer Wins");
}