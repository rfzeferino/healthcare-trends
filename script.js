// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Simple validation
        if (email.trim() === '') {
            alert('Please enter a valid email address');
            return;
        }

        // Show success message
        const originalText = this.querySelector('button').textContent;
        this.querySelector('button').textContent = '✓ Subscribed!';
        
        // Reset form
        this.reset();
        
        // Reset button text after 2 seconds
        setTimeout(() => {
            this.querySelector('button').textContent = originalText;
        }, 2000);
    });
}

// Add animation on scroll for trend cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.trend-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        navbar.style.boxShadow = 'var(--shadow-lg)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Log that the page has loaded
console.log('Healthcare Trends 2026 website loaded successfully!');