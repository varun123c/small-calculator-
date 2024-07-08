let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(expression);
  } catch (error) {
    display.value = 'Error';
  }
}
