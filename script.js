var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        options: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
    {
        question: 'The condition in an if / else statement is enclosed within ______',
        options: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses'
    },
    {
        question: 'Arrays in JavaScript can be used to store _____.',
        options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above'
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to variables',
        options: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes'
    },
    {
        question: 'How do you declare a variable in JavaScript?',
        options: ['var', 'variable', 'v', 'let'],
        answer: 'var'
    },
    {
        question: 'Which keyword is used to define a function in JavaScript?',
        options: ['function', 'def', 'func', 'define'],
        answer: 'function'
    }
];

// Variables
var beginQuizEl = document.getElementById("beginQuiz");
var welcomeEl = document.getElementById("welcomescreen");
var quizEl = document.getElementById("questionscreen");
var optionsEl = document.getElementById("options");
var resultEl = document.getElementById("result");
var questionsEl = document.getElementById("questions");
var countdownEl = document.getElementById("countdown");
var answerEl = document.getElementById("correct");
var timerEl = document.getElementById("timer");
var messageEl = document.getElementById("message");

var score = 0;
var secondsLeft = 0; 
var currentQuestion = 0;
var countdownTimer;

function stopQuiz() {
    clearInterval(countdownTimer);

    timerEl.textContent = "";
if (resultEl) {
    resultEl.style.display = 'block';
}
if (quizEl) {
    quizEl.style.display = 'none';
}
    messageEl.textContent = "You scored " + score;
}

function nextQuestion() {
    presentQuestion();
}

// Starting the quiz
function startQuiz() {
    secondsLeft = 100;
    score = 0;
    currentQuestion = -1;

    countdownTimer = setInterval(function () {
        if (secondsLeft > 0) {
            timerEl.textContent = secondsLeft;
            secondsLeft--;
        } else {
            stopQuiz();
        }
    }, 1000);

    presentQuestion();
}

// Presenting a question
function presentQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
        stopQuiz();
        return;
    }

    var question = questions[currentQuestion];
    questionsEl.textContent = question.question;
    optionsEl.innerHTML = '';

    question.options.forEach(function (option) {
        var button = createOptionButton(option);
        optionsEl.appendChild(button);
    });
}

function createOptionButton(option) { 
    var button = document.createElement('button');
    button.textContent = option;
    button.onclick = function () {
        checkAnswer(option);
    };
    return button;
}

function checkAnswer(selectedOption) {
    var question = questions[currentQuestion];

    if (selectedOption === question.answer) {
        score++;
    }

    presentQuestion();
}

beginQuizEl.addEventListener("click", startQuiz);
