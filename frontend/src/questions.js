const questionP = document.getElementById('question')
const answerContainer = document.getElementById('answer-container')
const nextBtn = document.getElementById('next')

var question_id

fetch(`https://learnifybackend-wvnw.onrender.com/users/currentq/`, {
    headers: {
        authorization: localStorage.getItem("token")
    }
})
.then((data) => data.json())
.then((response) => {
    question_id = data.question_id
    questionP.innerHTML = response.question

    answerContainer.children[0].innerHTML = answerContainer.children[0].innerHTML + response.option_a
    answerContainer.children[1].innerHTML = answerContainer.children[1].innerHTML + response.option_b
    answerContainer.children[2].innerHTML = answerContainer.children[2].innerHTML + response.option_c
    answerContainer.children[3].innerHTML = answerContainer.children[3].innerHTML + response.option_d
})

const submitAnswer = () => {
    const checkRadio = document.querySelector('input[name="answer"]:checked');
    if(checkRadio === undefined) {
        return
    } else{
        fetch(`https://learnifybackend-wvnw.onrender.com/questions/${question_id}/correct`)
        .then(data => data.json())
        .then(questionAnswer => {
            console.log("Q ans: ", questionAnswer)
            console.log("Check Radio: ", checkRadio.textContent)
            if(checkRadio === questionAnswer){

            }
            /*
            fetch(`https://learnifybackend-wvnw.onrender.com/update-points`, {
                method: "POST", //GET??
                headers: {
                    authorization: localStorage.getItem("token"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })*/
        })
    }
}

addEventListener('click', submitAnswer)