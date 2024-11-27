// Makes the computer choice
function getComputerChoice(){
    let compChoice = Math.floor( (Math.random() * 100) );
    //(0 32) (33 65) (66 99)
    if (compChoice <= 32) {
        return "rock"
    } else if (compChoice > 32 && compChoice <= 65) {
        return "paper"
    } else return "scissor"
}

//Prompts the user for their choice. 
function getHumanChoice(){
    let myChoice = prompt('Choose between rock, paper or scissor and type it. Your opponent will be your computer :)'
        ,'Type "rock", "paper" or "scissor"').toLowerCase();
    if (myChoice != "rock" && myChoice != "paper" && myChoice != "scissor"){
        alert('Looks like there was a mistake somewhere.Please try again');
        return;
    }

    return myChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , computerChoice){
    const player = humanChoice;
    const cpu = computerChoice;
    if (player == cpu) {
        return console.log('This is a tie')
    }
    //Comparison for computers win, humans loss
    if ( 
        ((player == "rock" )   && (cpu == "paper"))   || 
        ((player == "paper")   && (cpu == "scissor")) ||
        ((player == "scissor") && (cpu == "rock"))
    ) {
        console.log(`Skynet has won this round. ${cpu} beats ${player}`);
        ++computerScore;
        return
        }

    //Comparison for humans win, computers loss
    if ( 
        ((cpu == "rock" )   && (player == "paper"))   || 
        ((cpu == "paper")   && (player == "scissor")) ||
        ((cpu == "scissor") && (player == "rock"))
    ) {
        
        console.log(`The organics have triumphed. ${player} beats ${cpu}`);
        ++humanScore;
        return
        }
    
    /*const cpuWon = (function(player,cpu){
        if ( 
            ((player == "rock" ) && (cpu == "paper")) || 
            ((player == "paper") && (cpu == "scissor")) ||
            ((player == "scissor" ) && (cpu == "rock"))
        ) {
            console.log(`Skynet has won this round. ${cpu} beats ${player}`);
        }
    })*/

    /* 
    Retrieve both the human and comp choices
    Compare them to each other
    Establish win, lose and draw conditions
    Inform the result and give a point
    */

}