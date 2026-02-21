/* ==========================================================================
   Heather Liu — Main JavaScript
   Handles: Navigation, Scroll Animations, Portfolio Filters, Form
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Navigation ----------
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    // Scroll state for nav
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    }, { passive: true });

    // Mobile toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('open');
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });

        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ---------- Scroll Animations ----------
    const animateElements = document.querySelectorAll('[data-animate]');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        animateElements.forEach(el => observer.observe(el));
    } else {
        // Fallback: just show everything
        animateElements.forEach(el => el.classList.add('visible'));
    }

    // ---------- Portfolio Filters ----------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;

                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Filter items
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.classList.remove('hidden');
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(16px)';
                        requestAnimationFrame(() => {
                            item.style.transition = 'all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        });
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }

    // ---------- Contact Form ----------
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Show a nice confirmation (placeholder - replace with actual form handler)
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Message Sent!';
            btn.style.background = 'var(--color-accent)';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.disabled = false;
                contactForm.reset();
            }, 3000);

            // Log for development
            console.log('Form submitted:', data);
        });
    }

    // ---------- Smooth Scroll for anchor links ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ---------- Page Load Animation ----------
    document.body.classList.add('loaded');
});
