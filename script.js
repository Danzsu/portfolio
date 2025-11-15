/* -------------------------------------------------------
   SCROLL REVEAL ANIMATION
-------------------------------------------------------- */
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    for (let r of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = r.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {
            r.classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* -------------------------------------------------------
   PROFILE IMAGE FALLBACK
-------------------------------------------------------- */
const profileImg = document.getElementById("profileImage");

if (profileImg) {
    profileImg.src = "profile.png";

    profileImg.onerror = () => {
        profileImg.src =
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"; // placeholder
    };
}


/* -------------------------------------------------------
   SMOOTH SCROLL FOR NAV LINKS
-------------------------------------------------------- */

document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});
