var startButton = document.getElementById('start');
var paragraph = document.getElementById('intro');
var timeEl = document.querySelector("#time");
var quest1 = document.querySelector("quest1");
var quest2 = document.querySelector("quest2");
var quest3 = document.querySelector("quest3");
var quest4 = document.querySelector("quest4");


//hides questions till prompted
window.onload = function Quests() {
document.getElementById("quest1").style.display = 'none';
document.getElementById("quest2").style.display = 'none';
document.getElementById("quest3").style.display = 'none';
document.getElementById("quest4").style.display = 'none';
document.getElementById("youLost").style.display = 'none';
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

    if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        sendMessage();
    }
    }, 1000);
})

//Prompts if time runs out
function sendMessage() {
    document.getElementById("quest1").style.display = 'none';
    document.getElementById("quest2").style.display = 'none';
    document.getElementById("quest3").style.display = 'none';
    document.getElementById("quest4").style.display = 'none';
    timeEl.style.display = 'none';
    document.getElementById("youLost").style.display = 'flex';
}

//first question
document.getElementById("right1").addEventListener("click", Question1)
document.getElementById("wrong1").addEventListener("click", Question1)
document.getElementById("wrong1").addEventListener("click", Question1w)
document.getElementById("wrong1a").addEventListener("click", Question1)
document.getElementById("wrong1a").addEventListener("click", Question1w)
document.getElementById("wrong1b").addEventListener("click", Question1)
document.getElementById("wrong1b").addEventListener("click", Question1w)
document.getElementById("right1").addEventListener("click", nextQuest)
document.getElementById("wrong1").addEventListener("click", nextQuest)
document.getElementById("wrong1a").addEventListener("click", nextQuest)
document.getElementById("wrong1b").addEventListener("click", nextQuest)
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
document.getElementById("wrong2a").addEventListener("click", Question2)
document.getElementById("wrong2a").addEventListener("click", Question2w)
document.getElementById("wrong2b").addEventListener("click", Question2)
document.getElementById("wrong2b").addEventListener("click", Question2w)
document.getElementById("right2").addEventListener("click", nextQuest1)
document.getElementById("wrong2").addEventListener("click", nextQuest1)
document.getElementById("wrong2a").addEventListener("click", nextQuest1)
document.getElementById("wrong2b").addEventListener("click", nextQuest1)

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
document.getElementById("wrong3a").addEventListener("click", Question3)
document.getElementById("wrong3a").addEventListener("click", Question3w)
document.getElementById("wrong3b").addEventListener("click", Question3)
document.getElementById("wrong3b").addEventListener("click", Question3w)
document.getElementById("right3").addEventListener("click", nextQuest2)
document.getElementById("wrong3").addEventListener("click", nextQuest2)
document.getElementById("wrong3a").addEventListener("click", nextQuest2)
document.getElementById("wrong3b").addEventListener("click", nextQuest2)

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
document.getElementById("wrong4a").addEventListener("click", Question4)
document.getElementById("wrong4a").addEventListener("click", Question4w)
document.getElementById("wrong4b").addEventListener("click", Question4)
document.getElementById("wrong4b").addEventListener("click", Question4w)
document.getElementById("right4").addEventListener("click", finish)
document.getElementById("wrong4").addEventListener("click", finish)
document.getElementById("wrong3a").addEventListener("click", finish)
document.getElementById("wrong3b").addEventListener("click", finish)

function Question4() {
    document.getElementById("quest4").style.display = "none"
};

function Question4w() {
    secondsLeft -= 15;
};

function finish() {
    if(secondsLeft > 0) {

}};