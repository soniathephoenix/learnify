const questionP = document.querySelector("#question");
const answerContainer = document.querySelector("#answer-container");
const nextButton = document.querySelector("#next");

const timer = document.createElement("div");
timer.id = "timer";
timer.textContent = "10";
document.body.insertBefore(timer, document.querySelector("#buttons-section"));

let time = 10;
let timerInterval;
let correctAnswer = '';  
let selectedAnswer = '';
let isProcessing = false;  

document.addEventListener("DOMContentLoaded", fetchQuestion);
nextButton.addEventListener("click", handleNext);

async function fetchQuestion() {
    if (isProcessing) return; 
    isProcessing = true;
    
    try {
        const token = localStorage.getItem("token");
        if (!token) return console.error("No token found, user must log in first.");

        const response = await fetch("https://learnifybackend-wvnw.onrender.com/users/currentq/", {
            headers: { authorization: token }
        });

        if (!response.ok) throw new Error("Failed to fetch question");

        const data = await response.json();
        if (!data.question) {
            window.location.href = 'mystery.html';  
        } else {
            questionP.textContent = data.question;
            correctAnswer = data.correct_answer;
            loadAnswers(data);
            startTimer();
        }
    } catch (err) {
        console.error(error, err);
        questionP.textContent = "Failed to load question!";
    } finally {
        isProcessing = false;
    }
}

function loadAnswers(data) {
    const options = ["a", "b", "c", "d"];
    options.forEach((option, index) => {
        const answerValue = data["option_" + option];
        answerContainer.children[index].innerHTML = `<input type="radio" name="question" value="${answerValue}"> ${answerValue}`;
    });
}

function startTimer() {
    time = 10;
    timer.textContent = time;
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        time--;
        timer.textContent = time;
        if (time <= 0) {
            clearInterval(timerInterval);
            handleNext(); 
        }
    }, 1000);
}

async function handleNext() {
    if (isProcessing) return;  

    const selectedOption = document.querySelector('input[name="question"]:checked');//getting selected ans
    if (!selectedOption) {
        console.log("No selection");
        return;
    }

    selectedAnswer = selectedOption.value;
    console.log("clicked on ", selectedAnswer);
    console.log("right ans ", correctAnswer);

    if (selectedAnswer === correctAnswer) {
        await updatePoints();  
    } else {
        console.log(`Incorrect answer selected. Correct answer was: ${correctAnswer}`);
        alert(`The correct answer is: ${correctAnswer}`); 
    }

    fetchQuestion(); 
}

async function updatePoints() {
    try {
        console.log("wait to update points");
        
        const token = localStorage.getItem("token");
        if (!token) return console.error("No token found, user must log in first.");

        const response = await fetch('https://learnifybackend-wvnw.onrender.com/users/update-points', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token 
            },
            body: JSON.stringify({ login_id: localStorage.getItem('login_id') })
        });

        if (response.ok) {
            const updatedData = await response.json();
            console.log("Points updated:", updatedData);
        } else {
            console.error("Failed to update points.");
        }
    } catch (error) {
        console.error("Error updating points:", error);
    }
}