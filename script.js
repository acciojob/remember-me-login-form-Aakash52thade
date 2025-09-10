// Elements
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const btn = document.getElementById("submit");
const existing = document.getElementById("existing");
const form = document.getElementById("loginForm");

// Helper: show/hide existing button based on storage
function updateExistingButtonVisibility() {
  if (localStorage.getItem("user")) {
    existing.style.display = "inline-block";
  } else {
    existing.style.display = "none";
  }
}

// On page load, ensure the existing button visibility is correct
updateExistingButtonVisibility();

// Handle form submit (works for clicking submit button or pressing Enter)
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userObj = {
    username: username.value.trim(),
    password: password.value // NOTE: storing passwords in localStorage is insecure, but OK for this exercise/test
  };

  // Required alert on submit
  alert(`Logged in as ${userObj.username}`);

  if (checkbox.checked) {
    // Save credentials
    localStorage.setItem("user", JSON.stringify(userObj));
  } else {
    // Remove previously stored credentials
    localStorage.removeItem("user");
  }

  // ensure existing button visibility matches current storage
  updateExistingButtonVisibility();
});

// "Login as existing user" button behaviour
existing.addEventListener("click", function () {
  const stored = localStorage.getItem("user");
  if (stored) {
    const saved = JSON.parse(stored);
    alert(`Logged in as ${saved.username}`);
  } else {
    // Defensive: hide button if somehow clicked when no user exists
    updateExistingButtonVisibility();
  }
});
