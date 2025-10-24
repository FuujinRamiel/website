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
// 3. Efek Muncul Saat Scroll
// ==============================
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // panggil langsung biar aktif saat load

// Intro
var typedIntro = new Typed('#typed-intro', {
  strings: ["Welcome"],
  typeSpeed: 80,
  backSpeed: 40,
  loop: false,
  startDelay: 1000
});
