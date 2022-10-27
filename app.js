var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var CheckBtn = document.querySelector("#check-btn");
var outputBox = document.querySelector(".output");



CheckBtn.addEventListener('click', checkForTriangle = () => {
    var angleOne = angle1.value;
    var angleTwo = angle2.value;
    var angleThree = angle3.value;
    var sumOfAngles =  Number(angleOne) + Number(angleTwo) + Number(angleThree);

    if(sumOfAngles == 180) {
        outputBox.innerText = "Yes! the angels form a Triangle";
    }
    else {
        outputBox.innerText = "No! the angels don't form a Triangle!";
    }
});

