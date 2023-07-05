const choices = ["ROCK", "PAPER", "SCISSORS"]
let computerSelection = ""
let playerSelection = ""
let playerScore = 0
let computerScore = 0

let scoreBoard = document.getElementById("score")
let compScore = document.getElementById("compScore")
let userScore = document.getElementById("userScore")

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
rock.addEventListener("click", function(){playRound("rock")})
paper.addEventListener("click", function(){playRound("paper")})
scissors.addEventListener("click", function(){playRound("scissors")})

//get computer's choice
function getComputerChoice() {
    let num = Math.floor(Math.random()*3)
    computerSelection = choices[num]
    console.log(computerSelection)
}

//play a round of the game
function playRound(answer){
    playerSelection = answer
    getComputerChoice()
    console.log(playerSelection)
    if(computerSelection == "PAPER" && playerSelection == "rock"){
        scoreBoard.innerHTML ="You Lose! PAPER beats ROCK"
        computerScore++
    } else if(computerSelection == "ROCK" && playerSelection == "scissors"){
        scoreBoard.innerHTML ="You Lose! ROCK beats SCISSORS"
        computerScore++
    } else if(computerSelection == "SCISSORS" && playerSelection == "paper"){
        scoreBoard.innerHTML ="You Lose! SCISSORS beats PAPER"
        computerScore++
    } else if(computerSelection == "ROCK" && playerSelection == "paper"){
        scoreBoard.innerHTML ="You Win! PAPER beats ROCK"
        playerScore++
    } else if(computerSelection == "SCISSORS" && playerSelection == "rock"){
        scoreBoard.innerHTML ="You Win! ROCK beats SCISSORS"
        playerScore++
    } else if(computerSelection == "PAPER" && playerSelection == "scissors"){
        scoreBoard.innerHTML ="You Win! SCISSORS beats PAPER"
        playerScore++
    } else {
        scoreBoard.innerHTML =`You Tied! You both chose ${computerSelection} `
    }
    compScore.innerHTML = `Computer Score: ` + computerScore
    userScore.innerHTML = `Player Score: ` + playerScore
    scoreCheck()
}

//check to see if score has reached 5
function scoreCheck(){
    if(computerScore === 5 || playerScore === 5) {
        if (computerScore > playerScore) {
            scoreBoard.innerHTML = `You lost overall, ${computerScore} to ${playerScore}`
            setNewGame()
            return
        } else if (computerScore < playerScore) {
            scoreBoard.innerHTML = `You won overall, ${playerScore} to ${computerScore}`
            setNewGame()
            return
        } else {
            scoreBoard.innerHTML = "You tied overall"
            setNewGame()
            return
        }
    }
}

//clears the scores to start a new game 
function setNewGame(){
    computerSelection = ""
    playerSelection = ""
    playerScore = 0
    computerScore = 0
}
