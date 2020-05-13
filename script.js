let centiseconds = 0;
let seconds = 0;
let minutes = 0;

let displayCentiseconds;
let displaySeconds;
let displayMinutes;

// make random number between 1 and 16
const alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f'];



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

    // colors
    //generates full hexcolor code
    function generateHexcolor() {
        let color = '#';
        let randomInt = function() {
            return Math.floor(Math.random() * 16)
        }
        for (i = 0; i<6; i++) {
            color += alphabet[randomInt()];
        }
        document.getElementById('body').style.backgroundColor = color;
    }
    generateHexcolor();

}


const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

let clear;
let keyState = 'stopped';

function Start() {
    clear = setInterval(counter, 10);
    startButton.removeEventListener('click', Start)
    keyState = 'started';
}

function Stop() {
    clearInterval(clear);
    startButton.addEventListener('click', Start)
    keyState = 'stopped';
}

function Reset() {
    clearInterval(clear);
    centiseconds = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById('clock').innerHTML = "00:00:00";
    document.getElementById('body').style.backgroundColor = 'white';
    startButton.addEventListener('click', Start);
    keyState = 'stopped';
}


startButton.addEventListener('click', Start);
stopButton.addEventListener('click', Stop);
resetButton.addEventListener('click', Reset);


//keydown controls

function keyStartStop(e){
    if(e.keyCode == '83' && keyState == 'stopped') {
        clear = setInterval(counter, 10);
        keyState = 'started';
        startButton.removeEventListener('click', Start)
    } else if (e.keyCode == '83' && keyState == 'started') {
        clearInterval(clear);
        keyState = 'stopped';
        startButton.addEventListener('click', Start)
    }
}

function keyReset(e) {
    if(e.keyCode == '82') {
        clearInterval(clear);
        keyState = 'stopped';
        centiseconds = 0;
        seconds = 0;
        minutes = 0;
        document.getElementById('clock').innerHTML = "00:00:00";
        document.getElementById('body').style.backgroundColor = 'white';
    }
}



window.addEventListener('keydown', keyStartStop);
window.addEventListener('keydown', keyReset);


// QUESTIONS - 
// 1. I needed to removeeventlistners 
// to prevent double running the clock counter function. Is this the only way?
// 2. I had to use S and R keys to prevent chrome from taking 
// double inputs from tab or space. How to prevent this?
// 3. How come function keyStartStop knows that e is the keydown key from the event listener?
//Is the event listner passing this argument into the keyStartStop callback function? 
//e is never defined afaik. Do u know what I mean?