// Get the buttons and forms
var loginButton = document.getElementById('login-button');
var signupButton = document.getElementById('signup-button');
var loginForm = document.getElementById('login-form');
var signupForm = document.getElementById('signup-form');

// Set the initial active button and form
loginButton.classList.add('active');
loginForm.style.display = 'block';
signupForm.style.display = 'none';

// Add event listeners
loginButton.addEventListener('click', function() {
    loginButton.classList.add('active');
    signupButton.classList.remove('active');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});

signupButton.addEventListener('click', function() {
    signupButton.classList.add('active');
    loginButton.classList.remove('active');
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('password2').value;

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('confirmPassword', confirmPassword);

    window.location.href = 'display.html';
});
