
// Declare computer generated random selection of three variables for comp selection
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

// Declare variables for input from user (rock paper scissors), comp & score counter
let playerSelection = prompt("Rock,Paper, or Scissors?");
let compSelection = computerSelectionFunction();
let playerScore = 0;
let compScore= 0;

//function to play one round of rock paper scissors
function playRound (player, computer) {
    //if selection for win, draw, or loose
    if (player == computer) {
        return("its a draw!");
    } else if (player == "rock" && computer == "paper") {
        return("Computer Wins! try again...");
    } else if (player == "rock" && computer == "scissors") {
        return("You win!");
    } else if (player == "paper" && computer == "rock") {
        return("You win!");
    } else if (player == "paper" && computer == "scissors") {
        return("Computer WIns! try again...");
    } else if (player == "scissors" && computer == "rock") {
        return("Computer Wins! try again...");
    } else if (player == "scissors" && computer == "paper") {
        return("You win!");
    } else {
        alert("Not a valid choice! try again...")
    }
}

//counts score after each round
function gameScore (result) {

    if (result == "You win!") {
        playerScore++;
    } else if (result == "Computer Wins! try again...") {
        compScore++;
    }

    console.log("Your score: " + playerScore);
    console.log("Computer Score: " + compScore);
}

//function to play game
    while (playerScore < 5 && compScore < 5) {
        let compSelection = computerSelectionFunction();
        console.log("Your Selection: " + playerSelection.toLowerCase());
        console.log("Computer Selection: " + compSelection.toLowerCase());
        let result = playRound(playerSelection.toLowerCase(),compSelection.toLowerCase());
        console.log(result);
        gameScore(result);
        let playAgain = confirm("Play Again?");
        if (playAgain == true) {
            let playerSelection = prompt("Rock,Paper, or Scissors?");
            let compSelection = computerSelectionFunction();
        } else {
            console.log("Chicken...");
            { break; }
        }
    } 

    if (playerScore == 5) {
        console.log("Congratulations! you have beaten the computer");
    } else if (playerScore ==5) {
        console.log("uhoh, the computer has won. God only knows what comes next...");
    }

