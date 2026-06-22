// Smooth scroll for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

topBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }
        
// ===== FORM SUBMIT =====
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });