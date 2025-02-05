const questionP = document.querySelector("#question");
const answerContainer = document.querySelector("#answer-container");
const questionSection = document.querySelector("#question-and-answer");

const timer = document.createElement("div");
timer.id = "timer";
timer.textContent = "10";
document.body.insertBefore(timer, questionSection);

let time = 10;
let timerInterval;

document.addEventListener("DOMContentLoaded", fetchQuestion);

async function fetchQuestion() {
    try {
        console.log("Fetching question...");
        const response = await fetch("https://learnifybackend-wvnw.onrender.com/users/currentq/", {
            headers: { authorization: localStorage.getItem("token") }
        });

        if (!response.ok) throw new Error("Failed to fetch question");

        const data = await response.json();

        console.log("Fetched question data:", data);

        if (!data.question) {
            window.location.href = 'mystery.html';
        } else {
            questionP.textContent = data.question;

            const options = ["a", "b", "c", "d"];
            options.forEach((option, index) => {
                answerContainer.children[index].innerHTML = `<input type="radio" name="question" value="${option}"> ${data["option_" + option]}`;
            });

            startTimer();
        }
    } catch (error) {
        console.error("Error fetching question:", error);
        questionP.textContent = "Failed to load question!";
    }
}

function startTimer() {
    clearInterval(timerInterval);
    time = 10;
    timer.textContent = time;

    timerInterval = setInterval(() => {
        time--;
        timer.textContent = time;
        if (time <= 0) {
            clearInterval(timerInterval);
            fetchQuestion(); 
        }
    }, 1000);
}