// Functions

function updateScores() {
    if (playerWin == true) {
        playerScoreElement.textContent = ++playerScore;
    } else if (playerWin == false) {
        comScoreElement.textContent = ++comScore;
    } else {
        playerScoreElement.textContent = ++playerScore;
        comScoreElement.textContent = ++comScore;
    }

    if (playerWin == true) {
        winMsg.textContent = "Player wins!";
    } else if (playerWin == false) {
        winMsg.textContent = "Computer wins!";
    }
}

// -----------------------------------------------

function play() {

    if (playerChoice == comChoice) {
        playerWin = "tie";
        battleMsg.textContent = "Tie!";
    }
    else if (
        playerChoice == "fire" && comChoice == "water" ||
        playerChoice == "water" && comChoice == "grass" ||
        playerChoice == "grass" && comChoice == "fire") {
        playerWin = false;
    }
    // End of choices

    if (playerChoice == "fire" && comChoice == "water" ||
        playerChoice == "water" && comChoice == "fire") {
        battleMsg.textContent = "Water beats Fire!";
    } else if (playerChoice == "water" && comChoice == "grass" ||
        playerChoice == "grass" && comChoice == "water") {
        battleMsg.textContent = "Grass beats Water!";
    } else if (playerChoice == "grass" && comChoice == "fire" ||
        playerChoice == "fire" && comChoice == "grass") {
        battleMsg.textContent = "Fire beats Grass!";
    }

}

// -----------------------------------------------

function borderColor() {

    if (playerChoice == "fire") {
        firePlayer.style.borderColor = "#a83044";
    } else if (playerChoice == "water") {
        waterPlayer.style.borderColor = "#92AFD7";
    } else if (playerChoice == "grass") {
        grassPlayer.style.borderColor = "#80ab8d";
    }

    if (comChoice == "fire") {
        fireCom.style.borderColor = "#a83044";
    } else if (comChoice == "water") {
        waterCom.style.borderColor = "#92AFD7";
    } else if (comChoice == "grass") {
        grassCom.style.borderColor = "#80ab8d";
    }

}

// -----------------------------------------------

function resetRound() {
    playerWin = true;
    winMsg.textContent = "";
    battleMsg.textContent = "";

    firePlayer.style.borderColor = "";
    waterPlayer.style.borderColor = "";
    grassPlayer.style.borderColor = "";

    fireCom.style.borderColor = "";
    waterCom.style.borderColor = "";
    grassCom.style.borderColor = "";
}

// -----------------------------------------------

function winner() {
    if (playerScore == 5 && comScore == 5) {
        battleMsg.textContent = "It's a tie!"
    } else if (playerScore == 5) {
        battleMsg.textContent = "Player wins the game!";
    } else if (comScore == 5) {
        battleMsg.textContent = "Computer wins the game!";
    }
}

// -----------------------------------------------

function resetGame() {
    if(playerScore == 5 || comScore == 5) {
        playerScore = 0;
        comScore = 0;

        playerScoreElement.textContent = playerScore;
        comScoreElement.textContent = comScore;

        winMsg.textContent = "";

        firePlayer.style.borderColor = "";
        waterPlayer.style.borderColor = "";
        grassPlayer.style.borderColor = "";
    
        fireCom.style.borderColor = "";
        waterCom.style.borderColor = "";
        grassCom.style.borderColor = "";
    
    }

}


// -----------------------------------------------

function clickedImage() {
    resetRound();

    let comNum = Math.floor(Math.random() * 3);
    comChoice = elementArray[comNum];

    borderColor();
    play();
    updateScores();
    winner();
    resetGame();
}

// -----------------------------------------------

// Player Vars
let firePlayer = document.getElementById("img-container-1");
let waterPlayer = document.getElementById("img-container-2");
let grassPlayer = document.getElementById("img-container-3");

let playerChoice;
let playerScore = 0;
let playerWin = true;

// Com Vars
let comChoice;
let comScore = 0;
let elementArray = ["fire", "water", "grass"];

let fireCom = document.getElementById("img-container-4");
let waterCom = document.getElementById("img-container-5");
let grassCom = document.getElementById("img-container-6");

// Score Vars
let playerScoreElement = document.getElementById("player-score");
let comScoreElement = document.getElementById("com-score");

// Text Vars
let battleMsg = document.getElementById("battle-msg");
let winMsg = document.getElementById("win-msg");

// Click Events
firePlayer.addEventListener("click", function () {
    playerChoice = elementArray[0];
    clickedImage();

});

waterPlayer.addEventListener("click", function () {
    playerChoice = elementArray[1];
    clickedImage();

});

grassPlayer.addEventListener("click", function () {
    playerChoice = elementArray[2];
    clickedImage();
});

