  document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    '.animate-on-scroll, .animate-left, .animate-right, .animate-scale, .animate-fade-in, .animate-stagger'
  );
  
  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // 2. Mobile menu toggle functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
    
    document.addEventListener('click', function(event) {
      if (!event.target.closest('nav') && !event.target.closest('.menu-toggle')) {
        nav.classList.remove('active');
      }
    });
  }

  // 3. Back to top button functionality
  const backToTopButton = document.getElementById('backToTop');
  
  if (backToTopButton) {
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
  }

  // 4. FIX: Correct Full Section Menu Category Filtering
  const categoryButtons = document.querySelectorAll('.category-btn');
  const menuSections = document.querySelectorAll('.menu-section');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Toggle active class on categories
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const selectedCategory = this.getAttribute('data-category');
      
      // Filter whole sections based on category
      menuSections.forEach(section => {
        if (selectedCategory === 'all' || section.getAttribute('id') === selectedCategory) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
      
      // Smooth scroll effect to the active section
      if (selectedCategory !== 'all') {
        const targetSection = document.getElementById(selectedCategory);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // 5. Add to cart alerts & visual feedback
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const item = this.closest('.menu-item');
      const itemName = item.querySelector('.menu-item-title').textContent;
      
      alert(`Added ${itemName} to your cart!`);
      
      this.innerHTML = '<i class="fas fa-check"></i> Added';
      this.style.backgroundColor = '#4CAF50';
      
      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
        this.style.backgroundColor = '#F2360A';
      }, 2000);
    });
  });

  // 6. Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('.newsletter-input');
      alert(`Thank you for subscribing with ${emailInput.value}!`);
      emailInput.value = '';
    });
  }
});