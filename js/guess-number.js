
let randomNumber = 10;//Math.floor(Math.random() * 100) + 1;
const inputField = document.getElementById('input');
const guessSubmitBtn = document.getElementById('guess-submit-button');
const guesses = document.getElementById('previouse-guesses');
const guessStatus = document.getElementById('status');
const clue = document.getElementById('clue');

var previouseGuesses = "Previouse guesses: ";
var numberOfAttempts = 0;

function resetGame(){
    location.reload();
}

function checkClue(num){
    var difference = Math.abs(randomNumber-num);
    if(difference < 20){
        clue.textContent = "Too low";
    }else{
        clue.textContent = "Too high";
    }
}

function gameOver(){
    inputField.disabled = true;
    guessSubmitBtn.disabled = true;
    clue.remove();
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = "Start a new game!";
    document.body.querySelector('.container').append(playAgainButton);
    playAgainButton.addEventListener('click', resetGame);
}

function checkGuess(){
    var guessedNumber = inputField.value;
    previouseGuesses += guessedNumber + " ";
    numberOfAttempts += 1;
    guesses.textContent = previouseGuesses;
    if(guessedNumber == randomNumber){
        console.log('!!! Game Over - successfully guessed the number !!!');
        guessStatus.textContent = `!!! Game Over - successfully guessed the number !!!`;
        guessStatus.style.backgroundColor = 'green';
        gameOver();
    }else if(numberOfAttempts > 10){
        console.log('!!! Game Over - failed to guess the number within 10 attemps !!!');
        guessStatus.textContent = `!!! Game Over - failed to guess the number within 10 attemps !!!`;
        guessStatus.style.backgroundColor = 'red';
        gameOver();
    }else{
        console.log('!!! Wrong !!!');
        guessStatus.textContent = `Wrong`;
        guessStatus.style.backgroundColor = 'red';
        clue.style.backgroundColor = 'green';
        checkClue(guessedNumber);
    }
}


guessSubmitBtn.addEventListener('click', checkGuess);