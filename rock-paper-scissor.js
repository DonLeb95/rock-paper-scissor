function getComputerChoice(){
    let compChoice = Math.floor( (Math.random() * 100) );
    //(0 32) (33 65) (66 99)
    if (compChoice <= 32) {
        return "rock"
    } else if (compChoice > 32 && compChoice <= 65) {
        return "paper"
    } else return "scissor"
}
