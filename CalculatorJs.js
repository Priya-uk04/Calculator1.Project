let display = document.getElementById('display');
let memoryValue = 0;

function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateSquareRoot() {
  try {
    let result = Math.sqrt(eval(display.value));
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function addToMemory() {
  memoryValue = eval(display.value);
}

function recallMemory() {
  display.value += memoryValue;
}


