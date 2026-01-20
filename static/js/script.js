// ===== TYPING EFFECT =====
const text = "Python | Flask | Web Developer";
let index = 0;
const speed = 80;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}
typeEffect();

// ===== SCROLL BUTTON =====
function scrollToSection() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

// ===== FADE-IN ON SCROLL =====
const sections = document.querySelectorAll('.fade-in, .section');

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
