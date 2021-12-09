// var beginQuiz = quizStart(function(){

// });

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
                
        // Method A
        //     document.getElementById("start").addEventListener('click', function () {
        //         containQuiz.innerHTML = outputHTML.join('');
        // }); 
    
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

// Method B
//  document.getElementById("start").addEventListener("click", function () {
//      document.getElementById("quiz").innerHTML= begin.join(" ");
//  });

 
function timer () {
    var sec = 59;
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

// Method C
// startButton.addEventListener('click', showSlide);

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide () {
    showSlide(currentSlide - 1);
}

var beginQuiz = document.getElementById('start');
var containQuiz = document.getElementById('quiz');
var containResults = document.getElementById('results');
var submitButton = document.getElementById('submit');
var testQuestions = [
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

  
// Method D
// document.getElementById("start").onclick = quizStart();

// Method E
// var begin = document.getElementById("start");
// if (begin.addEventListener)
//     begin.addEventListener("click", quizStart, false);
// else if (begin.attachEvent)
//     begin.attachEvent('onclick', quizStart);

quizStart();

// Pagination

// Method F
// document.getElementById("start").addEventListener("click", function () {
//     document.getElementById("quiz").innerHTML= beginQuiz.join(" ");
// });

// var startButton = document.getElementById('start');
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
var currentSlide = 0;

showSlide(currentSlide);

// Method G
//startButton.addEventListener('click', quizStart);

submitButton.addEventListener('click', displayResults);

previousButton.addEventListener("click", showPreviousSlide);

nextButton.addEventListener("click", showNextSlide);


