// Initialize AOS
AOS.init({
    duration: 1200,
});

// Typed.js for dynamic role text
var typed = new Typed('#typed', {
    strings: ["AI/ML Enthusiast", "Python Developer", "Data Science Learner"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Animate skills bars
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-fill');
    const trigger = window.innerHeight * 0.9;

    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        if(skillTop < trigger) {
            skill.style.width = skill.style.width; // already defined in HTML inline style
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
