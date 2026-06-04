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

      // Cart functionality
      const quantityBtns = document.querySelectorAll('.quantity-btn');
      const removeBtns = document.querySelectorAll('.remove-btn');
      
      // Quantity adjustment
      quantityBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const display = this.parentElement.querySelector('.quantity-display');
          let quantity = parseInt(display.textContent);
          
          if (this.textContent === '+' && quantity < 10) {
            quantity++;
          } else if (this.textContent === '-' && quantity > 1) {
            quantity--;
          }
          
          display.textContent = quantity;
          updateCartTotal();
        });
      });
      
      // Remove item from cart
      removeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const cartItem = this.closest('.cart-item');
          cartItem.style.opacity = '0';
          setTimeout(() => {
            cartItem.remove();
            updateCartTotal();
          }, 300);
        });
      });
      
      // Update cart total
      function updateCartTotal() {
        const cartItems = document.querySelectorAll('.cart-item');
        let subtotal = 0;
        
        cartItems.forEach(item => {
          const priceText = item.querySelector('.cart-item-price').textContent;
          const price = parseFloat(priceText.replace('$', ''));
          const quantity = parseInt(item.querySelector('.quantity-display').textContent);
          subtotal += price * quantity;
        });
        
        const deliveryFee = 3.99;
        const tax = subtotal * 0.08; // 8% tax
        const total = subtotal + deliveryFee + tax;
        
        document.querySelector('.summary-row:nth-child(1) span:last-child').textContent = `$${subtotal.toFixed(2)}`;
        document.querySelector('.summary-row:nth-child(3) span:last-child').textContent = `$${tax.toFixed(2)}`;
        document.querySelector('.summary-row.total span:last-child').textContent = `$${total.toFixed(2)}`;
      }
      
      // Delivery option selection
      const deliveryOptions = document.querySelectorAll('.delivery-option');
      deliveryOptions.forEach(option => {
        option.addEventListener('click', function() {
          deliveryOptions.forEach(opt => opt.classList.remove('selected'));
          this.classList.add('selected');
        });
      });
      
      // Payment method selection
      const paymentMethods = document.querySelectorAll('.payment-method');
      paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
          paymentMethods.forEach(m => m.classList.remove('selected'));
          this.classList.add('selected');
        });
      });
      
      // Continue shopping buttons
      const continueShoppingBtns = document.querySelectorAll('.continue-shopping');
      continueShoppingBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          window.location.href = 'menu.html';
        });
      });
      
      // Checkout button
      const checkoutBtn = document.querySelector('.checkout-btn');
      checkoutBtn.addEventListener('click', function() {
        // In a real implementation, this would validate the form and process payment
        // For this demo, we'll just show the confirmation modal
        document.getElementById('confirmation-modal').style.display = 'flex';
      });
      
      // Modal functionality
      const modal = document.getElementById('confirmation-modal');
      const modalOkBtn = document.getElementById('modal-ok-btn');
      
      modalOkBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        // Redirect to home page
        window.location.href = 'index.html';
      });
      
      // Close modal when clicking outside
      window.addEventListener('click', function(event) {
        if (event.target === modal) {
          modal.style.display = 'none';
          window.location.href = 'index.html';
        }
      });
      
      // Place order button
      const placeOrderBtn = document.getElementById('place-order-btn');
      placeOrderBtn.addEventListener('click', function() {
        // Validate form
        const requiredFields = document.querySelectorAll('input[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = 'red';
          } else {
            field.style.borderColor = '#ddd';
          }
        });
        
        if (isValid) {
          document.getElementById('confirmation-modal').style.display = 'flex';
        } else {
          alert('Please fill in all required fields.');
        }
      });
    });