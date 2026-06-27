// ==================== LOADING SCREEN ==================== 
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.pointerEvents = 'none';
    }, 2200);
});

// ==================== TYPING ANIMATION ====================
const typingText = document.getElementById('typingText');
const textArray = ['Balkrishna Kashid', 'Biotechnology Professional', 'Research Enthusiast'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = textArray[textIndex];

    if (!isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeText, 2000);
            return;
        }
    } else {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeText, 500);
            return;
        }
    }

    setTimeout(typeText, isDeleting ? 50 : 100);
}

typeText();

// ==================== CUSTOM CURSOR ====================
const cursor = document.getElementById('cursor');
const cursorGlow = document.getElementById('cursorGlow');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// Cursor style on hover
document.addEventListener('mouseover', (e) => {
    if (e.target.matches('a, button, input, textarea')) {
        cursor.style.borderColor = 'var(--accent-purple)';
        cursorGlow.style.background = 'radial-gradient(circle, rgba(157, 78, 221, 0.3) 0%, transparent 70%)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.matches('a, button, input, textarea')) {
        cursor.style.borderColor = 'var(--accent-cyan)';
        cursorGlow.style.background = 'radial-gradient(circle, rgba(0, 217, 255, 0.2) 0%, transparent 70%)';
    }
});

// ==================== NAVIGATION ====================
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.skill-category, .project-card, .strength-card, .experience-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});

// ==================== SKILL PROGRESS ANIMATION ====================
const skillProgress = document.querySelectorAll('.skill-progress');

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.8s ease-out forwards';
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

skillProgress.forEach(progress => {
    progressObserver.observe(progress);
});

// ==================== PARTICLE GENERATION ====================
function createParticles() {
    const particleContainer = document.getElementById('particleContainer');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 3 + 1) + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = Math.random() > 0.5 
            ? 'rgba(0, 217, 255, 0.5)' 
            : 'rgba(157, 78, 221, 0.5)';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 100 + 'px');

        particleContainer.appendChild(particle);
    }
}

createParticles();

// ==================== SCROLL TO TOP ====================
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
        const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea[placeholder="Your Message"]').value;

        // Create mailto link
        const mailtoLink = `mailto:balkrushna.kashid11@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form
        contactForm.reset();
    });
}

// ==================== RESUME DOWNLOAD ====================
const resumeBtn = document.getElementById('resumeBtn');

if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
        // Create a simple resume download
        // In a real scenario, you would have an actual PDF file
        alert('Resume download functionality would be implemented here.\n\nContact: balkrushna.kashid11@gmail.com');
    });
}

// ==================== SMOOTH SCROLL ====================
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

// ==================== PROFILE IMAGE HANDLING ====================
// Since we can't directly embed the image, we'll create a placeholder
// Users should replace 'profile.jpg' with the actual path to their image

function initProfileImages() {
    const profileImages = document.querySelectorAll('.profile-img, .about-profile-img');
    
    profileImages.forEach(img => {
        // Create an error handler for when the image doesn't exist
        img.addEventListener('error', function() {
            // Create a placeholder with initials
            const canvas = document.createElement('canvas');
            canvas.width = 400;
            canvas.height = 400;
            const ctx = canvas.getContext('2d');
            
            // Create gradient background
            const gradient = ctx.createLinearGradient(0, 0, 400, 400);
            gradient.addColorStop(0, '#9d4edd');
            gradient.addColorStop(1, '#00d9ff');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 400, 400);
            
            // Add initials
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 120px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('BK', 200, 200);
            
            this.src = canvas.toDataURL();
            this.style.backgroundColor = 'rgba(0, 217, 255, 0.1)';
        });
    });
}

initProfileImages();

// ==================== TILT EFFECT FOR PROJECT CARDS ====================
const projectCards = document.querySelectorAll('[data-tilt]');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 5;
        const rotateY = ((centerX - x) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// ==================== COUNTER ANIMATION ====================
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(current);
        }
    }, 30);
}

// ==================== STAT CARD ANIMATION ====================
const statCards = document.querySelectorAll('.stat-card');

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target.querySelector('.stat-number');
            const text = number.textContent;
            const numValue = parseFloat(text);
            
            if (!isNaN(numValue) && numValue > 1) {
                animateCounter(number, numValue);
            }
            
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statCards.forEach(card => {
    statObserver.observe(card);
});

// ==================== MAGNETIC BUTTON EFFECT ====================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty('--mouse-x', x + 'px');
        button.style.setProperty('--mouse-y', y + 'px');
    });
});

// ==================== SCROLL PROGRESS INDICATOR ====================
function updateScrollProgress() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / scrollHeight) * 100;

    // You can add a progress bar here if desired
}

window.addEventListener('scroll', updateScrollProgress);

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }
});

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==================== ACCESSIBILITY ====================
// Add focus visible for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ==================== THEME DETECTION ====================
// Check for system dark mode preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.style.colorScheme = 'dark';
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all animations and interactions
    console.log('Portfolio initialized successfully');
});

// ==================== SMOOTH PARALLAX EFFECT ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    parallaxElements.forEach(el => {
        const speed = el.dataset.parallax || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== SECTION TRANSITION ANIMATION ====================
function observeSections() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        observer.observe(section);
    });
}

observeSections();

// ==================== LINK HOVER EFFECT ====================
document.querySelectorAll('a:not([href^="#"])').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ==================== FORM VALIDATION ====================
const formInputs = document.querySelectorAll('input, textarea');

formInputs.forEach(input => {
    input.addEventListener('invalid', (e) => {
        e.preventDefault();
        input.style.borderColor = '#ff006e';
    });

    input.addEventListener('input', () => {
        if (input.checkValidity()) {
            input.style.borderColor = 'rgba(0, 217, 255, 0.2)';
        }
    });
});

// ==================== ACTIVE NAV LINK ====================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add active class styles
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--accent-cyan);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ==================== MOBILE OPTIMIZATION ====================
// Detect touch device
function isTouchDevice() {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
}

if (isTouchDevice()) {
    document.body.classList.add('touch-device');
    // Disable hover effects on touch devices
    const hoverStyle = document.createElement('style');
    hoverStyle.textContent = `
        @media (hover: none) {
            .btn:hover,
            .social-icon:hover,
            .stat-card:hover,
            .project-card:hover,
            .strength-card:hover {
                transform: none;
            }
        }
    `;
    document.head.appendChild(hoverStyle);
}

// ==================== PRINT STYLESHEET ====================
const printStyle = document.createElement('style');
printStyle.media = 'print';
printStyle.textContent = `
    .background-container,
    .cursor,
    .cursor-glow,
    .navbar,
    .scroll-indicator,
    .scroll-to-top,
    .footer {
        display: none !important;
    }
    
    body {
        background: white;
        color: black;
    }
    
    section {
        page-break-inside: avoid;
        background: none !important;
    }
`;
document.head.appendChild(printStyle);

// ==================== DYNAMIC IMPORTS ====================
// Lazy load images
const images = document.querySelectorAll('img');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ==================== ERROR HANDLING ====================
window.addEventListener('error', (event) => {
    console.error('An error occurred:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

// ==================== PERFORMANCE MONITORING ====================
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime + 'ms');
    });
}

// ==================== FINAL SETUP ====================
console.log('Balkrishna Kashid - Portfolio Website');
console.log('Developed with HTML, CSS, and JavaScript');
console.log('Premium Design with Modern Animations');