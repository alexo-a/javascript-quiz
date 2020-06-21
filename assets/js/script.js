var questions = [
    //question 1
    {q: "Inside which HTML element do we put the Javascript?",
    a: ["<javascript>", "<scripting>","<js>","<script>"],
    ci: 3}, 
//question 2
    {q: "What is the correct JavaScript syntax to change the content of the HTML element below? <br> <br>&lt;p id='demo'>This is a demonstration.&lt;/p>",
    a: ["document.getElementByName('p').innerHTML = 'Hello World!';",
    "document.getElementById('p').innerHTML = 'Hello World!';",
    "#demo.innerHTML = 'Hello World!';",
    "document.getElement ('p').innerHTML = 'Hello World!';"],
    ci: 1},
//question 3
    {q: "Where is the correct place to insert a JavaScript?",
    a: ["The <head> section",
        "The <body> section",
        "Both the <head> section and the <body> section are correct"],
    ci: 2},

//question 4
    {q: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    a: ["<script href='xxx.js'>",
        "<script src='xxx.js'>",
        "<script name='xxx.js'>"],
    ci: 1},

//question 5
    {q: "The external JavaScript file must contain the &lt;script> tag.",
    a: ["True",
        "False"],
    ci: 1},
//question 6

    {q: "How do you write 'Hello World' in an alert box?",
    a: ["alert('Hello World');",
    "msgBox('Hello World');",
    "alertBox('Hello World');",
    "msg('Hello World');"],
    ci: 0},
//question 7
    {q: "How do you create a function in JavaScript?",
    a: ["function myFunction()",
        "function:myFunction()",
        "function = myFunction()"],
    ci: 0},
//question 8
    {q: "How do you call a function named 'myFunction'?",
    a: ["myFunction()",
        "call function myFunction()",
        "call myFunction()"],
    ci: 0},
//question 9
    {q: "How to write an IF statement in JavaScript?",
    a: ["if i = 5",
        "if i = 5 then",
        "if (i == 5)",
        "if i == 5 then"],
    ci: 2},
//question 10 
    {q: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    a: ["if (i <> 5)",
        "if i =! 5 then",
        "if (i != 5)",
        "if i <> 5"],
    ci: 2},
//question 11
    {q: "How does a WHILE loop start?",
    a: ["while i = 1 to 10",
        "while (i <= 10)",
        "while (i <= 10; i++)"],
    ci: 1},
//question 12
    {q: "How does a FOR loop start?",
    a: ["for (i <=5; i++)",
        "for i = 1 to 5",
        "for (i = 0; i <=5)",
        "for (i = 0; i <=5; i++)"],
    ci: 3},
//question 13
    {q: "How can you add a comment in a JavaScript?",
    a: ["\/\/This is a comment",
        "<!--This is a comment--> ",
        "‘This is a comment"],
    ci: 0},
//question 14
    {q: "How to insert a comment that has more than one line?",
    a: ["<!--This comment has \r\n more than one line-->",
        "\/* This comment has \r\n more than one line\*/",
        "\/\/This comment has \r\n more than one line\/\/"
        ],
    ci: 1},
//question 15
    {q: "What is the correct way to write a JavaScript array?",
    a: ["var colors = (1:'red', 2:'green', 3:'blue')",
    "var colors = ['red', 'green', 'blue']",
    "var colors = 'red', 'green', 'blue'",
    "var colors = 1 = ('red'), 2 =('green'), 3 =('blue')"],
    ci: 1},
//question 16
    {q: "How do you round the number 7.25, to the nearest integer?",
    a: ["rnd(7.25)",
        "Math.round(7.25)",
        "round(7.25)",
        "Math.rnd(7.25)"],
    ci: 1},
//question 17
    {q: "How do you find the number with the highest value of x and y?",
    a: ["Math.ciel(x, y)",
        "ciel(x,y)",
        "Math.max(x,y)",
        "top(x,y)"],
    ci: 2},
//question 18
    {q: "What is the correct JavaScript syntax for opening a new window called 'w2'?",
    a: ["w2 = window.new('http://www.w3schools.com');",
    "w2 = window.open('http://www.w3schools.com');"],
    ci: 1},
//question 19
    {q: "JavaScript is the same as Java.",
    a: ["False",
        "True"],
    ci: 0},
//question 20
    {q: "How can you detect the client's browser name?",
    a: ["navigator.appName",
        "browser.name",
        "client.navName"],
    ci: 0},
//question 21
    {q: "Which event occurs when the user clicks on an HTML element?",
    a: ["onmouseclick",
        "onchange",
        "onmouseover",
        "onclick"],
    ci: 3},
//question 22
    {q: "How do you declare a JavaScript variable?",
    a: ["v carName;",
        "var carName;",
        "variable carName;"],
    ci: 1},
//question 23
    {q: "Which operator is used to assign a value to a variable?",
    a: ["*",
        "–",
        "=",
        "x"],
    ci: 2},
//question 24
    {q: "What will the following code return: Boolean(10 > 9)",
    a: ["false",
        "NaN",
        "true"],
    ci: 2},
//question 25
    {q: "Is JavaScript case-sensitive?",
    a: ["No",
        "Yes"],
    ci: 1}
    ]



var questionArea = document.querySelector("#question");
var mainArea = document.querySelector("#main");
var answersArea = document.querySelector("#answers");
var beginQuizBtn = document.querySelector("#beginQuiz");
var timerHTML = document.querySelector("#timer");
var correctContainer = document.querySelector("#correctContainer");
var correctCounter = document.querySelector("#correctCounter");
var initialsForm = document.querySelector("#initialsForm");
var resetHSBtn = document.querySelector("#purgeHS");
var goBackBtn = document.querySelector("#goBackBtn");
var highScoresMessage = document.querySelector("#hsmsg");
var questionAnswer = 0;
var timer = 0;

var chosenQuestions = [];
var numberCorrect = 0;
var quizActive = false;


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function resetQuestionArray(){
    var possibleQuestions = [];
    chosenQuestions = [];
    //create array with all possible questions
    for (var i = 0; i <= 24; i++) {
        possibleQuestions.push(i);
    };

    //choose random 10 of those possible questions *WITHOUT* replacement
    for (var i = 0; i < 10; i++){
        var chosenIndex = getRandomIntInclusive(0, possibleQuestions.length-1);
        chosenQuestions.push(possibleQuestions[chosenIndex]);
        possibleQuestions.splice(chosenIndex,1);
    }
};

//initialize high scores if not already present
if (parseInt(localStorage.getItem("score1")) == 0){
    localStorage.setItem("initials1", "NA");
    localStorage.setItem("score1", "0");
    localStorage.setItem("initials2", "NA");
    localStorage.setItem("score2", "0");
    localStorage.setItem("initials3", "NA");
    localStorage.setItem("score3", "0");
}

function updateToolTipText(){
    document.querySelector("#hs1").textContent = localStorage.getItem("initials1") + " - " + localStorage.getItem("score1");
    document.querySelector("#hs2").textContent = localStorage.getItem("initials2") + " - " + localStorage.getItem("score2");
    document.querySelector("#hs3").textContent = localStorage.getItem("initials3") + " - " + localStorage.getItem("score3");
}

var changeQuestion = function(index){
    console.log("question " + index +" chosen.");
    while (answersArea.firstChild) {
        answersArea.removeChild(answersArea.firstChild);
    }
    questionArea.innerHTML = questions[index].q;
    for (var i = 0; i < questions[index].a.length; i++){
        var ans = document.createElement("button");
        ans.style.display = "block";
        ans.textContent = (i+1).toString() + ". " + " " +  questions[index].a[i];
        ans.setAttribute("ans-btn-id", i);
        ans.className = "ans-btn"
        answersArea.appendChild(ans);
    }
    questionAnswer = questions[index].ci;
}

var addHSToTable = function (obj, place){
    
    //update visible table
    var newScore = document.createElement("li");
    newScore.textContent = obj.initials.toString() + " - " + (obj.score).toString();
    document.querySelector("#high-scores").appendChild(newScore);
    updateLS(obj,place);
}

var updateLS = function(obj, place) {
    //update standings in localstorage
    localStorage.setItem("score"+place, obj.score.toString());
    localStorage.setItem("initials"+place, obj.initials.toString());
}

var quizWrapUp = function (){
    event.preventDefault();
    initialsForm.style.display = "none";
    //validate initials
    var userInitials = document.querySelector("#initials").value.toUpperCase();
    var userScore = parseInt(timer/1000) + numberCorrect;
    //var highscores = document.querySelector("#high-scores");

    
    document.querySelector("#HSbtns").style.display = "flex";
    //query localstorage
    var firstPlace = { initials: localStorage.getItem("initials1"),
        score: parseInt(localStorage.getItem("score1"))};
    var secondPlace = { initials: localStorage.getItem("initials2"),
        score: parseInt(localStorage.getItem("score2"))};
    var thirdPlace = { initials: localStorage.getItem("initials3"),
        score: parseInt(localStorage.getItem("score3"))};
    var user = {initials: userInitials, score: userScore};
    
    console.log("place: ??   initials: " +userInitials.initials+ " score: "+userInitials.score);
    
    
    //display highscores, with new one highlighted
    if(userScore <= thirdPlace.score){
        //doesn't make the high scores.
        highScoresMessage.textContent = "Sorry, you didn't make the high scores."
        goBackBtn.style.display = "inline";
    }
    else {
        goBackBtn.style.display = "inline";
        resetHSBtn.style.display = "inline";
        //find correct position
        if (userScore >= secondPlace.score){
            if( userScore >= firstPlace.score){
                //first place!
                //order: user, 1st, 2nd
                addHSToTable(user, "1");
                addHSToTable(firstPlace, "2");
                addHSToTable(secondPlace, "3");
            }
            else {
                //second place!!
                //order: 1st, user, 2nd
                addHSToTable(firstPlace, "1");
                addHSToTable(user, "2");
                addHSToTable(thirdPlace, "3");
            }
        }
        else {
            //third place!
            //order: 1st, 2nd, user
            addHSToTable(firstPlace, "1");
            addHSToTable(secondPlace, "2");
            addHSToTable(user, "3");
        }
    };
    updateToolTipText();
}


var endQuiz= function (){
    
    //clean up area
    while (answersArea.firstChild) {
        answersArea.removeChild(answersArea.firstChild);
    }
    questionArea.textContent = "";
    document.querySelector("#wrong-msg").style.display = "none";


    if (timer > 0) { //indicates successful quiz
        beginQuizBtn.style.display = "none";
        console.log("quiz completed. you're a winner bro.")
        
        //display points
        var score = timer + numberCorrect;
        var scoreMsg = document.createElement("h2");
        scoreMsg.textContent = "Congratulations! You scored " + score.toString() + " points!";
        
        //prompt for initials
        
        initialsForm.style.display = "block";
        
    }
    else {
        //lo siento, try again?
        resetHS();
        document.querySelector("#timeoutmsg").style.display = "block";
        //beginQuizBtn.style.display = "block";
    }
}


var answerChosen = function(event) {
    // get target element from event
    var targetEl = event.target;
    
    // edit button was clicked
    if (targetEl.matches(".ans-btn")) {
        var answerId = targetEl.getAttribute("ans-btn-id");
        
        if (answerId != questionAnswer) {
            console.log("answer " + answerId + " was chosen, correct answer is " + questionAnswer);
            
            //remove time from timer 
            timer-=5000;
            
            //display "wrong" message
            document.querySelector("#wrong-msg").style.display = "block";
        }
        else {
            console.log("Correct answer!")
            numberCorrect++;
            document.querySelector("#wrong-msg").style.display = "none";
        }

        correctCounter.textContent = numberCorrect.toString() + " / " + (10 - chosenQuestions.length).toString();
        
        if (chosenQuestions.length > 0){
            
            changeQuestion(chosenQuestions.shift());
        }
        else {
            quizActive = false;
        }
    } 

};



var startQuiz = function (){
    resetQuestionArray();
    document.querySelector("#timeoutmsg").style.display = "none";
    timer = 60000;
    quizActive = true;
    numberCorrect = 0;
    beginQuizBtn.style.display = "none";
    correctContainer.style.visibility = "visible";
    correctCounter.textContent = numberCorrect + " / 0" ;
    changeQuestion(chosenQuestions.shift());
    timerHTML.style.color = "black";
    timerHTML.style.backgroundColor = "white";
    timerHTML.textContent =  parseFloat((timer/1000)).toFixed(1).toString() + " seconds left.";

    var quizTimer = setInterval(function() {
        console.log(timer + " seconds left.");
        timerHTML.textContent = parseFloat((timer/1000)).toFixed(1).toString() + " seconds left.";
        
        if ( !quizActive) {
            clearInterval(quizTimer);
            endQuiz();
        }
        else if(timer <= 0 ){
            clearInterval(quizTimer);
            endQuiz();
        }

        else {
            if (timer < 10000){
                timerHTML.style.color = "white";
                timerHTML.style.backgroundColor = "red";
            }
            else {
                timerHTML.style.color = "black";
                timerHTML.style.backgroundColor = "white";
            };
            timer-=500;
            
        }

    },500);

}

var resetHS = function(){
    for (var i = 0; i < 3; i++){
        var object = {initials: "NA", score: 0};
        updateLS(object, (i+1).toString())
    }
    updateToolTipText();
    resetApp();
}
var resetApp = function (){
    //hide #HSbtns
    document.querySelector("#HSbtns").style.display = "none";
    //hide number correct up top
    correctContainer.style.visibility = "hidden";
    //hide timer
    timerHTML.textContent = "";
    //hide hs table
    while (document.querySelector("#high-scores").firstChild) {
        document.querySelector("#high-scores").removeChild(document.querySelector("#high-scores").firstChild);
    }
    //show begin button
    beginQuizBtn.style.display = "block";
    document.querySelector("#timeoutmsg").style.display = "none";
}




updateToolTipText();
beginQuizBtn.addEventListener("click", startQuiz);
answersArea.addEventListener("click", answerChosen);
initialsForm.addEventListener("submit", quizWrapUp);
resetHSBtn.addEventListener("click", resetHS);
goBackBtn.addEventListener("click", resetApp);