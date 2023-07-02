document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  // Retrieve the user data from local storage
  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Find the user with matching email and password
  var user = users.find(function(user) {
    return user.email === email && user.password === password;
  });

  if (user) {
    // Login successful, store the login status
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "webpage.html";
  } else {
    // Login failed, display an error message
    alert("Invalid email or password.");
  }
  
});


