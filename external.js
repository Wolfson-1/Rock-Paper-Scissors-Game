
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

//match user selection to computer selection
function playRound (player, computer) {
    console.log("Your Selection: " + playerSelection);
    console.log("Computer Selection: " + compSelection);

    //if selection for win, draw, or loose
    if (player == computer) {
        console.log("its a draw! try again");
    } else if (player.toLowerCase == "rock" && computer.toLowerCase == "paper") {
        console.log("Computer Wins! try again...");
    } else if (player.toLowerCase == "rock" && computer.toLowerCase == "scissors") {
        console.log("You win!");
    } else if (player.toLowerCase == "paper" && computer.toLowerCase == "rock") {
        console.log("You win!");
    } else if (player.toLowerCase == "paper" && computer.toLowerCase == "scissors") {
        console.log("Computer WIns! try again...");
    } else if (player.toLowerCase == "scissors" && computer.toLowerCase == "rock") {
        console.log("Computer Wins! try again...");
    } else if (player.toLowerCase == "scissors" && computer.toLowerCase == "paper") {
        console.log("You win!");
    } else {
        alert("Not a valid choice, no cheating! try again...")
    }
}

playRound (playerSelection, compSelection);