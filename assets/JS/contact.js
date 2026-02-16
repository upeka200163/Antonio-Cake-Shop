  // Additional JavaScript for contact page
    document.addEventListener('DOMContentLoaded', function() {
      // FAQ accordion functionality
      const faqItems = document.querySelectorAll('.faq-item');
      
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
          // Close all other FAQ items
          faqItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
            }
          });
          
          // Toggle current item
          item.classList.toggle('active');
        });
      });
      
      // Form submission
      const contactForm = document.getElementById('contact-form');
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would send the form data to a server
        // For this example, we'll just show an alert
        alert('Thank you for your message! We will get back to you as soon as possible.');
        contactForm.reset();
      });
    });