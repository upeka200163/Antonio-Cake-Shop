
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

    // Simple category filtering functionality
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // In a real implementation, you would filter the menu items here
        // based on the selected category
    });
    });
    
    // Set minimum date for reservation form to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').min = today;
    
    // Handle reservation form submission
    const reservationForm = document.getElementById('reservation-form');
    reservationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your reservation! We will contact you shortly to confirm your booking.');
    reservationForm.reset();
    });
    
    // Order section functionality
    const deliveryOptions = document.querySelectorAll('.delivery-option');
    const paymentMethods = document.querySelectorAll('.payment-method');
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    const removeBtns = document.querySelectorAll('.remove-btn');
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    // Delivery option selection
    deliveryOptions.forEach(option => {
    option.addEventListener('click', function() {
        deliveryOptions.forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
    });
    });
    
    // Payment method selection
    paymentMethods.forEach(method => {
    method.addEventListener('click', function() {
        paymentMethods.forEach(m => m.classList.remove('selected'));
        this.classList.add('selected');
    });
    });
    
    // Quantity adjustment
    quantityBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const display = this.parentElement.querySelector('.quantity-display');
        let quantity = parseInt(display.textContent);
        
        if (this.textContent === '+') {
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
        cartItem.remove();
        updateCartTotal();
    });
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', function() {
    alert('Thank you for your order! Your food will be prepared and delivered soon.');
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
    });
    
    // Update cart total (simplified version)
    function updateCartTotal() {
    // In a real implementation, this would calculate based on actual prices and quantities
    console.log('Cart updated');
    }
});