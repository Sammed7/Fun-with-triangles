const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-area");
const outputBox = document.querySelector("#output");

function calculateArea() { 
    const AreaOfTriangle = 0.5*(Number(sides[0].value) * Number(sides[1].value));
    outputBox.innerText = "The Area of triangle is " + AreaOfTriangle;
}



calculateBtn.addEventListener("click", calculateArea);