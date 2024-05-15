// Function to toggle the menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Fetch data when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  fetchData();
});

// Function to fetch data from JSON file
function fetchData() {
  fetch("products.json")
    .then(response => response.json())
    .then(data => displayData(data.Brands))
    .catch(error => console.error("Error fetching data:", error));
}

// Function to display data
function displayData(brands) {
  const container = document.querySelector(".data-container");

  brands.forEach(item => {
    const dataItem = document.createElement("div");
    dataItem.classList.add('data-item');
    dataItem.innerHTML = `
        <h3>Model: ${item.model}</h3>
        <p>Type: ${item.type}</p>
        <p>Price: $${item.price}</p>
        <p>Description: ${item.description}</p>
        <img src="${item.image}" alt="${item.model}" style="width: 200px; height: 150px;">
    `;
    container.appendChild(dataItem);
  });
}

// Function to allow accordion text to be displayed
const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Function to validate sign-in page
// Function to validate sign-in page
function validateSignIn() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Basic validation
  if (username === '' || password === '') {
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

// Function to handle search functionality
function searchProducts() {
  const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
  const products = document.querySelectorAll('.data-item');

  products.forEach(product => {
      const productName = product.querySelector('h3').innerText.toLowerCase();
      if (productName.includes(searchQuery)) {
          product.style.display = 'block'; // Show matching product
      } else {
          product.style.display = 'none'; // Hide non-matching product
      }
  });
}
