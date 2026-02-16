  // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    document.addEventListener('DOMContentLoaded', function() {
      const animatedElements = document.querySelectorAll(
        '.animate-on-scroll, .animate-left, .animate-right, .animate-scale, .animate-fade-in, .animate-stagger'
      );
      
      animatedElements.forEach(el => {
        observer.observe(el);
      });

      // Mobile menu toggle functionality
      const menuToggle = document.querySelector('.menu-toggle');
      const nav = document.querySelector('nav');
      
      menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && !event.target.closest('.menu-toggle')) {
          nav.classList.remove('active');
        }
      });

      // Back to top functionality
      const backToTopButton = document.getElementById('backToTop');
      
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
          backToTopButton.style.display = 'flex';
        } else {
          backToTopButton.style.display = 'none';
        }
      });
      
      backToTopButton.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      // Newsletter form submission
      const newsletterForm = document.querySelector('.newsletter-form');
      if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const emailInput = this.querySelector('.newsletter-input');
          alert(`Thank you for subscribing with ${emailInput.value}! You'll receive our newsletter soon.`);
          emailInput.value = '';
        });
      }

      // CTA buttons functionality
      const ctaButtons = document.querySelectorAll('.cta-btn');
      ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
          if (this.classList.contains('primary')) {
            window.location.href = 'reservation.html';
          } else {
            window.location.href = 'menu.html';
          }
        });
      });
    });