function validateForm() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  let isValid = true;

  // Check if email is valid
  if (!isValidEmail(emailInput.value)) {
    emailError.innerHTML = "Please enter a valid email address";
    isValid = false;
  } else {
    emailError.innerHTML = "";
  }

  // Login.js

function login(email, password) {
  // Get input data from localStorage
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  // Check if input email and password match stored email and password
  if (email === storedEmail && password === storedPassword) {
    return true;
  } else {
    return false;
  }
}

  // Check if password is valid
  if (passwordInput.value.trim() === "") {
    passwordError.innerHTML = "Please enter your password";
    isValid = false;
  } else {
    passwordError.innerHTML = "";
  }

  if (isValid) {
    window.location.href = "index.html";
  }

  return isValid;
}

// get input elements from the login form
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// get input data from localStorage
const email = localStorage.getItem('email');
const password = localStorage.getItem('password');

// pre-fill login form with input data
if (email && password) {
  emailInput.value = email;
  passwordInput.value = password;
}

// Validate email using regular expression
function isValidEmail(email) {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

// validate the login form on submit
function validateForm() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === '') {
    displayErrorMessage('Please enter your email.');
    return false;
  }

  if (!isValidEmail(email)) {
    displayErrorMessage('Please enter a valid email.');
    return false;
  }

  if (password === '') {
    displayErrorMessage('Please enter your password.');
    return false;
  }

  if (!login(email, password)) {
    displayErrorMessage('Invalid email or password.');
    return false;
  }

  // If login is successful, change the URL to the index page
  window.location.href = 'index.html';
  return true;
}



// display error message to user
function displayErrorMessage(message) {
  const errorMessage = document.getElementById('error-message');
  errorMessage.innerHTML = message;
  errorMessage.style.display = 'block';
}
