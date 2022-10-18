// Game intro statement
// let beginGame = confirm("Welcome to the most important Rock,Paper,Scissors game of your life...first to five wins! Are you ready?");

// Declare computer generated random selection of three variables for comp selection
function compChoice(choice) {
    if (choice == 1) {
        return("rock");
    } else if (choice == 2) {
        return("paper");
    } else if (choice == 3) {
        return("scissors");
    }
}

    function computerSelectionFunction() {
        return compChoice(Math.floor(Math.random()*3)+1);
    }

// Declare variables for input from user (rock paper scissors), comp & score counter
let playerSelection = undefined;
let compSelection = undefined;
let playerScore = 0;
let compScore= 0;

//function to play one round of rock paper scissors
function playRound (player, computer) {
    //if selection for win, draw, or loose
    if (player == computer) {
        document.getElementById("result").innerHTML="its a draw!";
    } else if (player == "rock" && computer == "paper") {
        document.getElementById("result").innerHTML="Computer Wins! try again...";
    } else if (player == "rock" && computer == "scissors") {
        document.getElementById("result").innerHTML="You Win!";
    } else if (player == "paper" && computer == "rock") {
        document.getElementById("result").innerHTML="You Win!";
    } else if (player == "paper" && computer == "scissors") {
        document.getElementById("result").innerHTML="Computer Wins! try again...";
    } else if (player == "scissors" && computer == "rock") {
        document.getElementById("result").innerHTML="Computer Wins! try again...";
    } else if (player == "scissors" && computer == "paper") {
        document.getElementById("result").innerHTML="You Win!";
    } else {
        console.log("Not a valid choice! try again...");
        console.log(player);
        console.log(computer);
    }
}

/*
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
    let playerSelection = prompt("Rock,Paper, or Scissors?");
    let compSelection = computerSelectionFunction();
        
    console.log("Your Selection: " + playerSelection.toLowerCase());
    console.log("Computer Selection: " + compSelection.toLowerCase());
        
    let result = playRound(playerSelection.toLowerCase(),compSelection.toLowerCase());
    console.log(result);
        
    gameScore(result);
    let playAgain = confirm("Play Again?");
    if (playAgain == true) {
        console.clear();
    } else {
        console.log("Chicken...");
        { break; }
    }
} 

if (playerScore == 5) {
    console.log("Congratulations! you have beaten the computer");
} else if (compScore ==5) {
    console.log("uhoh, the computer has won. God only knows what comes next...");
}
*/

// Event listeners
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultDisp = document.querySelector(".result");

rockBtn.addEventListener('click', () => {
    let compSelection = computerSelectionFunction();
    let playerSelection = "rock";
    (playRound(playerSelection,compSelection));
});
paperBtn.addEventListener('click', () => {
    let compSelection = computerSelectionFunction();
    let playerSelection = "paper";
    (playRound(playerSelection,compSelection));
});
scissorsBtn.addEventListener('click', () => {
    let compSelection = computerSelectionFunction();
    let playerSelection = "scissors";
    playRound(playerSelection,compSelection);
});


