function calculate() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    const operator = document.getElementById("operator").value;  // Fix here: No need for parseFloat
    
    let result;
    
    if (operator === "Addition") {
        result = firstNumber + secondNumber;
    } else if (operator === "Subtraction") {  // Fixed typo here
        result = firstNumber - secondNumber;
    } else if (operator === "Multiplication") {
        result = firstNumber * secondNumber;
    } else if (operator === "Division") {
        if (secondNumber === 0) {  // Added check for division by zero
            result = "Cannot divide by zero";
        } else {
            result = firstNumber / secondNumber;
        }
    } else {
        result = "Please select a valid operator";
    }

    document.getElementById("result").innerText = "Result: " + result;
}