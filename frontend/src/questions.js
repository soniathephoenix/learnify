const response = await fetch(`https://learnifybackend-wvnw.onrender.com/users/currentq/`, {
    headers: {
        authorization: localStorage.getItem("token")
    }
})
const questionP = document.getElementById('question')
const answerContainer = document.getElementById('answer-container')

questionP.innerHTML = response.questionP

answerContainer.children[0].innerHTML = response.option_a
answerContainer.children[1].innerHTML = response.option_b
answerContainer.children[2].innerHTML = response.option_c
answerContainer.children[3].innerHTML = response.option_d