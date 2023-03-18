var startButton = document.getElementById('start')
var paragraph = document.getElementById('intro')

//starting the quiz
startButton.addEventListener('click', function quizStart() {
    startButton.style.visibility = 'hidden';
    paragraph.style.visibility = 'hidden';
});

//timer