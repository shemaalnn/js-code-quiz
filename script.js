var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        options: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },
    {
        question: 'The condition in an if / else statement is enclosed within ______',
        options: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses',
    },
    {
        question: 'Arrays in JavaScript can be used to store _____.',
        options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to variables',
        options: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
    {
        question: 'How do you declare a variable in JavaScript?',
        options: ['var', 'variable', 'v', 'let'],
        answer: 'var',
    },
    {
        question: 'Which keyword is used to define a function in JavaScript?',
        options: ['function', 'def', 'func', 'define'],
        answer: 'function',
    }
]; 

var beginQuizEl = document.getElementById("begin");
var welcomeEl = document.getElementById("welcomescreen");
var quizEl = document.getElementById("questionscreen");
var scoreEl = document.getElementById("scores");
var optionsEl = document.getElementById("options");
var resultEl = document.getElementById("result");
var questionsEl = document.getElementById("questions");
var countdownEl = document.getElementById("countdown");
var answerEl = document.getElementById("correct");
var messageEl = document.getElementById("message");
var button = createOptionButton(options);
var button = document.createElement('button');

var score = 0;
var timeLeft = 100;
var currentQuestion = 0;

var countdownTimer; 

function beginQuiz() {
    welcomeEl.style.display = "none";
    quizEl.style.display = "block";
    presentQuestion();
    startTimer();
}

function presentQuestion() {
    var currentQuestionDisplayed = questions[currentQuestion];
    questionsEl.textContent = currentQuestionDisplayed.question;

    optionsEl.textContent = '';
    currentQuestionDisplayed.options.forEach(function(options) {
        optionsEl.appendChild(button);
    });
}

function createOptionButton(options) {
    button.textContent = options;
    button.onclick = function() {
    checkAnswer(options);
}; 
return button;
}

function checkAnswer(selectedOption) { 
    var currentQuestionDisplayed = questions[currentQuestion];
    if (selectedOption == currentQuestionDisplayed.answer) {
        score++; 
    }
    resultEl.textContent = "Your score = " + score;
    currentQuestion++; 
    if (currentQuestion < questions.length) {
        presentQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    countdownTimer = setInterval(function() { 
        timeLeft--;
        countdownEl.textContent = "Time Remaining = " + timeLeft + " seconds";
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}


function endQuiz() {
    quizEl.style.display = "none";
    scoreEl.style.display = "block";
    messageEl.textContent = "Well done! Your total score is = " + score;
}

beginQuizEl.addEventListener("click", beginQuiz);
