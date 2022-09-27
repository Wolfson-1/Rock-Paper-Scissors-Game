/* understand problem:
        Take input from a user of three variables (rock, paper, scissors) and match this to computers selection of the same three variables. Once matched need to determine if user wins, looses, or draws against users selection. */

// declare computer generated random selection of three variables

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

// declare variable containing input from user of either rock paper scissors
let playerSelection = "Rock";

//match user selection to computer selection
function playRound (playerSelection, computerSelection) {
    console.log("Your Selection: " + playerSelection);
    console.log("Computer Selection: " + computerSelection);

    if (playerSelection == computerSelection) {
        console.log("its a draw! try again");
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("Computer Wins! try again...");
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You win!");
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You win!");
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log("Computer WIns! try again...");
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("Computer Wins! try again...");
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You win!");
    }
    }

//if user wins output "congratulations, you win!" to console

//if computer wins "you lose! try again" to console

//if draw "draw! play again" to console

