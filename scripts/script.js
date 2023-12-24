function getComputerChoice(){

    const choicesToChoose = ["Rock","Paper","Scissors"];
    randomComputerChoice = Math.floor(Math.random() * 3)
    
    return choicesToChoose[randomComputerChoice]
}

function getPlayerSelection(){
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    return playerSelection;
}

function playRound(playerSelection, computerSelection){

    if(playerSelection.trim().toUpperCase() === computerSelection.toUpperCase()){
        console.log("It's a tie!");
        return playRound(getPlayerSelection(), getComputerChoice());
    }else if(playerSelection.trim().toUpperCase() === "ROCK" && computerSelection.toUpperCase() == "PAPER"){
        console.log("You Lose! Paper beats Rock");
        return "computer";
    }else if(playerSelection.trim().toUpperCase() === "PAPER" && computerSelection.toUpperCase() == "ROCK"){
        console.log("You Win! Paper beats Rock");
        return "player";
    }else if(playerSelection.trim().toUpperCase() === "ROCK" && computerSelection.toUpperCase() == "SCISSORS"){
        console.log("You Win! Rock beats Scissors");
        return "player";
    }else if(playerSelection.trim().toUpperCase() === "PAPER" && computerSelection.toUpperCase() == "SCISSORS"){
        console.log("You Lose! Scissors beats Paper");
        return "computer";
    }else if(playerSelection.trim().toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() == "PAPER"){
        console.log("You Win! Scissors beats Paper");
        return "player";
    }else if(playerSelection.trim().toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() == "ROCK"){
        console.log("You Lose! Rock beats Scissors");
        return "computer";
    }
}


function game(){
    let playerWinCount = 0;
    let computerWinCount = 0;
    
    while(playerWinCount < 5 && computerWinCount < 5){
        let whoWon = playRound(getPlayerSelection(), getComputerChoice());
        if(whoWon === "player"){
            playerWinCount += 1;
        }else if(whoWon === "computer"){
            computerWinCount += 1;
        }
        console.log("Player: " + playerWinCount);
        console.log("Computer: " + computerWinCount);
    }

    if(playerWinCount == 5){
        console.log("Player Wins!")
    }else{
        console.log("Computer Wins!")
    }
}
