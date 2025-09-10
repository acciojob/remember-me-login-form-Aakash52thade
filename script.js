// Elements
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");
const form = document.getElementById("loginForm");

// Ensure existing button visibility reflects storage on page load
if (localStorage.getItem("username") && localStorage.getItem("password")) {
  existing.style.display = "inline-block";
} else {
  existing.style.display = "none";
}

// Handle form submit (Enter key + clicking Submit)
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const u = username.value;
  const p = password.value;

  // Required alert text
  alert(`Logged in as ${u}`);

  if (checkbox.checked) {
    // Tests expect separate keys "username" and "password"
    localStorage.setItem("username", u);
    localStorage.setItem("password", p);
    existing.style.display = "inline-block";
  } else {
    // If "Remember Me" unchecked, remove any saved credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existing.style.display = "none";
  }
});

// Login as existing user behaviour
existing.addEventListener("click", function () {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  } else {
    // defensive: hide if nothing saved
    existing.style.display = "none";
  }
});
