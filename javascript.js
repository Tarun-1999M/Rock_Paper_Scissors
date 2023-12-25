function getComputerChoice(){
    switch(Math.floor(Math.random()*3)){
    case 0:
        return("Rock");
        break;
    case 1:
        return("Paper");
        break;
    case 2:
        return("Scissors");
        break;
    }
}

function play(playerSelection, computerSelection){
    if(playerSelection==computerSelection){
        return(["Tie!",0])
    }
    if((playerSelection=="Paper" && computerSelection=="Rock")){
        return(["You Won! "+playerSelection +" beats "+ computerSelection,1]);
    }
    else if((playerSelection=="Scissors" && computerSelection=="Paper")){
        return(["You Won! "+playerSelection +" beats "+ computerSelection,1]);
    }
    else if((playerSelection=="Rock" && computerSelection=="Scissors")){
        return(["You Won! "+playerSelection +" beats "+ computerSelection,1]);
    }
    else{
        return(["You Lose! "+computerSelection +" beats "+ playerSelection,-1]);
    }

}

function game(){
    let score=0;
    
    for (let i=0;i<5;i++){
    playerSelection=prompt("Enter your choice");
    computerSelection=getComputerChoice();
    let msg=play(playerSelection,computerSelection)
    score=score+msg[1]
    console.log(msg[0]);}
    
    if(score>0){
        console.log("You Won!");}
        if(score<0){
        console.log("You Lose");}
        if(score==0){
        console.log("Its a Tie!");}
    }
    
    game();