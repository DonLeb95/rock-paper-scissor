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
        const fixChoice = getHumanChoice();
        return fixChoice;
    }

    return myChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , computerChoice){
    const player = humanChoice;
    const cpu = computerChoice;
    if (player == cpu) {
        return console.log('This is a tie');
    }
    //Comparison for computers win, humans loss
    if ( 
        ((player == "rock" )   && (cpu == "paper"))   || 
        ((player == "paper")   && (cpu == "scissor")) ||
        ((player == "scissor") && (cpu == "rock"))
    ) {
        console.log(`Skynet has won this round. ${cpu} beats ${player}`);
        ++computerScore;
        return console.log(`Computer points ${computerScore}`)
        }

    //Comparison for humans win, computers loss
    if ( 
        ((cpu == "rock" )   && (player == "paper"))   || 
        ((cpu == "paper")   && (player == "scissor")) ||
        ((cpu == "scissor") && (player == "rock"))
    ) {
        
        console.log(`The organics have triumphed. ${player} beats ${cpu}`);
        ++humanScore;
        return console.log(`Human points ${humanScore}`)
        }
}

function playGame() {
    for (let index = 0; index < 5; index++) {
        const roundInfo = `Round ${index + 1}`;
        console.log(roundInfo);
        playRound(getHumanChoice(),getComputerChoice());
    }

    if (humanScore > computerScore){
        console.log(`Life will continue flourishing. Humans ${humanScore} / Machines ${computerScore}`)
    } else if (computerScore > humanScore){
        console.log(`The simulacrum exoskeletons will prosper into eternity. Machines ${computerScore} / Humans ${humanScore}`)
    } else console.log('Maybe cyborgs had it right all along')
    humanScore = 0; 
    computerScore = 0;
    return console.log('Reload the page to try the game again :D')
}

const gameStart = confirm('Want to play rock, paper scissor vs Computer? Remember to open console :D');
if (gameStart == true){
    playGame();
} else console.log('Reload the page to start the game again');