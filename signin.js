// Function to validate sign-in page
function validateSignIn() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
  
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
  
    // Basic validation
    if (username === '' || password === '') {
      // eneters html in the dom if username or password tab is empty
      document.getElementById('username').innerHTML('enter your userName');
      document.getElenentById('passWord').innerHTML('enter your Password');
      alert('Please enter both username and password.');
      return false;
    }
  
    // Check username format (e.g., alphanumeric characters only)
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
      alert('Username can only contain letters and numbers.');
      return false;
    }
  
    // Check password strength (e.g., at least 8 characters with a mix of letters, numbers, and special characters)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return false;
    }
  
    return true;
}

// Event listener for form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Call validateSignIn() function
    if (validateSignIn()) {
      // If validation passes, submit the form
      this.submit();
    }
  });