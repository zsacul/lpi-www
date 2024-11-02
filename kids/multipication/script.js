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

function generateProblem() {
    const num1 = getRandomInt(1, 10);
    const num2 = getRandomInt(1, 10);
    const correctAnswer = num1 * num2;

    questionElement.textContent = `${num1} × ${num2} = ?`;

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
        wait_time = 3000;
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

function updateScoreBoard() {
    scoreElement.textContent = `Score ${score}`;
    streakElement.textContent = `Streak ${streak}`;
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

// Initialize game
generateProblem();
updateScoreBoard();

// Music Toggle (Optional)
const musicToggle = document.getElementById('music-toggle');
let isMusicPlaying = false;
const backgroundMusic = new Audio('sounds/background.mp3');
backgroundMusic.loop = true;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        isMusicPlaying = false;
    } else {
        backgroundMusic.play();
        isMusicPlaying = true;
    }
});

// Store high scores in localStorage
window.addEventListener('beforeunload', () => {
    localStorage.setItem('bestScore', score);
});

// Load high score on startup
window.addEventListener('load', () => {
    const storedScore = localStorage.getItem('bestScore');
    if (storedScore) {
        score = parseInt(storedScore);
        updateScoreBoard();
    }
});