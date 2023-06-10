// Get references to the form and its elements
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Handle form submission
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Perform login authentication
  if (username === "admin" && password === "password") {
    alert("Login successful!");
    // Redirect to a new page or perform any necessary actions for successful login
  } else {
    alert("Invalid username or password. Please try again.");
    // Clear the form inputs for retry
    usernameInput.value = "";
    passwordInput.value = "";
    usernameInput.focus();
  }
});
