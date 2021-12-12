var questions = [ "What are variables used for in JavaScript Programs?",
"What should appear at the very end of your JavaScript?",
"What are Javascript functions capable of performing?",
"Which of the following is NOT a vaild JavaScript variable name?",
"Which tag is an HTML extension that can enclose any number of JavaScript statemnts?",
"What is the correct syntax to write 'My Pet Dog' in JavaScript?",
"In the HTML, where is the JavaScript correctly placed?",
"The correct syntax for linking a .html to a .js file contains ___________?",
"Which is the server-side JavaScript object?",
"How are specific conditions tested for in JavaScript? Which statement is utilized?"
];

var queOneOptions = ["<button class=buttons001 onclick=q1i()>Causing high-school algebra flashbacks</button><br /><br /><button class=buttons001 onclick=q1j()>Varying randomly</button><br /><br /><button class=buttons001 onclick=q1c()>Storing numbers, dates, or other values</button><br /><br /><button class=buttons001 onclick=q1k()>None of the above</button>"];
var queTwoOptions = ["<button class=buttons001 onclick=q2i()>The END statement</button><br /><br /><button class=buttons001 onclick=q2j()>The closing meta tag</button><br /><br /><button class=buttons001 onclick=q2c()>The closing script tag</button><br /><br /><button class=buttons001 onclick=q2k()>None of the above</button>"];
var queThreeOptions = ["<button class=buttons001 onclick=q3c()>accept parameters</button><br /><br /><button class=buttons001 onclick=q3i()>return values</button><br /><br /><button class=buttons001 onclick=q3j()>Both</button><br /><br /><button class=buttons001 onclick=q3k()>Neither</button>"];
var queFourOptions = ["<button class=buttons001 onclick=q4i()>pi</button><br /><br /><button class=buttons001 onclick=q4j()>produceArray</button><br /><br /><button class=buttons001 onclick=q4k()>generate_String</button><br /><br /><button class=buttons001 onclick=q4c()>5listof2dogs</button>"];
var queFiveOptions = ["<button class=buttons001 onclick=q5c()>script</button><br /><br /><button class=buttons001 onclick=q5i()>header</button><br /><br /><button class=buttons001 onclick=q5j()>footer</button><br /><br /><button class=buttons001 onclick=q5k()>title</button>"];
var queSixOptions = ["<button class=buttons001 onclick=q6i()>response.write(\"My Pet Dog\")</button><br /><br /><button class=buttons001 onclick=q6j()>printIn(\"My Pet Dog\")</button><br /><br /><button class=buttons001 onclick=q6k()>System.out.printIn(\"My Pet Dog\")</button><br /><br /><button class=buttons001 onclick=q6c()>document.write(\"My Pet Dog\")</button>"];
var queSevenOptions = ["<button class=buttons001 onclick=q7i()>head</button><br /><br /><button class=buttons001 onclick=q7j()>javascript</button><br /><br /><button class=buttons001 onclick=q7c()>script</button><br /><br /><button class=buttons001 onclick=q7k()>js</button>"];
var queEightOptions = ["<button class=buttons001 onclick=q8c()>src</button><br /><br /><button class=buttons001 onclick=q8i()>href</button><br /><br /><button class=buttons001 onclick=q8j()>rel</button><br /><br /><button class=buttons001 onclick=q8k()>id</button>"];
var queNineOptions = ["<button class=buttons001 onclick=q9i()>date</button><br /><br /><button class=buttons001 onclick=q9j()>FileUpload</button><br /><br /><button class=buttons001 onclick=q9k()>function</button><br /><br /><button class=buttons001 onclick=q9c()>file</button>"];
var queTenOptions = ["<button class=buttons001 onclick=q10c()>If</button><br /><br /><button class=buttons001 onclick=q10i()>For</button><br /><br /><button class=buttons001 onclick=q10j()>Select</button><br /><br /><button class=buttons001 onclick=q#k()>switch</button>"];

// a = question number
var a = 0;
a++;

// b = score
var b = 0;
b++;

function startQuiz() {
    c = 10; // c = time
    disappear.innerHTML = "";
    message001.innerHTML = questions[0];
    message002.innerHTML = queOneOptions;
    qNumber.innerHTML = a++;
}

// Question 1

function q1c() {
    c = "-";
    window.clearInterval(update);
    score.innerHTML = b++;
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q1i() {
    c = "-";
    window.clearInterval(update);
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q1j() {
    c = "-";
    window.clearInterval(update);
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q1k() {
    c = "-";
    window.clearInterval(update);
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

// Question 2

function q2c() {
    window.clearInterval(update);
    c = "-";
    score.innerHTML = b++;
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q2i() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q2j() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q2k() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

// Question 3

function q3c() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    score.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q3i() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q3j() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q3k() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}
// Question 4
function q4c() {
    window.clearInterval(update);
    c = "-";
    score.innerHTML = b++;
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q4i() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q4j() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q4k() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}
// Question 5
function q5c() {
    window.clearInterval(update);
    c = "-";
    score.innerHTML = b++;
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q5i() {
    window.clearInterval(update);
    c = "-";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q5j() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q5k() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}
// Question 6
function q6c() {
    window.clearInterval(update);
    c = "-";
    score.innerHTML = b++;
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q6i() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q6j() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q6k() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}
// Question 7
function q7c() {
    window.clearInterval(update);
    c = "-";
    score.innerHTML = b++;
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q7i() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q7j() {
    window.clearInterval(update);
    c = "-";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q7k() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}
// Question 8
function q8c() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    score.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q8i() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q8j() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q8k() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}
// Question 9
function q9c() {
    window.clearInterval(update);
    c = "-";
    score.innerHTML = b++;
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q9i() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q9j() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q9k() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}
// Question 10
function q10c() {
    window.clearInterval(update);
    c = "-";
    score.innerHTML = b++;
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q10i() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q10j() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q10k() {
    window.clearInterval(update);
    c = "-";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

// next

function next001() {
    if (a == "2") {
        update = setInterval("timer001()", 1000);
        c = 10;
        time.innerHTML = 10;
        message001.innerHTML = questions[1];
        message002.innerHTML = queTwoOptions;
        message003.innerHTML = "";
        qNumber.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "3") {
        update = setInterval("timer001()", 1000);
        c = 10;
        time.innerHTML = 10;
        message001.innerHTML = questions[2];
        message002.innerHTML = queThreeOptions;
        message003.innerHTML = "";
        qNumber.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "4") {
        update = setInterval("timer001()", 1000);
        c = 10;
        time.innerHTML = 10;
        message001.innerHTML = questions[3];
        message002.innerHTML = queFourOptions;
        message003.innerHTML = "";
        qNumber.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "5") {
        update = setInterval("timer001()", 1000);
        c = 10;
        time.innerHTML = 10;
        message001.innerHTML = questions[4];
        message002.innerHTML = queFiveOptions;
        message003.innerHTML = "";
        qNumber.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "6") {
        update = setInterval("timer001()", 1000);
        c = 10;
        time.innerHTML = 10;
        message001.innerHTML = questions[5];
        message002.innerHTML = queSixOptions;
        message003.innerHTML = "";
        qNumber.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "7") {
        update = setInterval("timer001()", 1000);
        c = 10;
        time.innerHTML = 10;
        message001.innerHTML = questions[6];
        message002.innerHTML = queSevenOptions;
        message003.innerHTML = "";
        qNumber.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "8") {
        update = setInterval("timer001()", 1000);
        c = 10;
        time.innerHTML = 10;
        message001.innerHTML = questions[7];
        message002.innerHTML = queEightOptions;
        message003.innerHTML = "";
        qNumber.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "9") {
        update = setInterval("timer001()", 1000);
        c = 10;
        time.innerHTML = 10;
        message001.innerHTML = questions[8];
        message002.innerHTML = queNineOptions;
        message003.innerHTML = "";
        qNumber.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "10") {
        update = setInterval("timer001()", 1000);
        c = 10;
        time.innerHTML = 10;
        message001.innerHTML = questions[9];
        message002.innerHTML = queTenOptions;
        message003.innerHTML = "";
        qNumber.innerHTML = a++;
        message004.innerHTML = "";
    } else {
        window.clearInterval(update);
        c = "-";
        message001.innerHTML = "End of Quiz";
        message002.innerHTML = "";
        message003.innerHTML = "";
        message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
        input001.innerHTML = "<input class=type-initials onclick=add001()>"
    }
}

// Time Keeper

function timer001() {
    c = c - 1;
    if (c < 10) {
        time.innerHTML = c;
    }

    if (c < 1) {
        window.clearInterval(update);
        message001.innerHTML = "Time's up";
        message002.innerHTML = "";
        message003.innerHTML = "";
        message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
    }
}

update = setInterval("timer001()", 1000);

function repeat001() {
    location.reload();
}

// Store score 
// var body = body.document;
// var keepScore = document.getElementById('input001');
// var fieldinput = document.createElement("fieldset");
// var legend = document.createElement("legend");
// var inputInitials = document.createElement("input");
// var scoreEarned = document.createElement("input");

// body.appendChild(keepScore);
// keepScore.appendChild(fieldinput);
// fieldinput.appendChild(legend);
// legend.appendChild(inputInitials);
// legend.appendChild(scoreEarned);

fieldset.innerHTML = "<fieldset></fieldset>";
fieldset.document.appendChild(legend);
legend.innerHTML = "<legend>Input Initials<legend>";



