// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Scroll reveal
function handleReveal() {
  const elements = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// Simple parallax for hero background layers
document.addEventListener("mousemove", (e) => {
  const layers = document.querySelectorAll(".parallax-layer");
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;

  layers.forEach((layer, idx) => {
    const speed = (idx + 1) * 0.01;
    const x = (cx - e.clientX) * speed;
    const y = (cy - e.clientY) * speed;
    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Scroll to top button
const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", () => {
  if (!toTopBtn) return;
  if (window.scrollY > 600) {
    toTopBtn.classList.add("show");
  } else {
    toTopBtn.classList.remove("show");
  }
});


if (toTopBtn) {
  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
