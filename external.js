
// Declare computer generated random selection of three variables
function compChoice(choice) {
    if (choice == 1) {
        return("Rock");
    } else if (choice == 2) {
        return("Paper");
    } else if (choice == 3) {
        return("Scissors");
    }
}

    function computerSelectionFunction() {
        return compChoice(Math.floor(Math.random()*3)+1);
    }

// Declare variable containing input from user of either rock paper scissors
let playerSelection = prompt("Rock,Paper, or Scissors?");
let compSelection = computerSelectionFunction();
let playerScore = 0;
let compScore= 0;

//match user selection to computer selection
function playRound (player, computer) {
    console.log("Your Selection: " + playerSelection.toLowerCase());
    console.log("Computer Selection: " + compSelection.toLowerCase());

    //if selection for win, draw, or loose
    if (player == computer) {
        return("its a draw!");
    } else if (player == "rock" && computer == "paper") {
        return("Computer Wins! try again...");
        compScore++;
    } else if (player == "rock" && computer == "scissors") {
        return("You win!");
        playerScore++;
    } else if (player == "paper" && computer == "rock") {
        return("You win!");
        playerScore++;
    } else if (player == "paper" && computer == "scissors") {
        return("Computer WIns! try again...");
        compScore++;
    } else if (player == "scissors" && computer == "rock") {
        return("Computer Wins! try again...");
        compScore++;
    } else if (player == "scissors" && computer == "paper") {
        return("You win!");
        playerScore++;
    } else {
        alert("Not a valid choice! try again...")
    }
}
        
console.log(playRound(playerSelection.toLowerCase(),compSelection.toLowerCase()));

let playAgain = confirm("Play Again?");

while (playAgain = true) {
    let playerSelection = prompt("Rock,Paper, or Scissors?");
    console.log(playRound(playerSelection.toLowerCase(),compSelection.toLowerCase()));
    console.log(playerScore);
    console.log(compScore);
}