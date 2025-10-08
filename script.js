document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".container").style.opacity = 0;
  setTimeout(() => {
    document.querySelector(".container").style.transition = "opacity 1.5s";
    document.querySelector(".container").style.opacity = 1;
  }, 300);
});
