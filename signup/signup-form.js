// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("signupForm");
//   const nameInput = document.getElementById("name");
//   const emailInput = document.getElementById("email");
//   const passwordInput = document.getElementById("password");
//   const privacyCheckbox = document.getElementById("privacy");

//   // Form validation
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Reset validation states
//     clearValidation();

//     // Validate inputs
//     let isValid = true;

//     if (!validateName(nameInput.value)) {
//       markInputError(nameInput, "Please enter a valid name");
//       isValid = false;
//     }

//     if (!validateEmail(emailInput.value)) {
//       markInputError(emailInput, "Please enter a valid email");
//       isValid = false;
//     }

//     if (!validatePassword(passwordInput.value)) {
//       markInputError(passwordInput, "Password must be at least 8 characters");
//       isValid = false;
//     }

//     if (!privacyCheckbox.checked) {
//       alert("Please agree with the Privacy Policy");
//       isValid = false;
//     }

//     if (isValid) {
//       handleFormSubmit();
//     }
//   });

//   // Real-time validation
//   nameInput.addEventListener("blur", function () {
//     if (this.value && validateName(this.value)) {
//       markInputSuccess(this);
//     } else if (this.value) {
//       markInputError(this);
//     }
//   });

//   emailInput.addEventListener("blur", function () {
//     if (this.value && validateEmail(this.value)) {
//       markInputSuccess(this);
//     } else if (this.value) {
//       markInputError(this);
//     }
//   });

//   passwordInput.addEventListener("blur", function () {
//     if (this.value && validatePassword(this.value)) {
//       markInputSuccess(this);
//     } else if (this.value) {
//       markInputError(this);
//     }
//   });

//   // Clear validation on input
//   [nameInput, emailInput, passwordInput].forEach((input) => {
//     input.addEventListener("input", function () {
//       this.classList.remove("error", "success");
//     });
//   });
// });

// /**
//  * Validation Functions
//  */

// function validateName(name) {
//   return name.trim().length >= 2;
// }

// function validateEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// function validatePassword(password) {
//   return password.length >= 8;
// }

// /**
//  * UI Helper Functions
//  */

// function markInputError(input, message = "Invalid input") {
//   input.classList.add("error");
//   input.classList.remove("success");
// }

// function markInputSuccess(input) {
//   input.classList.add("success");
//   input.classList.remove("error");
// }

// function clearValidation() {
//   document.querySelectorAll(".form-input").forEach((input) => {
//     input.classList.remove("error", "success");
//   });
// }

// /**
//  * Form Submission Handler
//  */

// function handleFormSubmit() {
//   const form = document.getElementById("signupForm");
//   const submitBtn = document.querySelector(".submit-btn");

//   // Disable button and show loading state
//   submitBtn.disabled = true;
//   submitBtn.textContent = "Creating Account...";

//   // Get form data
//   const formData = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     password: document.getElementById("password").value,
//   };

//   // Simulate API call
//   setTimeout(() => {
//     console.log("Form submitted with data:", formData);

//     // Success message
//     alert("Account created successfully!");

//     // Reset form
//     form.reset();

//     // Re-enable button
//     submitBtn.disabled = false;
//     submitBtn.textContent = "CREATE ACCOUNT";

//     // Clear validation states
//     clearValidation();
//   }, 1500);
// }

// /**
//  * Social Login Handlers
//  */

// document.querySelectorAll(".social-btn").forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     e.preventDefault();

//     const provider = this.classList.contains("github-btn")
//       ? "GitHub"
//       : "Google";

//     console.log(`Signing up with ${provider}...`);
//     alert(`Sign up with ${provider} functionality would be implemented here`);

//     // In a real app, you would redirect to:
//     // GitHub: window.location.href = '/auth/github';
//     // Google: window.location.href = '/auth/google';
//   });
// });
