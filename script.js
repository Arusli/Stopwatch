let centiseconds = 0;
let seconds = 0;
let minutes = 0;

let displayCentiseconds;
let displaySeconds;
let displayMinutes;


function counter() {
    centiseconds ++;
    
    if (centiseconds > 99) {
        centiseconds = 0;
        seconds ++;
    }

    if (seconds > 59) {
        seconds = 0;
        minutes ++;
    }

    if (centiseconds < 10) {
        displayCentiseconds = '0' + centiseconds
    } else {
        displayCentiseconds = centiseconds
    }

    if (seconds < 10) {
        displaySeconds = '0' + seconds
    } else {
        displaySeconds = seconds
    }

    if (minutes < 10) {
        displayMinutes = '0' + minutes
    } else {
        displayMinutes = minutes
    }

    document.getElementById('clock').innerHTML = displayMinutes + ":" + displaySeconds + ":" + displayCentiseconds;
}


const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

let clear;

function Start() {
    clear = setInterval(counter, 10);
}

function Stop() {
    clearInterval(clear);
}

function Reset() {
    clearInterval(clear);
    centiseconds = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById('clock').innerHTML = "00:00:00";


}


startButton.addEventListener('click', Start);
stopButton.addEventListener('click', Stop);
resetButton.addEventListener('click', Reset);
