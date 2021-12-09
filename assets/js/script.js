function quizStart() {

    // store HTML output
    const outputHTML = [];

    // for each question
    testQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const choices = [];

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
   
//     document.getElementById("start").addEventListener('click', function () {
//         containQuiz.innerHTML = outputHTML.join('');
// }); 
 }

function displayResults () {

    // gather answer containers from our quiz
    const containsAnswers = containQuiz.querySelectorAll('.choices');

    // keep track of user's answers
    let correctNum = 0;

    // for each question...
    testQuestions.forEach (

        (currentQuestion, questionNumber) => {

            // if find selected answer
            const containsAnswer = containsAnswers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userSelection = (containsAnswer.querySelector(selector) || {}).value;

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

function showSlide(n) {
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

const containQuiz = document.getElementById('quiz');
const containResults = document.getElementById('results');
const submitButton = document.getElementById('submit');
const testQuestions = [
    {
        question: "What are variables used for in JavaScript Programs?",
        choices: {
            a: "Storing numbers, dates, or other values",
            b: "Causing high-school algebra flashbacks",
            c: "Varying randomly",
            d: "None of the above"
        },
        answer: "a"
    },
    {
        question: "What should appear at the very end of your JavaScript?",
        choices: {
            a: "The END statement",
            b: "The closing meta tag",
            c: "The closing script tag",
            d: "None of the above"
        },
        answer: "c"
    },
    {
        question: "What are Javascript functions capable of performing?",
        choices: {
            a: "return values",
            b: "accept parameters",
            c: "Both",
            d: "Neither"
        },
        answer: "b"
    },
    {
        question: "Which of the following is NOT a vaild JavaScript variable name?",
        choices: {
            a: "pi",
            b: "produceArray",
            c: "generate_string",
            d: "5listof2dogs"
        },
        answer: "d"
    },
    {
        question: "Which tag is an HTML extension that can enclose any number of JavaScript statemnts?",
        choices: {
            a: "header",
            b: "script",
            c: "footer",
            d: "title"
        },
        answer: "b"
    },
    {
        question: "What is the correct syntax to write 'My Pet Dog' in JavaScript?",
        choices: {
            a: "response.write(\"My Pet Dog\")",
            b: "printIn(\"My Pet Dog\")",
            c: "System.out.printIn(\"My Pet Dog\")",
            d: "document.write(\"My Pet Dog\")"
            //come back to this and put quotation marks
        },
        answer: "d"
    },
    {
        question: "In the HTML, where is the JavaScript correctly placed?",
        choices: {
            a: "head",
            b: "javascript",
            c: "script",
            d: "js"
        },
        answer: "c"
    },
    {
        question: "The correct syntax for linking a .html to a .js file contains ___________?",
        choices: {
            a: "src",
            b: "href",
            c: "rel",
            d: "id"
        },
        answer: "a"
    },
    {
        question: "Which is the server-side JavaScript object?",
        choices: {
            a: "FileUpLoad",
            b: "function",
            c: "date",
            d: "file"
        },
        answer: "d"
    },
    {
        question: "How are specific conditions tested for in JavaScript? Which statement is utilized?",
        choices: {
            a: "If",
            b: "For",
            c: "Select",
            d: "Switch"
        },
        answer: "a"
    }
];

// document.getElementById("start").onclick = quizStart();

var begin = document.getElementById("start");
if (begin.addEventListener)
    begin.addEventListener("click", quizStart, false);
else if (begin.attachEvent)
    begin.attachEvent('onclick', quizStart);

// Pagination
// document.getElementById("start").addEventListener("click", function () {
//     document.getElementById("quiz").innerHTML= begin.join(" ");
// });

// const startButton = document.getElementById('start');
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

//startButton.addEventListener('click', quizStart);

submitButton.addEventListener('click', displayResults);

previousButton.addEventListener("click", showPreviousSlide);

nextButton.addEventListener("click", showNextSlide);


