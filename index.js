const startQuizButton = document.getElementById('start-btn');
const nextQuestionButton = document.getElementById('next-btn');
const displayQuestions = document.getElementById('test-queue');
const questionsPage = document.querySelector('.questions-page');
const displayScore = document.getElementById('display-score');

const questions = [
    {
        question: "What company makes the Xperia model of smartphone?",
        answers: [
            {text: "Samsung", correct: false},
            {text: "Sony", correct: true},
            {text: "Nokia", correct: false}
        ]

        
    },

    {
        question: "Which city is home to the Brandenburg Gate?",
        answers: [
            {text: "Berlin", correct: true},
            {text: "Paris", correct: false},
            {text: "Rome", correct: false}
        ]
    
    },

    {
        question: "Which of the following is NOT a fruit?",
        answers: [
            {text: "Rhubarb", correct: true},
            {text: "Tomatoes", correct: false},
            {text: "Strawberries", correct: false}  
        ]
        
    },

    {
        question: "Which of the following is NOT a programming language?",
        answers: [
            {text: "Python", correct: false},
            {text: "JavaScript", correct: false},
            {text: "Javam", correct: true}
        ]
        
    },

    {
        question : "What spirit is used in making a Tom Collins?",
        answers: [
            {text: "Vodka", correct: false},
            {text: "Rum", correct: false},
            {text: "Gin", correct: true}    
        ]
        
    }
];

let currentQuestionIndex = 0;
let score = 0;

function randomizeQuestions() {
    for (let i=0; i < questions.length; i++){
        const randomIndex = Math.floor(Math.random() * questions.length);
        [questions[i], questions[randomIndex]] = [questions[randomIndex], questions[i]];
    }
};

function shuffleAnswers(question) {
    const answers = question.answers;
    for (let i = 0; i < answers.length; i++) {
        const randomIndex = Math.floor(Math.random() * answers.length);
        [answers[i], answers[randomIndex]] = [answers[randomIndex], answers[i]];
    }   
};


function showQuestion(){


    displayCounter(currentQuestionIndex);
    displayQuestions.innerHTML = '';

    question = questions[currentQuestionIndex];

    shuffleAnswers(question);

    const questionElement = document.createElement('div');

    questionElement.classList.add('question');

    questionElement.innerHTML = `
    <h2>${question.question}</h2>

    <div class ="answers">
    ${question.answers.map((answer, i) => `
        <button 
        class="answer-btn"
        data-correct="${answer.correct}">
        ${answer.text}
        </button>
    `).join('')}
    </div>

    <button id="next-btn" class="btn" style="display: none;">Next</button>
    `



displayQuestions.appendChild(questionElement);

const answerButtons = document.querySelectorAll('.answer-btn');

const nextButton = document.getElementById('next-btn');

answerButtons.forEach(button => {
    button.addEventListener('click', () => {

       
        answerButtons.forEach(btn => btn.classList.remove('selected'));

        button.classList.add('selected');
        
        nextButton.style.display = 'block';

        const isCorrect = button.dataset.correct === 'true';

        
    });

    if (currentQuestionIndex === questions.length - 1){
        nextButton.textContent = 'Finish';
    }
});

nextButton.addEventListener('click', () => {
    const selectedButton = document.querySelector('.answer-btn.selected');

    if (selectedButton && selectedButton.dataset.correct === 'true') {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        displayQuestions.innerHTML = '';
        displayQuestions.innerHTML += `<div class="completed">
        <h2 class="completed-title">Quiz Completed!</h2>
        <p class="score">Your score: <span style="font-weight: bold; color: red">${score}</span> out of ${questions.length}</p>
        </div>`;

        displayQuestions.innerHTML += `
        <button id="restart-btn" class="btn" style="margin-top: 20px;">Restart Quiz</button>
        `
        const restartButton = document.getElementById('restart-btn');

        restartButton.addEventListener('click', 
            () => {
                displayQuestions.innerHTML = '';
                score = 0;
                currentQuestionIndex = 0;
                startQuiz();
            }
        ); 
    }
}); 

};

function displayCounter(questionIndex){
    const counterElement = document.getElementById('question-counter');
    if (counterElement) {
        counterElement.textContent = `Question ${questionIndex + 1} of ${questions.length}`;
    }
}




const startQuiz = () => {

    randomizeQuestions();
    startQuizButton.style.display = 'none';
    displayQuestions.style.display = 'block';
    questionsPage.classList.remove('hidden');

    currentQuestionIndex = 0;
    showQuestion();
    
};


startQuizButton.addEventListener('click', startQuiz);

