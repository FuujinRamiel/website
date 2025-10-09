// script.js atau di bawah body sebelum </body>
const greetingEl = document.getElementById("greeting");
const now = new Date();
const hour = now.getHours();
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
