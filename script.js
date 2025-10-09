// Jam digital
function updateClock() {
  const clockEl = document.getElementById("digital-clock");
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Tambahkan nol di depan jika < 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clockEl.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update setiap detik
setInterval(updateClock, 1000);
updateClock(); // jalankan langsung saat load

// Greeting otomatis
const greetingEl = document.getElementById("greeting");
const hour = new Date().getHours();
let greetingText = "Selamat Pagi";

if (hour >= 4 && hour < 10) {
    greetingText = "Selamat Pagi";
} else if (hour >= 10 && hour < 15) {
    greetingText = "Selamat Siang";
} else if (hour >= 15 && hour < 18) {
    greetingText = "Selamat Sore";
} else {
    greetingText = "Selamat Malam";
}

greetingEl.textContent = greetingText;
