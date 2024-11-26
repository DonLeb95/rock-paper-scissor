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
    let myChoice = prompt('Choose between rock, paper or scissor and type it.Your opponent will be your computer :)', 'Type "rock", "paper" or "scissor"');
    
    if (myChoice != "rock" && myChoice != "paper" && myChoice != "scissor"){
        alert('Looks like there was a mistake somewhere.Please try again');
        return;
    }

    return myChoice;
}

