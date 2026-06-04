  // Additional JavaScript for reservation page
    document.addEventListener('DOMContentLoaded', function() {
      // Set minimum date to today
      const dateInput = document.getElementById('date');
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      dateInput.min = formattedDate;
      
      // Set maximum date to 30 days from today
      const maxDate = new Date();
      maxDate.setDate(today.getDate() + 30);
      const formattedMaxDate = maxDate.toISOString().split('T')[0];
      dateInput.max = formattedMaxDate;
      
      // Form submission
      const reservationForm = document.getElementById('reservation-form');
      reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would send the form data to a server
        // For this example, we'll just show an alert
        alert('Thank you for your reservation! We will contact you shortly to confirm your booking.');
        reservationForm.reset();
      });
    });