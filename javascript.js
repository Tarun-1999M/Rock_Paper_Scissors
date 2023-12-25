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
