const quizForm = document.querySelector("#from-quiz");
const submitBtn = document.querySelector("#submit-answers-btn");
const outputBox =  document.querySelector("#output");

const correctAnswers = ["90°", "right angled"];


function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index++;
    }
    outputBox.innerText = "Your score is" + score;
};

submitBtn.addEventListener("click", calculateScore);
