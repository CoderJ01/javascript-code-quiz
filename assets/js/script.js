var testQuestions = [
    {
        question: "What are variables used for in JavaScript Programs?",
        number: 1,
        choices: [
            "Storing numbers, dates, or other values",
            "Causing high-school algebra flashbacks",
            "Varying randomly",
            "None of the above"
        ],
        answer: "Storing numbers, dates, or other values"
    },
    {
        question: "What should appear at the very end of your JavaScript?",
        number: 2,
        choices: [
            "The END statement",
            "The closing meta tag",
            "The closing script tag",
            "None of the above"
        ],
        answer: "The closing script tag"
    },
    {
        question: "What are Javascript functions capable of performing?",
        number: 3,
        choices: [
            "return values",
            "accept parameters",
            "Both",
            "Neither",
        ],
        answer: "accept parameters"
    },
    {
        question: "Which of the following is NOT a vaild JavaScript variable name?",
        number: 4,
        choices: [
            "pi",
            "produceArray",
            "generate_string",
            "5listof2dogs"
        ],
        answer: "5listof2dogs"
    },
    {
        question: "Which tag is an HTML extension that can enclose any number of JavaScript statemnts?",
        number: 5,
        choices: [
            "header",
            "script",
            "footer",
            "title"
        ],
        answer: "script"
    },
    {
        question: "What is the correct syntax to write 'My Pet Dog' in JavaScript?",
        number: 6,
        choices: [
            "response.write(\"My Pet Dog\")",
            "printIn(\"My Pet Dog\")",
            "System.out.printIn(\"My Pet Dog\")",
            "document.write(\"My Pet Dog\")"
        ],
        answer: "document.write(\"My Pet Dog\")"
    },
    {
        question: "In the HTML, where is the JavaScript correctly placed?",
        number: 7,
        choices: [
            "head",
            "javascript",
            "script",
            "js"
        ],
        answer: "script"
    },
    {
        question: "The correct syntax for linking a .html to a .js file contains ___________?",
        number: 8,
        choices: [
            "src",
            "href",
            "rel",
            "id"
        ],
        answer: "src"
    },
    {
        question: "Which is the server-side JavaScript object?",
        number: 9,
        choices: [
            "FileUpLoad",
            "function",
            "date",
            "file"
        ],
        answer: "file"
    },
    {
        question: "How are specific conditions tested for in JavaScript? Which statement is utilized?",
        number: 10,
        choices: [
            "If",
            "For",
            "Select",
            "Switch"
        ],
        answer: "If"
    }
];

function quizStart() {

    // store HTML output      
    var outputHTML = [];

        
        // for each question       
        testQuestions.forEach(
            
            (currentQuestion, questionNumber) => {
    
                
            // variable to store the list of possible answers
                
             var choices = [];
    
            // and for each availible answer...
            for (letter in currentQuestion.choices) { // letter in currentQuestion.choices
                 //... add HTML radio button
                 choices.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}"></input>
                    ${letter} :
                    ${currentQuestion.choices[letter]}
                </label>`
                );
            }
    
            // add this question and its answers to the output
            outputHTML.push(
                `<div class="slide">
                <div class="question">${currentQuestion.question}</div>
                <div class="choices">${choices.join("")}</div>
                </div>`
            );
            }
        );
    
// combine output list into one string of HTML and put in on the page
    
containQuiz.innerHTML = outputHTML.join('');                
}

function displayResults () {

// gather answer containers from our quiz
var containsAnswers = containQuiz.querySelectorAll('.choices');

// keep track of user's answers
var correctNum = 0;

// for each question...
testQuestions.forEach (

    (currentQuestion, questionNumber) => {

        // if find selected answer
        var containsAnswer = containsAnswers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userSelection = (containsAnswer.querySelector(selector) || {}).value;

        // if answer is correct
        if(userSelection === currentQuestion.answer) {

            correctNum++;

            containsAnswers[questionNumber].style.color = 'green';

        }
        else {
            containsAnswers[questionNumber].style.color = 'red';
        }
    }
);

containResults.innerHTML = `${correctNum} out of ${testQuestions.length}`;
}

var sec = 59;

function timer () {

var countdown = document.getElementById('timer-display');

var timer = setInterval(function() {
  
    if(sec > 1) {
        countdown.textContent = sec;
        sec--;
    }
    else if (sec === 1) {
        countdown.textContent = sec;
        sec--;
    }
    else {
        countdown.textContent = '';
        clearInterval(timer);
    }
}, 1000);
console.log("sec: " + sec);
}

timer();

function showSlide(n) {
console.log(slides[currentSlide]);
slides[currentSlide].classList.remove('active-slide');
slides[n].classList.add('active-slide');
currentSlide = n;

if(currentSlide === 0) {
    previousButton.style.display = 'none';
}
else {
    previousButton.style.display = 'inline-block';
}

if(currentSlide === slides.length - 1) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
}
else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
}
}

function showNextSlide() {
showSlide(currentSlide + 1);
}

function showPreviousSlide () {
showSlide(currentSlide - 1);
}

var containQuiz = document.getElementById('quiz');
var containResults = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questionNumber = 0;
var choiceLetter = "";

function renderQuestion () {
containQuiz.innerHTML = "";
// Questions
console.log(testQuestions[questionNumber]);
var questionEl = document.createElement('p');
questionEl.textContent = testQuestions[questionNumber].question;
containQuiz.appendChild(questionEl);

var choicesEl = document.createElement('p');
choicesEl.textContent = testQuestions[questionNumber].choices;
containQuiz.appendChild(choicesEl);
}

renderQuestion();

setInterval(function() {
questionNumber++;
renderQuestion();
}, 5000);

// var startButton = document.getElementById('start');
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
var currentSlide = 0;

showSlide(currentSlide);

submitButton.addEventListener('click', displayResults);

previousButton.addEventListener("click", showPreviousSlide);

nextButton.addEventListener("click", showNextSlide);


