const submitBtn = document.getElementById('mystery-submit')
const input = document.getElementById('mystery-answer')

submitBtn.addEventListener('click', checkAnswer)

function checkAnswer () {
    if(input.value.toLowerCase() === 'singapore') {
        window.location.assign("mysterySolved.html");
    } else {
        window.location.assign("cluesReview.html");
    }
}