document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get the form data
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Retrieve existing user data from local storage or initialize an empty array
    var users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if the email already exists
    var existingUser = users.find(function(user) {
      return user.email === email;
    });
  
    if (existingUser) {
      alert("Email already exists. Please choose a different one.");
    } else {
      // Create a new user object
      var newUser = {
        email: email,
        password: password
      };
  
      // Add the new user to the array
      users.push(newUser);
  
      // Update the user data in local storage
      localStorage.setItem("users", JSON.stringify(users));
  
      // Redirect the user to the login page
      window.location.href = "webpage.html";
    }
  });
  