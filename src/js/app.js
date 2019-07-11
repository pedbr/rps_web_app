let playRock = () => {
    console.log('You chose Rock!')
}

let playPaper = () => {
    console.log('You chose Paper!')
}

let playScissors = () => {
    console.log('You chose Scissors!')
}

document.getElementById("play-rock").addEventListener("click", playRock);
document.getElementById("play-paper").addEventListener("click", playPaper);
document.getElementById("play-scissors").addEventListener("click", playScissors);