// Typed.js initialization
new Typed('#typed', {
    strings: ["AI/ML Engineer", "Python Developer", "Data Scientist"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    backDelay: 2000
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Skills animation on scroll (fixed version)
let skillsAnimated = false;

const animateSkills = () => {
    if (skillsAnimated) return;
    
    const skills = document.querySelectorAll('.skill-fill');
    const skillsSection = document.getElementById('skills');
    const rect = skillsSection.getBoundingClientRect();
    
    if (rect.top < window.innerHeight - 100) {
        skills.forEach(skill => {
            const width = skill.getAttribute('data-width');
            skill.style.width = width + '%';
        });
        skillsAnimated = true;
    }
};

window.addEventListener('scroll', animateSkills);
animateSkills(); // Check on page load

// Scroll progress bar
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight);
    progressBar.style.transform = `scaleX(${progress})`;
});