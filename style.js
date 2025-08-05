// style.js
window.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const navButtons = slider.querySelector(".nav-buttons");

  // Generate slides from config
  slideData.forEach((slide, index) => {
    const div = document.createElement("div");
    div.className = "slide" + (index === 0 ? " active" : "");
    div.innerHTML = `
      <img class="banner" src="${slide.img}" alt="Slide Image" />
      <div class="text">
        <h2>${slide.title}</h2>
        <p>${slide.desc}</p>
      </div>
    `;
    slider.insertBefore(div, navButtons);
  });

  // Navigation functionality
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  document.getElementById("prevBtn").addEventListener("click", () => {
    slides[current].classList.remove("active");
    current = (current - 1 + slides.length) % slides.length;
    slides[current].classList.add("active");
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  });
});
