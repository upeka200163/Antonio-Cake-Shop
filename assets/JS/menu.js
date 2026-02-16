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

      // Menu category filtering
      const categoryButtons = document.querySelectorAll('.category-btn');
      const menuItems = document.querySelectorAll('.menu-item');
      
      categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
          // Remove active class from all buttons
          categoryButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          this.classList.add('active');
          
          const category = this.getAttribute('data-category');
          
          // Show/hide menu items based on category
          menuItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
          
          // Scroll to the appropriate section if not "all"
          if (category !== 'all') {
            const section = document.getElementById(category);
            if (section) {
              window.scrollTo({
                top: section.offsetTop - 120,
                behavior: 'smooth'
              });
            }
          }
        });
      });

      // Add to cart functionality
      const addToCartButtons = document.querySelectorAll('.add-to-cart');
      addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
          const item = this.closest('.menu-item');
          const itemName = item.querySelector('.menu-item-title').textContent;
          const itemPrice = item.querySelector('.menu-item-price').textContent;
          
          // In a real implementation, this would add the item to a cart
          alert(`Added ${itemName} to your cart!`);
          
          // Visual feedback
          this.innerHTML = '<i class="fas fa-check"></i> Added';
          this.style.backgroundColor = '#4CAF50';
          
          setTimeout(() => {
            this.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            this.style.backgroundColor = '#F2360A';
          }, 2000);
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
            window.location.href = 'order.html';
          } else {
            window.location.href = 'reservation.html';
          }
        });
      });

      // Special offer buttons
      const offerButtons = document.querySelectorAll('.offer-btn');
      offerButtons.forEach(button => {
        button.addEventListener('click', function() {
          alert('Special offer added to your cart!');
        });
      });
    });