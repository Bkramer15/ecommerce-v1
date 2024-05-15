
//signup form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
  
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form inputs
        const firstName = document.getElementById('fname').value.trim();
        const lastName = document.getElementById('lname').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const email = document.getElementById('email').value.trim();
        const userName = document.getElementById('userName').value.trim();
        const password = document.getElementById('password').value.trim();
  
        // Validation checks
        if (firstName === '' || lastName === '' || phoneNumber === '' || email === '' || userName === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }
  
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        if (!phoneRegex.test(phoneNumber)) {
            alert('Please enter a valid phone number (xxx-xxx-xxxx).');
            return;
        }
  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
  
        // If all validations pass, submit the form
      
          window.location.href="products.html"
    });
  });