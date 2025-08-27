
        // Mobile menu toggle
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const nav = document.querySelector('.nav');
            const header = document.querySelector('.header');
            
            mobileMenuBtn.addEventListener('click', function() {
                nav.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
            });

            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav a').forEach(link => {
                link.addEventListener('click', function() {
                    nav.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                });
            });

            // Header scroll effect
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Smooth scrolling for anchor links
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

            // Contact form handling
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(contactForm);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject');
                const message = formData.get('message');
                
                // Simple validation
                if (!name || !email || !subject || !message) {
                    alert('Please fill in all fields.');
                    return;
                }
                
                // Create mailto link
                const mailtoLink = `mailto:fionakaregi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                
                // Open email client
                window.location.href = mailtoLink;
                
                // Show success message
                alert('Thank you for your message! Your email client should open with the pre-filled message.');
                
                // Reset form
                contactForm.reset();
            });

            // Add scroll reveal animation for project cards
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

            // Observe project cards for animation
            document.querySelectorAll('.project-card').forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
                observer.observe(card);
            });

            // Animate skill tags on hover
            document.querySelectorAll('.skill-tags span').forEach(tag => {
                tag.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px) scale(1.05)';
                });
                
                tag.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Add typing effect to hero heading
            const heroHeading = document.querySelector('.hero h1');
            if (heroHeading) {
                const text = heroHeading.textContent;
                heroHeading.textContent = '';
                heroHeading.style.borderRight = '3px solid var(--primary)';
                
                let i = 0;
                function typeWriter() {
                    if (i < text.length) {
                        heroHeading.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    } else {
                        setTimeout(() => {
                            heroHeading.style.borderRight = 'none';
                        }, 1000);
                    }
                }
                
                // Start typing effect after a short delay
                setTimeout(typeWriter, 500);
            }
        });