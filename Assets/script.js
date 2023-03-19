var startButton = document.getElementById('start')
var paragraph = document.getElementById('intro')
var timeEl = document.querySelector("#time");

//starting the quiz
startButton.addEventListener('click', function quizStart() {
    startButton.style.visibility = 'hidden';
    paragraph.style.visibility = 'hidden';
});

//timer
var secondsLeft = 60;
startButton.addEventListener('click', function setTime() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent  = "Time:" + secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
    }
    }, 1000);
})

function sendMessage() {
    timeEl.textContent = " ";

}

setTime();