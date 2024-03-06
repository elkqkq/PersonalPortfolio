let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    updateDisplay();
}

function appendDecimal() {
    currentInput += '.';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function appendPercentage() {
    try {

        currentInput = (eval(currentInput) / 100).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}


function calculate() {
    try {
        currentInput = eval(currentInput);
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}
