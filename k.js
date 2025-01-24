document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Hover Effects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
});

// Dynamic Skill Highlight
const skills = document.querySelectorAll('.skill-tag');
skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.backgroundColor = '#0056b3';
    });

    skill.addEventListener('mouseout', () => {
        skill.style.backgroundColor = '#007bff';
    });
});

// Optional: Age Calculator or Dynamic Years of Experience
function calculateExperience() {
    const startDate = new Date('2022-01-01'); // Replace with your actual start date
    const currentDate = new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();
    
    document.getElementById('experience-years').textContent = years;
}

// Call on page load
window.onload = calculateExperience;