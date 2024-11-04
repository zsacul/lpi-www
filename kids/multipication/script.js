// script.js

let score = 0;
let streak = 0;
let bestStreak = 0;
let progress = 0;

const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const scoreElement = document.getElementById('score');
const streakElement = document.getElementById('streak');
const progressElement = document.getElementById('progress');
const messageElement = document.getElementById('message');
const mascotElement = document.getElementById('mascot');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const modeElement = document.getElementById('mode');
const highScoreElement = document.getElementById('high-score');
const musicIcon = document.getElementById('music');
const soundIcon = document.getElementById('sound');


// Read mode from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode');

modeElement.value = mode==null? "mul10" : mode;

function generateProblem() {
    let num1, num2, correctAnswer;
    switch (mode) {
        case 'add10':
            num1 = getRandomInt(1, 10);
            num2 = getRandomInt(1, 10);
            correctAnswer = num1 + num2;
            questionElement.textContent = `${num1} + ${num2} = ?`;
            break;
        case 'add20':
            num1 = getRandomInt(1, 20);
            num2 = getRandomInt(1, 20);
            correctAnswer = num1 + num2;
            questionElement.textContent = `${num1} + ${num2} = ?`;
            break;
        case 'add50':
            num1 = getRandomInt(1, 50);
            num2 = getRandomInt(1, 50);
            correctAnswer = num1 + num2;
            questionElement.textContent = `${num1} + ${num2} = ?`;
            break;
        case 'mul5':
            num1 = getRandomInt(1, 5);
            num2 = getRandomInt(1, 5);
            correctAnswer = num1 * num2;
            questionElement.textContent = `${num1} × ${num2} = ?`;
            break;
        case 'mul10':
        default:
            num1 = getRandomInt(1, 10);
            num2 = getRandomInt(1, 10);
            correctAnswer = num1 * num2;
            questionElement.textContent = `${num1} × ${num2} = ?`;
            break;
    }

    const answers = generateAnswers(correctAnswer);
    displayAnswers(answers, correctAnswer);
}

function generateAnswers(correctAnswer) {
    let answers = [correctAnswer];
    while (answers.length < 6) {
        let distractor = correctAnswer + getRandomInt(-10, 10);
        if (distractor !== correctAnswer && distractor > 0 && !answers.includes(distractor)) {
            answers.push(distractor);
        }
    }
    return shuffleArray(answers);
}

function displayAnswers(answers, correctAnswer) {
    answersContainer.innerHTML = '';
    answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('answer-button');
        button.textContent = answer;
        button.addEventListener('click', () => checkAnswer(answer, correctAnswer, button));
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer, correctAnswer, button) {

    questionElement.textContent = questionElement.textContent.replace("?",correctAnswer);

    var wait_time = 1000;
    if (selectedAnswer === correctAnswer) {
        score += 10;
        streak += 1;
        progress += 5;
        messageElement.textContent = getEncouragingMessage();
        mascotElement.style.backgroundImage = "url('images/happy.jpg')";
        correctSound.play();
        button.style.backgroundColor = '#4caf50';
    } else {
        wait_time = 4000;
        score = 0;
        streak = 0;
        messageElement.textContent = 'Try Again!';
        mascotElement.style.backgroundImage = "url('images/sad.jpg')";
        wrongSound.play();
        button.style.backgroundColor = '#f44336';
        highlightCorrectAnswer(correctAnswer);
    }
    updateScoreBoard();
    updateProgressBar();
    setTimeout(() => {
        messageElement.textContent = '';
        mascotElement.style.backgroundImage = "url('images/neutral.jpg')";
        generateProblem();
    }, wait_time);
}

function updateProgressBar() {
    if (progress >= 100) {
        progress = 0;
        // Level up or show celebratory animation
    }
    progressElement.style.width = `${progress}%`;
}

function highlightCorrectAnswer(correctAnswer) {
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach(button => {
        if (parseInt(button.textContent) === correctAnswer) {
            button.style.backgroundColor = '#4caf50';
        }
    });
}

function getEncouragingMessage() {
    const messages = ["Awesome!", "Super Star!", "Math Genius!", "Great Job!", "Well Done!"];
    return messages[getRandomInt(0, messages.length - 1)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}


// Functions to set and get cookies
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000); // Set expiration
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(';');
    const cname = `${name}=`;
    for (let cookie of cookiesArray) {
        cookie = cookie.trim();
        if (cookie.indexOf(cname) === 0) {
            return cookie.substring(cname.length, cookie.length);
        }
    }
    return '';
}

function getBestScore()
{
    getCookie('bestScore_' + modeElement.value);
}

// Initialize game
generateProblem();
updateScoreBoard();


// Store high scores in localStorage
window.addEventListener('beforeunload', () => {
    const highScore = getBestScore();
    if (!highScore || score > parseInt(highScore)) {
        setCookie('bestScore_' + modeElement.value, score, 365); // Store the score for 1 year
    }
});

// Music Toggle (Optional)
const musicToggle = document.getElementById('music');
const soundToggle = document.getElementById('sound');
let isMusicOn = !true;
let isSoundOn = true;

const backgroundMusic = new Audio('sounds/background.mp3');
backgroundMusic.loop = true;



// Load high score from cookie on startup
window.addEventListener('load', () => {
    const storedScore = getBestScore();
    //alert(storedScore);
    if (storedScore) {
        highScoreElement.textContent = `High Score: ${storedScore}`;
    }

});

// Update the score board to include high score
function updateScoreBoard() {
     scoreElement.textContent = `Score: ${score} `;
    streakElement.textContent = `Streak: ${streak} `;
    const highScore = getBestScore();
    if (!highScore || score > parseInt(highScore)) {
        highScoreElement.textContent = `High Score: ${score} `;
    }
}



function MusicClick() 
{
    isMusicOn = !isMusicOn;

    if (!isMusicOn) {
        backgroundMusic.pause();
        musicIcon.src = 'images/Icon_MusicOff.png';
    } else {
        backgroundMusic.play();
        musicIcon.src = 'images/Icon_MusicOn.png';
    }
}

function SoundClick() 
{
    const isSoundOn = correctSound.muted;
    correctSound.muted = !isSoundOn;
      wrongSound.muted = !isSoundOn;
    soundIcon.src = isSoundOn ? 'images/Icon_SoundOn.png' : 'images/Icon_SoundOff.png';
}


// Start background music on first user interaction
document.addEventListener('click', () => {
    if (!isMusicOn) {
        backgroundMusic.play();
        isMusicOn = true;
    }
}, { once: true });