function sayHi(){
    console.log("Hi!")
}

sayHi()

const choices = ["ROCK", "PAPER", "SCISSORS"]
let computerSelection = ""
let playerSelection = ""
let playerScore = 0
let computerScore = 0

//get computer's choice
function getComputerChoice() {
    let num = Math.floor(Math.random()*3)
    computerSelection = choices[num]
    console.log(computerSelection)

}

// getComputerChoice()



//get player's choice
function getPlayerChoice(){
    let answer = prompt("Choose rock, paper, or scissors!")
    let finalAnswer = answer.toUpperCase()
    if(finalAnswer === "ROCK" || finalAnswer === "PAPER" || finalAnswer === "SCISSORS") {
        alert(`You chose ${finalAnswer}`)
        return playerSelection = finalAnswer
    }else {
        alert("Make sure to spell it right!")
        getPlayerChoice()
    }
}

// getPlayerChoice()
// console.log(playerSelection)




//compare the two
function playRound(){
    getComputerChoice()
    getPlayerChoice()
    console.log(playerSelection)
    if(computerSelection == "PAPER" && playerSelection == "ROCK"){
        alert("You Lose! Paper beats Rock")
        computerScore++
    } else if(computerSelection == "ROCK" && playerSelection == "SCISSORS"){
        alert("You Lose! Rock beats Scissors")
        computerScore++
    } else if(computerSelection == "SCISSORS" && playerSelection == "PAPER"){
        alert("You Lose! Scissors beats Paper")
        computerScore++
    } else if(computerSelection == "ROCK" && playerSelection == "PAPER"){
        alert("You Win! Paper beats Rock")
        playerScore++
    } else if(computerSelection == "SCISSORS" && playerSelection == "ROCK"){
        alert("You Win! Rock beats Scissors")
        playerScore++
    } else if(computerSelection == "PAPER" && playerSelection == "SCISSORS"){
        alert("You Win! Scissors beats Paper")
        playerScore++
    } else {
        alert(`You Tied! You both chose ${computerSelection} `)
    }
}

// playRound()


//game
function game(){
    for(let i = 0; i < 5; i++){
        playRound()
        alert(`The score is computer: ${computerScore} to you: ${playerScore}`)
    }
    if (computerScore > playerScore) {
        alert(`You lost overall, ${computerScore} to ${playerScore}`)
    } else if (computerScore < playerScore) {
        alert(`You won overall, ${playerScore} to ${computerScore}`)
    } else {
        alert("You tied overall")
    }
}

game()