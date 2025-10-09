// Greeting otomatis
const greetingEl = document.getElementById("greeting");
const hour = new Date().getHours();
if(hour >= 5 && hour < 12) greetingEl.textContent = "Selamat Pagi";
else if(hour >= 12 && hour < 15) greetingEl.textContent = "Selamat Siang";
else if(hour >= 15 && hour < 18) greetingEl.textContent = "Selamat Sore";
else greetingEl.textContent = "Selamat Malam";

// Animasi scroll: highlight section yang terlihat
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
