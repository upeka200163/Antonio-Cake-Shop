
// Screen scroll animations (Intersection Observer)
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

document.addEventListener('DOMContentLoaded', function() {
    // Animations apply kirima
    const animatedElements = document.querySelectorAll(
        '.animate-on-scroll, .animate-left, .animate-right, .animate-scale, .animate-fade-in, .animate-stagger'
    );
    animatedElements.forEach(el => observer.observe(el));

    
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('active');
        });
    }
    
    
    document.addEventListener('click', function(event) {
        if (nav && !event.target.closest('nav') && !event.target.closest('.menu-toggle')) {
            nav.classList.remove('active');
        }
    });

    // =========================================================
    const myAccountWrapper = document.getElementById('myAccountWrapper');
    const accountDropdown = document.getElementById('accountDropdown');
    const toggleAuthMode = document.getElementById('toggleAuthMode');
    
    const formTitle = document.getElementById('formTitle');
    const authSubmitBtn = document.getElementById('authSubmitBtn');
    const switchText = document.getElementById('switchText');

    // My Account click කරද්දී dropdown box එක toggle (open/close) වීම
    if (myAccountWrapper && accountDropdown) {
        myAccountWrapper.addEventListener('click', function(e) {
            e.stopPropagation(); 
            accountDropdown.classList.toggle('active');
        });
    }

    
    if (accountDropdown) {
        accountDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    
    document.addEventListener('click', function() {
        if (accountDropdown && accountDropdown.classList.contains('active')) {
            accountDropdown.classList.remove('active');
        }
    });

    
    if (toggleAuthMode && accountDropdown) {
        toggleAuthMode.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            accountDropdown.classList.toggle('register-mode');

            if (accountDropdown.classList.contains('register-mode')) {
                formTitle.textContent = "Create Account";
                authSubmitBtn.textContent = "Register Now";
                switchText.textContent = "Already have an account?";
                toggleAuthMode.textContent = "Login";
            } else {
                formTitle.textContent = "Login";
                authSubmitBtn.textContent = "Login Now";
                switchText.textContent = "New user?";
                toggleAuthMode.textContent = "Create Account";
            }
        });
    }

    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('date');
    if(dateInput) dateInput.min = today;
    
    const reservationForm = document.getElementById('reservation-form');
    if(reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your reservation!');
            reservationForm.reset();
        });
    }
    
    const deliveryOptions = document.querySelectorAll('.delivery-option');
    deliveryOptions.forEach(option => {
        option.addEventListener('click', function() {
            deliveryOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            paymentMethods.forEach(m => m.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    quantityBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const display = this.parentElement.querySelector('.quantity-display');
            let quantity = parseInt(display.textContent);
            if (this.textContent === '+') quantity++;
            else if (this.textContent === '-' && quantity > 1) quantity--;
            display.textContent = quantity;
        });
    });
    
    const removeBtns = document.querySelectorAll('.remove-btn');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.cart-item').remove();
        });
    });
    
    const checkoutBtn = document.querySelector('.checkout-btn');
    if(checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            alert('Thank you for your order!');
        });
    }
    
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }
});