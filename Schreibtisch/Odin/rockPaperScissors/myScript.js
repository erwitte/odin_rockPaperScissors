let computersPoints = 0;
let playersPoints = 0;

function getComputerChoice() {
    let choice = Math.random() * 10 + 1;
    if (choice < 4) {
        return "rock";
    } else if (choice < 7) {
        return "paper";
    } else {
        return "scissors";
    }
}

function displayResult(round) {
    if (round == "player") playersPoints++;
    else if (round == "computer") computersPoints++;
    if (playersPoints == 5) playersPoints = "win";
    else if (computersPoints == 5) computersPoints = "win";
    document.querySelector("#result").textContent = round;
    document.querySelector("#playersPoints").textContent = "Player: " + playersPoints;
    document.querySelector("#computersPoints").textContent = "Computer: " + computersPoints;
}

function addEventListener() {
        document.querySelector("#rock").addEventListener("click", () => {
            let round = playRound("rock", getComputerChoice());
            displayResult(round);
        });

        document.querySelector("#paper").addEventListener("click", () => {
            let round = playRound("paper", getComputerChoice());
            displayResult(round);
        });

        document.querySelector("#scissors").addEventListener("click", () => {
            let round = playRound("scissors", getComputerChoice());
            displayResult(round);
        });
}

document.querySelector("#playersPoints").textContent = "Player: " + playersPoints;
document.querySelector("#computersPoints").textContent = "Computer: " + computersPoints;

/*function displayResult(result){
    document.querySelector("#result").textContent = result;
}*/
let roundNumber = 0;

function playRound(player, computer) {
    switch (player) {
        case "rock":
            if (computer === "paper") {
                return "computer";
            } else if (computer === "scissors") {
                return "player";
            } else {
                return "draw";
            }
        case "paper":
            if (computer === "scissors") {
                return "computer";
            } else if (computer === "rock") {
                return "player";
            } else {
                return "draw";
            }
        case "scissors":
            if (computer === "rock") {
                return "computer";
            } else if (computer === "paper") {
                return "player";
            } else {
                return "draw";
            }
    }
}

addEventListener();

/*
while(roundNumber<5){
    let playerSeclection = prompt().toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSeclection, computerSelection));
    roundNumber++;
    console.log(roundNumber);
}
*/