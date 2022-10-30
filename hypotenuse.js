const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate");
const outputBox = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a**2 + b**2;
    return sumOfSquares;
}


function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputBox.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
};

calculateBtn.addEventListener("click", calculateHypotenuse);



