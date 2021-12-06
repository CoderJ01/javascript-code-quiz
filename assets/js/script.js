var startButton = document.getElementById('start');
var containQuiz = document.getElementById('quiz');
var containResults = document.getElementById('results');
var submitButton = document.getElementById('submit');

function quizStart () {

}

function displayResults () {

}

startQuiz();

var testQuestions = [
    {
        question: "What are variables used for in JavaScript Programs?",
        choices: {
            a: "Storing numbers, dates, or other values",
            b: "Causing high-school algebra flashbacks",
            c: " Varying randomly",
            d: "None of the above"
        },
        answer: "a"
    },
    {
        question: "What should appear at the very end of your JavaScript?",
        choices: {
            a: "The END statement",
            b: "The </meta>",
            c: "The </script>",
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
            a: "<header>",
            b: "<script>",
            c: "<footer>",
            d: "<title>"
        },
        answer: "b"
    },
    {
        question: "What is the correct syntax to write 'My Pet Dog' in JavaScript?",
        choices: {
            a: "response.write(My Pet Dog)",
            b: "printIn(My Pet Dog)",
            c: "System.out.printIn(My Pet Dog)",
            d: "document.write(My Pet Dog)"
            //come back to this and put quotation marks
        },
        answer: "d"
    },
    {
        question: "In the HTML, where is the JavaScript correctly placed?",
        choices: {
            a: "<head>",
            b: "<javascript>",
            c: "<script>",
            d: "<js>"
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

startButton.addEventListener('click', quizStart);

submitButton.addEventListener('click', displayResults);