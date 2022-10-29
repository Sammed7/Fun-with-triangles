const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate");
const outputBox = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a**2 + b**2;
    console.log(sumOfSquares);
}


function calculateHypotenuse() {
    calculateSumOfSquares(3, 4);
};

calculateBtn.addEventListener("click", calculateHypotenuse);



