function updateClockAndGreeting() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Jam digital
  document.getElementById("digitalClock").textContent = `${hours}:${minutes}:${seconds}`;

  // Greeting otomatis
  let greeting = "";
  if (hours >= 4 && hours < 12) greeting = "Selamat Pagi 🌅";
  else if (hours >= 12 && hours < 15) greeting = "Selamat Siang ☀️";
  else if (hours >= 15 && hours < 18) greeting = "Selamat Sore 🌇";
  else greeting = "Selamat Malam 🌙";

  document.getElementById("greeting").textContent = greeting;
}

// Update setiap detik
setInterval(updateClockAndGreeting, 1000);
updateClockAndGreeting();

// ==============================
// 2. Efek ketik dengan Typed.js
// ==============================

// Nama
var typedName = new Typed('#typed-name', {
  strings: ["Fuujin Kisuke"],
  typeSpeed: 80,
  backSpeed: 40,
  loop: false
});

// ==============================
// 3. Efek muncul dari bawah (reveal on scroll)
// ==============================
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  
  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;
    
    // Jika elemen masuk area tampilan, munculkan
    if (elementTop < windowHeight - 100 && elementBottom > 0) {
      el.classList.add("active");
    } else {
      el.classList.remove("active"); // bisa dikomentari kalau mau tetap muncul
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  revealOnScroll(); // aktifkan elemen yang sudah terlihat
});
