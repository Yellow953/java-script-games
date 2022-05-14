const displayComputerChoice = document.getElementById("computer-choice")
const displayUserChoice = document.getElementById("user-choice")
const displayResult = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice, computerChoice, result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    displayUserChoice.innerHTML = userChoice
    computeComputerChoice()
    getResult()
}))

function computeComputerChoice() {
    var randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    switch (randomNumber) {
        case 1:
            computerChoice = "rock"   
            break;
        case 2:
            computerChoice = "paper"
            break;
        case 3:
            computerChoice = "scissors"
            break;
    }
    displayComputerChoice.innerHTML = computerChoice
}

function getResult(){
    if (userChoice == computerChoice) {
        result = "Draw !"
    } else if(userChoice == "rock" && computerChoice == "paper") {
        result = "You lose :("
    }else if(userChoice == "rock" && computerChoice == "scissors") {
        result = "You win :)"
    }else if(userChoice == "paper" && computerChoice == "rock") {
        result = "You win :)"
    }else if(userChoice == "paper" && computerChoice == "scissors") {
        result = "You lose :("
    }else if(userChoice == "scissors" && computerChoice == "rock") {
        result = "You lose :("
    }else if(userChoice == "scissors" && computerChoice == "paper") {
        result = "You win :)"
    }
    console.log(result)
    displayResult.innerHTML = result
}