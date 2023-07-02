function submitForm() {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  var email = document.querySelector("#mail").value;
  var fname = document.querySelector("#f-name").value;
  var lname = document.querySelector("#l-name").value;
  var password = document.querySelector('#user-password').value;
  var confirmPassword = document.querySelector('#user-password-confirm').value;
  var phone = document.querySelector('#phone').value;

  // Check if the passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return; // Exit the function
  }

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
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      phone: phone
    };

    // Add the new user to the array
    users.push(newUser);

    // Update the user data in local storage
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect the user to the login page
    window.location.href = "webpage.html";
  }
}

  