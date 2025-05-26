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

  // 🎉 Easter egg jika input 212°F
  if (f === 212) {
    alert("🔥 Tahukah kamu? 212°F adalah titik didih air dalam skala Fahrenheit!");
  } if (celsius === 100) {
  alert("💧 Tahukah kamu? 100°C adalah titik didih air dalam skala Celsius!");
  }
});

// Typing effect header
const typingTarget = document.getElementById('typing-text');
const typingWords = "🌡️ Kalkulator Konversi Suhu";
let typingIndex = 0;

function typeText() {
  if (typingIndex < typingWords.length) {
    typingTarget.textContent += typingWords.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeText, 100);
  }
}
typeText();

// Dark Mode
const toggleBtn = document.getElementById('toggle-dark');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Suara klik tombol
const sound = document.getElementById('click-sound');
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play();
  });
});

// Easter egg: suhu 212
celsiusInput.addEventListener('input', () => {
  if (celsiusInput.value.trim() === "100") {
    formulaOutput.value = "Air mendidih pada 100°C 🌡️";
  }
});

fahrenheitOutput.addEventListener('input', () => {
  if (fahrenheitOutput.value.trim() === "212") {
    alert("Tahukah kamu? 212°F adalah titik didih air di skala Fahrenheit 💧🔥");
  }
});
