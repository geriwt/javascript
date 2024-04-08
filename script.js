

function getComputerChoice()
{
    let randomChoice =["scissor","paper","rock"];
    // for(let i=0;i<randomChoice.length;i++){
    //     if (trimmedInput.toLowerCase() == arr[i]){
    //         return arr[i];
    //     }
    // }
    
    
    let a = Math.floor(Math.random() * randomChoice.length);
    return randomChoice[a];
}
function playRound(playerSelection,computerSelection){
    if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="rock"){
        return "Tie!";
    }
    if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="scissor"){
        return "You Win! rock beats scissor";
    }
    if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="paper"){
        return "You Lose! rock beats paper";
    }
     if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="rock"){
        return "You Win! paper beats rock";
    }
     if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="scissor"){
        return "You Lose! paper beats scissor";
    }
    if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="paper"){
        return "Tie!";
    }
    if(playerSelection.toLowerCase()=="scissor" && computerSelection.toLowerCase()=="rock"){
        return "You Lose! rock beats scissor";
    }
    if(playerSelection.toLowerCase()=="scissor" && computerSelection.toLowerCase()=="paper"){
        return "You Win! scissor beats paper";
    }
     if(playerSelection.toLowerCase()=="scissor" && computerSelection.toLowerCase()=="scissor"){
        return "Tie!";
    }
}
function playGame(){
    let round=prompt("how much round u want play??");
    for(let i=1;i<=round;i++){
        let player = prompt("What's your choice?");
        let computerchoice=getComputerChoice();
        console.log(playRound(player,computerchoice));
    }

}
playGame();