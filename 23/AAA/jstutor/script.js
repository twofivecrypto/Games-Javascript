import quizData from './quizData.js';

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");

let currentQuestionIndex = 0;
let shuffledQuestions = [];
let userAnswers = [];

function shuffleQuestions() {
    shuffledQuestions = [...quizData];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
}

// Function to load a question
function loadQuestion() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    // Display answer options
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.textContent = `${index + 1}. ${option}`;
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });

    // Clear userAnswers for the new question (Moved it inside the loadQuestion function)
    userAnswers = [];
}

// Clear userAnswers for the first question
shuffleQuestions();
loadQuestion();

function checkAnswer(selectedOption) {
    // Collect user selections from checkboxes
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    userAnswers = Array.from(checkboxes).map(checkbox => checkbox.value);

    // Compare userAnswers with correct answers
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = userAnswers.every(answer => currentQuestion.correctAnswer.includes(answer));

    if (isCorrect) {
        // Correct answer
        // You can add your logic here (e.g., increase score)
        console.log("Correct!");
    } else {
        // Incorrect answer
        // You can add your logic here (e.g., display a message)
        alert("Incorrect!");
    }

    // Move to the next question
    currentQuestionIndex++;

    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        // Quiz completed
        console.log("Quiz completed!");
        submitButton.disabled = true;
    }
}

// Load the first question
document.addEventListener("DOMContentLoaded", function () {
    // Load the first question
    loadQuestion();

    quizContainer.addEventListener("submit", function (event) {
        if (event.target === quizForm) {
            event.preventDefault();
            checkAnswer();
        }
    });

    // Add event listener to the "Next" button
    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < shuffledQuestions.length) {
            loadQuestion();
        }
    });
});
