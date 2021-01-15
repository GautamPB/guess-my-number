//Guess my number!
'use strict'

let finalScore = ''
let score = 20

let highscore = ''

let numberToGuess = Math.trunc(Math.random() * 20) + 1

const playAgain = () => {
    numberToGuess = Math.trunc(Math.random() * 20) + 1
    console.log(numberToGuess)
    score = 20
    finalScore += '💯 Score: ' + score
    document.getElementById('score').innerHTML = finalScore
    finalScore = ''
    document.getElementById('ans').innerHTML = '?'
    document.body.style.backgroundColor = '#404040'
    document.getElementById('check').disabled = false
}

const checkNumber = () => {
    const guessedNumber = Number(document.querySelector('.input').value)

    if (!guessedNumber) {
        document.getElementById('message').innerHTML = '🚫 Not a number!'
        score -= 1
        finalScore += '💯 Score: ' + score
        document.getElementById('score').innerHTML = finalScore
        finalScore = ''
        console.log(guessedNumber)
    }

    if (guessedNumber === numberToGuess) {
        document.getElementById('message').innerHTML = '🎉That is Correct!'
        highscore += '🥇 Highscore: ' + score
        document.getElementById('highscore').innerHTML = highscore
        highscore = ''
        document.getElementById('ans').innerHTML = guessedNumber
        document.body.style.backgroundColor = '#17E217'
        document.getElementById('check').disabled = true
    } else if (guessedNumber > numberToGuess) {
        document.getElementById('message').innerHTML = 'Too High!'
        score -= 1
        finalScore += '💯 Score: ' + score
        document.getElementById('score').innerHTML = finalScore
        finalScore = ''
    } else if (guessedNumber < numberToGuess) {
        document.getElementById('message').innerHTML = 'Too Low!'
        score -= 1
        finalScore += '💯 Score: ' + score
        document.getElementById('score').innerHTML = finalScore
        finalScore = ''
    }
}
