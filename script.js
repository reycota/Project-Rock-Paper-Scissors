function getComputerChoice(){
    var choices = ["Rock", "Paper", "Scissors"];
    var randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

var computerChoice = getComputerChoice();
console.log(computerChoice);
