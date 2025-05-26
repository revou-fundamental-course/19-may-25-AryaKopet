const celsiusInput = document.getElementById('celsius');
const fahrenheitOutput = document.getElementById('fahrenheit');
const formulaOutput = document.getElementById('formula');

// Tombol Konversi
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

  // 100°C Easter Egg
  if (celsius === 100) {
    showPopup("Air mendidih pada suhu 100°C🌡️", "💧", "100°C");
  }
});

// Tombol Reset
document.getElementById('reset').addEventListener('click', () => {
  celsiusInput.value = '';
  fahrenheitOutput.value = '';
  formulaOutput.value = '';
});

// Tombol Reverse
document.getElementById('reverse').addEventListener('click', () => {
  const f = parseFloat(fahrenheitOutput.value);
  if (isNaN(f)) {
    formulaOutput.value = 'Masukkan Fahrenheit valid untuk dikonversi ke Celsius.';
    return;
  }

  const c = (f - 32) * 5 / 9;
  celsiusInput.value = c.toFixed(2);
  formulaOutput.value = `${f}°F - 32 × (5/9) = ${c.toFixed(2)}°C`;

  // 212°F Easter Egg
  if (f === 212) {
    showPopup("Air mendidih pada suhu 212°F🌡️", "🔥", "212°F");
  }
});

// Efek mengetik di header
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

// Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-dark');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Ganti teks tombol
  if (document.body.classList.contains('dark')) {
    toggleBtn.textContent = '☀️ Light Mode';
  } else {
    toggleBtn.textContent = '🌙 Dark Mode';
  }
});

// Suara klik tombol
const sound = document.getElementById('click-sound');
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play();
  });
});

// Fungsi Tampilkan Popup
function showPopup(message, emoji = "🎉", title = "Titik Didih Air!") {
  const popup = document.getElementById("popup-card");
  const popupMessage = document.getElementById("popup-message");
  const popupIcon = popup.querySelector(".popup-icon");
  const popupTitle = popup.querySelector(".popup-title");

  popupMessage.textContent = message;
  popupIcon.textContent = emoji;
  popupTitle.textContent = title;

  popup.classList.remove("hidden");
}

// Tutup popup
document.getElementById("close-popup").addEventListener("click", () => {
  document.getElementById("popup-card").classList.add("hidden");
});
