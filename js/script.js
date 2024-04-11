const winLose = document.querySelector('.winLose')
const rps = document.querySelector('.rps')
const fistLeft = document.querySelector('#fist-left')
const fistRight = document.querySelector('#fist-right')
const playerScore = document.querySelector('#player-score')
const computerScore = document.querySelector('#computer-score')
const rockButton = document.querySelector('#rockButton')
const paperButton = document.querySelector('#paperButton')
const scissorButton = document.querySelector('#scissorButton')
const restartButton = document.querySelector('.restart-button')
const startButtons = document.querySelector('#startButtons')
const startButton = document.querySelector('#startButton')

// make start button disappear
startButton.addEventListener("click",() => {
    startButtons.classList.add('display-none')
})

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

