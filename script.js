let result = document.getElementById('result');

function insertValue(value) {
	if (result.value === '') {
	  result.value = value;
	} else if (result.value.match(/[0-9\.\+\-\*/]/)) {
	  result.value += value;
	} else {
	  return;
	}
  }

function clearResult() {
  result.value = '';
}

function backspace() {
  if (result.value === 'Error') {
    result.value = '';
  }
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    const resultValue = eval(result.value);
    if (isNaN(resultValue)) {
      result.value = 'Error';
    } else {
      result.value = resultValue.toFixed(2); // отображает результат с двумя знаками после запятой
    }
  } catch (error) {
    result.value = 'Error';
  }
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (key === '.') {
    insertValue('.');
  } else if (key === 'Backspace') {
    backspace();
  } else if (key === 'Escape') {
    clearResult();
  } else if (key === 'Enter') {
    calculate();
  } else if (key === '/' || key === '*' || key === '-' || key === '+') {
    insertValue(key);
  } else if (key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9') {
    insertValue(key);
  }
});
