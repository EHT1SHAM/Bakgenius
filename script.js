document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (cursor && cursorFollower) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(function() {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        document.addEventListener('mousedown', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.7)';
        });
        
        document.addEventListener('mouseup', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    }
    
    // Interactive Cake Designer
    const cakeBase = document.querySelector('.cake-base');
    const cakeFrosting = document.querySelector('.cake-frosting');
    const cakeTopping = document.querySelector('.cake-topping');
    
    // Base options
    const baseOptions = document.querySelectorAll('#base-options .option-button');
    if (baseOptions.length > 0 && cakeBase) {
        baseOptions.forEach(option => {
            option.addEventListener('click', function() {
                baseOptions.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const color = this.getAttribute('data-color');
                cakeBase.style.backgroundColor = color;
            });
        });
    }
    
    // Frosting options
    const frostingOptions = document.querySelectorAll('#frosting-options .option-button');
    if (frostingOptions.length > 0 && cakeFrosting) {
        frostingOptions.forEach(option => {
            option.addEventListener('click', function() {
                frostingOptions.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const color = this.getAttribute('data-color');
                cakeFrosting.style.backgroundColor = color;
            });
        });
    }
    
    // Topping options
    const toppingOptions = document.querySelectorAll('#topping-options .option-button');
    if (toppingOptions.length > 0 && cakeTopping) {
        toppingOptions.forEach(option => {
            option.addEventListener('click', function() {
                toppingOptions.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const color = this.getAttribute('data-color');
                cakeTopping.style.backgroundColor = color;
            });
        });
    }
    
    // AI Design button shake animation
    const aiButton = document.querySelector('.cake-designer .cta-button');
    if (aiButton) {
        aiButton.addEventListener('click', function() {
            this.classList.add('shake');
            setTimeout(() => {
                this.classList.remove('shake');
                alert('AI is generating your custom cake design...');
            }, 500);
        });
    }
    
    // Testimonial slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-testimonial');
    const nextBtn = document.querySelector('.next-testimonial');
    let currentIndex = 0;
    
    function updateSlider() {
        if (testimonialSlider) {
            testimonialSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }
    
    if (prevBtn && nextBtn && testimonials.length > 0) {
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
            updateSlider();
        });
        
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
            updateSlider();
        });
        
        // Auto-rotate testimonials
        setInterval(function() {
            currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
            updateSlider();
        }, 5000);
    }
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! Our team will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
    
    // Scroll animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideElements = document.querySelectorAll('.slide-up');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.style.opacity = 1;
            }
        });
        
        slideElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .footer-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Bakery filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                // Here you would typically filter the bakeries
                // For demo purposes, we'll just show an alert
                alert(`Filtering by: ${this.textContent}`);
            });
        });
    }
});
