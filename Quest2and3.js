let prompt = require("prompt-sync")();

//Question:2
function bmi(weight, height) {
    let bmi = weight / (height ** 2);

    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (bmi < 25) {
        console.log("Normal");
    } else if (bmi < 30) {
        console.log("Overweight");
    } else {
        console.log("Obese");
    }
}
let jhon = bmi(65, 5);
let lucy = bmi(65, 6.4);

//Question:3
let userinput = prompt("Please type a number: ");
if (userinput === '') {
    console.log("Please Enter a number! ");
}
else if (userinput == 10) {
    console.log("You win 10 point");
}
else if (userinput == 8) {
    console.log("You win 8 points")
}
else {
    console.log("Not Matched!")
}

