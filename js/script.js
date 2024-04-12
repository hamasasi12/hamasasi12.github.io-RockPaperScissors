const winLose = document.querySelector('.winLose')
const rps = document.querySelector('.rps')
const fistLeft = document.querySelector('#fist-left')
const fistRight = document.querySelector('#fist-right')
const playerScoree = document.querySelector('#player-score')
const computerScoree = document.querySelector('#computer-score')
const rockButton = document.querySelector('#rockButton')
const paperButton = document.querySelector('#paperButton')
const scissorButton = document.querySelector('#scissorButton')
const restartButton = document.querySelector('.restart-button')
const startButtons = document.querySelector('#startButtons')
const startButton = document.querySelector('#startButton')

// make start button disappear
// startButton.addEventListener("click",() => {
//     startButtons.classList.add('display-none')
// })

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('startButton').addEventListener('click', async function() {
    this.classList.add('hidden');
    await sleep(2000)
    this.classList.add('disappear') // Add 'hidden' class to the button
    });

// make game start and blink
startButton.addEventListener('click', async function () {
    await sleep(2000)
    winLose.textContent = "Game Start"
    rps.textContent = "Choose Your Weapon"
    rps.classList.add("fade-in-out")
    winLose.classList.add("blinkGameStart")
})

//restart button refresh
restartButton.addEventListener("click",() => {
    location.reload()
})

//game
let playerScores = 0
let computerScores = 0
let roundWin = ''

//random computer choises
function getComputerChoises() {
    let getComputerChoises = ['rock','paper','scissor']
    const randomNumber = Math.floor(Math.random() * 3)
    return getComputerChoises[randomNumber]
}


function asdasd (computerChoise) {
    const test = computerChoise
    if (test === 'rock') {
        fistRight.textContent = "✊"
        console.log("computer batu")
    }
    if (test === 'scissor') {
        fistRight.textContent = "✌"
        console.log("computer gunting")
    }
    if (test === 'paper') {
        fistRight.textContent = "✋"
        console.log("computer kertas")
    }
}
//the main brain
function playerscoreStorage(Humaschoises) {
    const computer = getComputerChoises()
    asdasd(computer)
    if (
        (Humaschoises === 'rock' && computer === 'scissor') ||
        (Humaschoises === 'scissor' && computer === 'paper') ||
        (Humaschoises === 'paper' && computer === 'rock')
    ) {
        playerScores ++
        rps.textContent = "You Win!"
    }
    if (
        (computer === 'rock' && Humaschoises === 'scissor') ||
        (computer === 'scissor' && Humaschoises === 'paper') ||
        (computer === 'paper' && Humaschoises === 'rock')
    ) {
        computerScores ++
        rps.textContent = "Computer Win!"
    }
    if (playerScores === 5 || computerScores === 5) {
        location.reload()
    }
    if (Humaschoises === computer) {
        roundWin = 'tie'
        rps.textContent = "Draw!"
    }
    updateScore()

}
//get human choises
function mainGame() {
    rockButton.addEventListener('click',() => {
        playerscoreStorage('rock')
        fistLeft.textContent = "✊"
    })
    
    scissorButton.addEventListener('click',() => {
        playerscoreStorage('scissor')
        fistLeft.textContent = "✌"
    })
    
    paperButton.addEventListener('click',() => {
        playerscoreStorage('paper')
        fistLeft.textContent = "✋"
    })
}
mainGame()

function updateScore() {
    playerScoree.textContent = `Player: ${playerScores}`
    computerScoree.textContent = `Computer: ${computerScores}`
}

let bleep = new Audio()
bleep.src = "./asset/1.wav"

let bleepGame = new Audio()
bleepGame.src = "./asset/soundGame.mp3"

