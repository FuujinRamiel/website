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

// Efek muncul dari bawah saat di-scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  revealOnScroll(); // langsung aktifin yang udah kelihatan
});
