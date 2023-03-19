var startButton = document.getElementById('start');
var paragraph = document.getElementById('intro');
var timeEl = document.querySelector("#time");
var quest1 = document.querySelector("quest1");
var right1 = document.querySelector("right1");
var wrong1 = document.querySelector("wrong1");
var quest2 = document.querySelector("quest2");
var right2 = document.querySelector("right2");
var wrong2 = document.querySelector("wrong2");
var quest3 = document.querySelector("quest3");
var right3 = document.querySelector("right3");
var wrong3 = document.querySelector("wrong3");
var quest4 = document.querySelector("quest4");
var right4 = document.querySelector("right4");
var wrong4 = document.querySelector("wrong4");

//hides questions till prompted
window.onload = function Quests() {
document.getElementById("quest1").style.display = 'none';
document.getElementById("quest2").style.display = 'none';
document.getElementById("quest3").style.display = 'none';
document.getElementById("quest4").style.display = 'none';
}

//starting the quiz
startButton.addEventListener('click', function quizStart() {
    startButton.style.display = 'none';
    paragraph.style.display = 'none';
    document.getElementById("quest1").style.display = 'inline-block';
});

//timer
var secondsLeft = 60;
startButton.addEventListener('click', function setTime() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent  = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
    }
    }, 1000);
})

function sendMessage() {
    timeEl.textContent = " ";

}

//first question
document.getElementById("right1").addEventListener("click", Question1)
document.getElementById("wrong1").addEventListener("click", Question1)
document.getElementById("wrong1").addEventListener("click", Question1w)
document.getElementById("right1").addEventListener("click", nextQuest)
document.getElementById("wrong1").addEventListener("click", nextQuest)
function Question1() {
    document.getElementById("quest1").style.display = "none"

};

function Question1w() {
    secondsLeft -= 15;
};

function nextQuest() {
    document.getElementById("quest2").style.display = "inline-block"
};

//second question
document.getElementById("right2").addEventListener("click", Question2)
document.getElementById("wrong2").addEventListener("click", Question2)
document.getElementById("wrong2").addEventListener("click", Question2w)
document.getElementById("right2").addEventListener("click", nextQuest1)
document.getElementById("wrong2").addEventListener("click", nextQuest1)

function Question2() {
    document.getElementById("quest2").style.display = "none"
};

function Question2w() {
    secondsLeft -= 15;
};

function nextQuest1() {
    document.getElementById("quest3").style.display = "inline-block"
};

//third question
document.getElementById("right3").addEventListener("click", Question3)
document.getElementById("wrong3").addEventListener("click", Question3)
document.getElementById("wrong3").addEventListener("click", Question3w)
document.getElementById("right3").addEventListener("click", nextQuest2)
document.getElementById("wrong3").addEventListener("click", nextQuest2)

function Question3() {
    document.getElementById("quest3").style.display = "none"
};

function Question3w() {
    secondsLeft -= 15;
};

function nextQuest2() {
    document.getElementById("quest4").style.display = "inline-block"
};

//fourth question
document.getElementById("right4").addEventListener("click", Question4)
document.getElementById("wrong4").addEventListener("click", Question4)
document.getElementById("wrong4").addEventListener("click", Question4w)
document.getElementById("right4").addEventListener("click", finish)
document.getElementById("wrong4").addEventListener("click", finish)

function Question4() {
    document.getElementById("quest4").style.display = "none"
};

function Question4w() {
    secondsLeft -= 15;
};

function finish() {

};

