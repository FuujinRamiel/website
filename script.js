// ===== Fungsi update jam digital dan greeting =====
function updateClockAndGreeting() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Update jam digital
    const clockEl = document.getElementById('digital-clock');
    if (clockEl) {
        clockEl.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Tentukan greeting
    let greetingText = '';
    if (hours >= 4 && hours < 12) {
        greetingText = 'Selamat Pagi';
    } else if (hours >= 12 && hours < 15) {
        greetingText = 'Selamat Siang';
    } else if (hours >= 15 && hours < 18) {
        greetingText = 'Selamat Sore';
    } else {
        greetingText = 'Selamat Malam';
    }

    const greetingEl = document.getElementById('greeting');
    if (greetingEl) {
        greetingEl.textContent = greetingText;
    }
}

// Jalankan setiap detik
setInterval(updateClockAndGreeting, 1000);

// Jalankan pertama kali agar langsung tampil
updateClockAndGreeting();
