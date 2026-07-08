// ============================================================
// 1. LOADING SCREEN
// ============================================================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
});

// ============================================================
// 2. TYPING ANIMATION (for hero name)
// ============================================================
const typedName = document.getElementById('typed-name');
const fullName = 'Anuditya Gautam';
let charIndex = 0;

function typeName() {
    if (charIndex < fullName.length) {
        typedName.textContent += fullName.charAt(charIndex);
        charIndex++;
        setTimeout(typeName, 120);
    }
}
// Start typing after loader fades (approx 0.8s delay)
setTimeout(typeName, 900);

// ============================================================
// 3. SCROLL PROGRESS BAR
// ============================================================
const progressBar = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + '%';
});

// ============================================================
// 4. NAVBAR BLUR EFFECT ON SCROLL
// ============================================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================================
// 5. MOBILE HAMBURGER MENU
// ============================================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// ============================================================
// 6. BACK TO TOP BUTTON
// ============================================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// 7. BUTTON RIPPLE EFFECT
// ============================================================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousedown', function(e) {
        const rect = this.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        this.style.setProperty('--x', x + '%');
        this.style.setProperty('--y', y + '%');
    });
});

// ============================================================
// 8. AOS (Animate On Scroll) INIT
// ============================================================
AOS.init({
    duration: 800,
    once: true,
    offset: 50,
});
