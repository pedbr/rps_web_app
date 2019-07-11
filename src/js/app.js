const playRock = () => {
    let displayChoice = document.getElementById("display-choice")
    displayChoice.innerHTML = `You chose rock!`
}

const playPaper = () => {
    let displayChoice = document.getElementById("display-choice")
    displayChoice.innerHTML = `You chose paper!`
}

const playScissors = () => {
    let displayChoice = document.getElementById("display-choice")
    displayChoice.innerHTML = `You chose scissors!`
}

document.getElementById("play-rock").addEventListener("click", playRock);
document.getElementById("play-paper").addEventListener("click", playPaper);
document.getElementById("play-scissors").addEventListener("click", playScissors);