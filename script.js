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

  // You can add more specific validation here, like checking username format, password strength, etc.

  return true;
}

// Attach event listener to sign-in form submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
  if (!validateSignIn()) {
    event.preventDefault(); // Prevent form submission if validation fails
  }
});
