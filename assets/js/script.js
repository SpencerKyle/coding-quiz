var timerId
var currentQuestionId = 0;

//questions
var questions = [
    {
        main: "Question 1: What is the filename extension for a JavaScript file?",
        choices: [".css", ".js", ".java", ".javascript"],
        answer: ".js"
    },
    {
        main: "Question 2: What does DOM stand for?",
        choices: ["Document Object Markup", "Document Object Notation", "Document Orientated Model", "Document Object Model"],
        answer: "Document Object Model"
    },
    {
        main: "Question 3: Which of the following best defines a Boolean?",
        choices: ["Represents both integer and floating-point values", "Represents true and false values", "Represents single-character, multi-character, and alphanumeric values", "Used for storing collections of data or more complex entities"],
        answer: "Represents true and false values"
    },
    {
        main: "Question 4: Which of the following would accurately print 'Hello World' in the console?",
        choices: ["console.log('Hello World');", "consolelog('Hello World');", "console.log(Hello World);", "console.log['Hello World'];"],
        answer: "console.log('Hello World');"
    },
]

// elements
var startPageEl = document.querySelector('#start-page');
var questionPageEl = document.querySelector("#question-page");
var startButtonEl = document.querySelector('#start-button');
var choicesEl = document.querySelector('#choice')
var choiceList = document.querySelector('#choices-list');


startButtonEl.addEventListener("click", function() {
    startQuiz();
});

function startQuiz() {
    startPageEl.className = "hidden";

    questionPageEl.className = "show";

    question();
}

function question() {
    var currentQuestion = questions[currentQuestionId];

    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.main;

    choiceList.innerHTML = "";

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        var choiceListItem = document.createElement("li");
        var choiceButton = document.createElement("button");
        choiceButton.className = "choice";
        // choiceButton.setAttribute("value", choice);

        
        choiceButton.textContent = currentQuestion.choices[i];

        choiceListItem.appendChild(choiceButton);
        choiceList.appendChild(choiceListItem);
    };

    // var choiceButtonEl = document.querySelector(".choice");

    // choiceButtonEl.addEventListener("click", function() {
    //     answerCheck();
    // })

    const choiceButtonEl = document.querySelectorAll('.choice');
    if (choiceButtonEl.length !== 0) {
      for (var i=0; i<choiceButtonEl.length; i++) {
        choiceButtonEl[i].addEventListener('click', function () {
          answerCheck();
        });
      }
    }

}

function answerCheck() {
    currentQuestionId++;

    if (currentQuestionId === questions.length) {
        alert('You are DONE!')
    } else {
        question();
    }

}

