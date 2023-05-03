const form = document.querySelector('form');
const nicknameInput = document.getElementById('nickname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const nickNameError = document.getElementById("nicknameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const errorContainer = document.createElement('div');
const errorList = document.createElement('ul');

errorContainer.classList.add('error-container');
errorList.classList.add('error-list');
errorContainer.appendChild(errorList);

form.addEventListener('input', () => {
  validateForm();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateForm()) {
    submitForm();
  }
});

function validateForm() {
  let errors = [];

  // Check if nickname is valid
  if (nicknameInput.value.length < 3) {
    errors.push('Nickname must be at least 3 characters.');
    nickNameError.innerHTML = "Nickname must be at least 3 characters.";
    errorList.appendChild(createErrorListItem("Nickname must be at least 3 characters."));
  } else {
    nickNameError.innerHTML = "";
  }

  // Check if email is valid
  if (!emailInput.checkValidity()) {
    errors.push('Please enter a valid email address.');
    emailError.innerHTML = "Please enter a valid email address.";
    errorList.appendChild(createErrorListItem("Please enter a valid email address."));
  } else {
    emailError.innerHTML = "";
  }

  // Check if password is valid
  if (passwordInput.value.length < 8) {
    errors.push('Password must be at least 8 characters.');
    passwordError.innerHTML = "Password must be at least 8 characters long";
    errorList.appendChild(createErrorListItem("Password must be at least 8 characters long."));
  } else {
    passwordError.innerHTML = "";
  }

  // Check if confirm password matches password
  if (confirmPasswordInput.value !== passwordInput.value) {
    errors.push('Passwords do not match.');
    confirmPasswordError.innerHTML = "Passwords do not match";
    errorList.appendChild(createErrorListItem("Passwords do not match."));
  } else {
    confirmPasswordError.innerHTML = "";
  }

  if (errors.length > 0) {
    displayErrors();
    return false;
  }

  return true;
}

function displayErrors() {
  const existingErrorContainer = document.querySelector('.error-container');

  if (existingErrorContainer) {
    existingErrorContainer.remove();
  }

  document.body.appendChild(errorContainer);
}

function createErrorListItem(message) {
  const li = document.createElement('li');
  li.classList.add('error-item');
  li.textContent = message;
return li;
}

function submitForm() {
// Replace this with your code to submit the form data
alert('Form submitted successfully!');
// สำหรับการเปลี่ยนหน้าไปยังหน้า login.html
window.location.href = 'login.html';

}
