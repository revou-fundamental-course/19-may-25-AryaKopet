const celsiusInput = document.getElementById('celsius');
const fahrenheitOutput = document.getElementById('fahrenheit');
const formulaOutput = document.getElementById('formula');

document.getElementById('convert').addEventListener('click', () => {
  const celsius = parseFloat(celsiusInput.value);
  if (isNaN(celsius)) {
    fahrenheitOutput.value = '';
    formulaOutput.value = 'Masukkan angka yang valid!';
    return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  fahrenheitOutput.value = fahrenheit.toFixed(2);
  formulaOutput.value = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
});

document.getElementById('reset').addEventListener('click', () => {
  celsiusInput.value = '';
  fahrenheitOutput.value = '';
  formulaOutput.value = '';
});

document.getElementById('reverse').addEventListener('click', () => {
  const f = parseFloat(fahrenheitOutput.value);
  if (isNaN(f)) {
    formulaOutput.value = 'Masukkan Fahrenheit valid untuk dikonversi ke Celsius.';
    return;
  }

  const c = (f - 32) * 5 / 9;
  celsiusInput.value = c.toFixed(2);
  formulaOutput.value = `${f}°F - 32 × (5/9) = ${c.toFixed(2)}°C`;
});
