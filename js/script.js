const celsiusInput = document.getElementById('celsius');
const fahrenheitOutput = document.getElementById('fahrenheit');
const formulaOutput = document.getElementById('formula');
const convertBtn = document.getElementById('convert');
const reverseBtn = document.getElementById('reverse');
let isReversed = false;

// fungsi untuk mengonversi suhu
function convertTemperature() {
  const value = parseFloat(celsiusInput.value.trim());
  if (isNaN(value)) {
    fahrenheitOutput.value = '';
    formulaOutput.value = '';
    showAlertPopup("Silakan masukkan angka suhu terlebih dahulu!");
    return;
  }

  if (!isReversed) {
    const fahrenheit = (value * 9 / 5) + 32;
    fahrenheitOutput.value = fahrenheit.toFixed(2);
    formulaOutput.value = `${value}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    if (value === 100) {
      showPopup("Air mendidih pada suhu 100°C🌡️", "💧", "100°C");
    }
  } else {
    const celsius = (value - 32) * 5 / 9;
    fahrenheitOutput.value = celsius.toFixed(2);
    formulaOutput.value = `${value}°F - 32 × (5/9) = ${celsius.toFixed(2)}°C`;
    if (value === 212) {
      showPopup("Air mendidih pada suhu 212°F🌡️", "🔥", "212°F");
    }
  }
}

convertBtn.addEventListener('click', convertTemperature);

document.getElementById('reset').addEventListener('click', () => {
  celsiusInput.value = '';
  fahrenheitOutput.value = '';
  formulaOutput.value = '';
});

reverseBtn.addEventListener('click', () => {
  isReversed = !isReversed;
  const inputLabel = document.getElementById('input-label');
  const outputLabel = document.getElementById('output-label');

  if (isReversed) {
    inputLabel.textContent = 'Fahrenheit (°F):';
    outputLabel.textContent = 'Celsius (°C):';
    convertBtn.textContent = 'Konversi ke Celsius';
  } else {
    inputLabel.textContent = 'Celsius (°C):';
    outputLabel.textContent = 'Fahrenheit (°F):';
    convertBtn.textContent = 'Konversi ke Fahrenheit';
  }

  celsiusInput.value = '';
  fahrenheitOutput.value = '';
  formulaOutput.value = '';
});

// Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-dark');
const btnIcon = toggleBtn.querySelector('.btn-icon');
const btnText = toggleBtn.querySelector('.btn-text');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    btnIcon.textContent = '☀️';
    btnText.textContent = 'Light Mode';
  } else {
    btnIcon.textContent = '🌙';
    btnText.textContent = 'Dark Mode';
  }
});

// Typing Effect
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

// Suara klik tombol
const sound = document.getElementById('click-sound');
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play();
  });
});

// Pop-Up Easter Egg
function showPopup(message, emoji = "🎉", title = "Titik Didih Air!") {
  const popup = document.getElementById("popup-card");
  const popupMessage = document.getElementById("popup-message");
  const popupIcon = popup.querySelector(".popup-icon");
  const popupTitle = popup.querySelector(".popup-title");
  const popupSound = document.getElementById("popup-sound");

  popupMessage.textContent = message;
  popupIcon.textContent = emoji;
  popupTitle.textContent = title;

  popup.classList.remove("hidden");

  popupSound.currentTime = 0;
  popupSound.play();
}

document.getElementById("close-popup").addEventListener("click", () => {
  document.getElementById("popup-card").classList.add("hidden");
});

// fungsi untuk menampilkan pesan peringatan
function showAlertPopup(message) {
  const alertPopup = document.getElementById("alert-popup");
  const alertMessage = document.getElementById("alert-message");
  const alertSound = document.getElementById("alert-sound");

  alertMessage.textContent = message;
  alertPopup.classList.remove("hidden");

  // Jalankan animasi shake
  alertPopup.classList.remove("shake"); // reset dulu
  void alertPopup.offsetWidth; // trik paksa reflow agar animasi bisa diulang
  alertPopup.classList.add("shake");

  // Mainkan suara
  alertSound.currentTime = 0;
  alertSound.play();
}


document.getElementById("close-alert").addEventListener("click", () => {
  document.getElementById("alert-popup").classList.add("hidden");
});

document.getElementById("close-alert").addEventListener("click", () => {
  document.getElementById("alert-popup").classList.add("hidden");

  // Menghentikan suara alert
  const alertSound = document.getElementById("alert-sound");
  alertSound.pause();
  alertSound.currentTime = 0;
});
