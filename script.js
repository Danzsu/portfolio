// SCROLL REVEAL
function revealOnScroll() {
    document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


// THEME TOGGLE
const toggleBtn = document.getElementById('themeToggle');
let isDark = true;

toggleBtn.onclick = () => {
    isDark = !isDark;
    document.body.classList.toggle("light");
    toggleBtn.textContent = isDark ? "🌙" : "☀️";
};


// PROFILE IMAGE WITH FALLBACK
const img = document.getElementById("profileImage");
img.src = "profile.png";

img.onerror = () => {
    img.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"; // placeholder
};
