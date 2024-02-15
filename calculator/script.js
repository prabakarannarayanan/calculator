
let currentInput = '';
let operator = '';
let result = 0;

function appendToDisplay(value) {
  document.getElementById('display').value += value;
  currentInput += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
  currentInput = '';
}

function operate(op) {
  if (currentInput !== '') {
    operator = op;
    result = parseFloat(currentInput);
    clearDisplay();
  }
}

function calculate() {
  if (currentInput !== '') {
    const secondOperand = parseFloat(currentInput);
    switch (operator) {
      case '+':
        result += secondOperand;
        break;
      case '-':
        result -= secondOperand;
        break;
      case '*':
        result *= secondOperand;
        break;
      case '/':
        if (secondOperand !== 0) {
          result /= secondOperand;
        } else {
          result = 'Error';
        }
        break;
    }
    document.getElementById('display').value = result;
    currentInput = '';
  }
}
