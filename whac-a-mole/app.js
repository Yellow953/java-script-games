const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mode')
const timeLeftDisplay = document.querySelector('#time-left')
const scoreDisplay = document.querySelector('#score')

let score = 0;
let time = 60

function RandomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    });

    let randomSquare = squares[Math.floor(Math.random() * squares.length)]

    randomSquare.classList.add('mole')
}

RandomSquare()