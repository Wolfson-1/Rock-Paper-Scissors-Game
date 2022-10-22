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
let compScore = 0;
let roundResult = undefined;
let playAgainVar = undefined;

//function to play one round of rock paper scissors
function playRound (player, computer) {
    //if selection for win, draw, or loose
    if (player == computer) {
        document.getElementById("result").innerHTML="its a draw!";
        roundResult = "its a draw!"
    } else if (player == "rock" && computer == "paper") {
        document.getElementById("result").innerHTML="Computer Wins! try again...";
        roundResult = "Computer Wins! try again..."
    } else if (player == "rock" && computer == "scissors") {
        document.getElementById("result").innerHTML="You Win!";
        roundResult = "You Win!";
    } else if (player == "paper" && computer == "rock") {
        document.getElementById("result").innerHTML="You Win!";
        roundResult = "You Win!";
    } else if (player == "paper" && computer == "scissors") {
        document.getElementById("result").innerHTML="Computer Wins! try again...";
        roundResult = "Computer Wins! try again..."
    } else if (player == "scissors" && computer == "rock") {
        document.getElementById("result").innerHTML="Computer Wins! try again...";
        roundResult = "Computer Wins! try again...";
    } else if (player == "scissors" && computer == "paper") {
        document.getElementById("result").innerHTML="You Win!";
        roundResult = "You Win!";
    } else {
        console.log("Not a valid choice! try again...");
        console.log(player);
        console.log(computer);
    }
}


//counts score after each round
function gameScore (result) {

    if (result == "You Win!") {
        playerScore++;
    } else if (result == "Computer Wins! try again...") {
        compScore++;
    }
}

// Score checker function for end game result
function scoreChecker() {
    if (playerScore == 5) {
        alert("Congratulations! you have beaten the computer");
    } else if (compScore ==5) {
        alert("uhoh, the computer has won. God only knows what comes next...");
    }
};


function playAgain() {
    playAgainVar = confirm("Play Again?");
    
    if (playAgainVar == true) {
        playerScore = 0;
        compScore = 0;
        document.getElementById("playerScore").innerHTML = `score: ${playerScore}`;
        document.getElementById("computerScore").innerHTML = `score: ${compScore}`;
    } else {
        alert("Chicken...");
    }
 };


// Event listeners
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultDisp = document.querySelector(".result");
const playerScoreCount = document.querySelector("#playerScore");
const computerScoreCount = document.querySelector("#computerScore");

//if rock is selected by player
rockBtn.addEventListener('click', () => {  
  
    let compSelection = computerSelectionFunction();
    let playerSelection = "rock";
    playRound(playerSelection,compSelection);
    gameScore(roundResult);
        
    document.getElementById("playerScore").innerHTML = `score: ${playerScore}`;
    document.getElementById("computerScore").innerHTML = `score: ${compScore}`;


    if (playerScore == 5 || compScore == 5) {
        scoreChecker();
        playAgain();
    } 
});

//if paper is selected by player
paperBtn.addEventListener('click', () => {

    let compSelection = computerSelectionFunction();
    let playerSelection = "paper";
    
    playRound(playerSelection,compSelection);
    gameScore(roundResult);
        
    document.getElementById("playerScore").innerHTML = `score: ${playerScore}`;
    document.getElementById("computerScore").innerHTML = `score: ${compScore}`;


    if (playerScore == 5 || compScore == 5) {
        scoreChecker();
        playAgain();
    } 
});

//if scissors is selected by player
scissorsBtn.addEventListener('click', () => {
    let compSelection = computerSelectionFunction();
    let playerSelection = "scissors";
    playRound(playerSelection,compSelection);
    gameScore(roundResult);
        
    document.getElementById("playerScore").innerHTML = `score: ${playerScore}`;
    document.getElementById("computerScore").innerHTML = `score: ${compScore}`;


    if (playerScore == 5 || compScore == 5) {
        document.getElementById("playerScore").innerHTML = `score: ${playerScore}`;
        document.getElementById("computerScore").innerHTML = `score: ${compScore}`;
        scoreChecker();
        playAgain();
    } 
   
});