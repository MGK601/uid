'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');

const navBar = document.querySelector('.navbar');

// --- open menu ---
bxMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('bx-menu')) {
    navBar.classList.add('show-navbar');
    bxMenu.classList.add('hide-bx');
    bxX.classList.add('show-bx');
  }
});

// --- close menu ---
bxX.addEventListener('click', (e) => {
  if (e.target.classList.contains('bx-x')) {
    navBar.classList.remove('show-navbar');
    bxMenu.classList.remove('hide-bx');
    bxX.classList.remove('show-bx');
  }
});

function trybot(){
  var isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn === 'true'){
      window.location.href = 'Chatbot_final.html';
    }
    else{
      window.location.href = 'index.html';
    }
  }

document.addEventListener('DOMContentLoaded', function () {
  var isLoggedIn = localStorage.getItem('isLoggedIn');
  var userIcon = document.getElementById('userIcon');
  var logoutButton = document.getElementById('logoutButton');
  var loginButton = document.getElementById('loginButton');
 

  if (isLoggedIn === 'true') {
    // User is logged in, display the user icon
    userIcon.style.display = 'block';
    logoutButton.style.display = 'block';
    loginButton.style.display = 'none';
  } else {
    // User is not logged in, hide the user icon
    userIcon.style.display = 'none';
    logoutButton.style.display = 'none';
    loginButton.style.display = 'block';
  }

  logoutButton.addEventListener('click', function () {
    // Clear the login status 
    localStorage.setItem('isLoggedIn', 'false');
  

    window.location.href = 'webpage.html';
  });

  document.getElementById("loginButton").addEventListener("click", function() {
    window.location.href = "index.html";
  });

  
});

