const questionP = document.getElementById('question')
const answerContainer = document.getElementById('answer-container')

fetch(`https://learnifybackend-wvnw.onrender.com/users/currentq/`, {
    headers: {
        authorization: localStorage.getItem("token")
    }
})
.then((data) => data.json())
.then((response) => {

    questionP.innerHTML = response.question

    answerContainer.children[0].innerHTML = answerContainer.children[0].innerHTML + response.option_a
    answerContainer.children[1].innerHTML = answerContainer.children[1].innerHTML + response.option_b
    answerContainer.children[2].innerHTML = answerContainer.children[2].innerHTML + response.option_c
    answerContainer.children[3].innerHTML = answerContainer.children[3].innerHTML + response.option_d
})
