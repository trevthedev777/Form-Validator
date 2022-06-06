// Global Variables
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

/* Shows The Input Error Message and Outline*/
// Takes in whatever the input is, and shows the message
function showError(input, message) {
    // Input Border Change
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    // small tag error message
    const small = formControl.querySelector("small");
    small.innerHTML = message;
};

/* Shows The Input Success Outline*/
function showSuccess(input) {
    // Input Border Change
    const formControl = input.parentElement;
    formControl.className = "form-control success";
};

/* Validates Email Address*/
function emailIsValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Username Validation
    if (username.value === '') {
        showError(username, 'Username is required');
        console.log(showError);
    } else {
        showSuccess(username);
        console.log(showSuccess);
    };

    // Email Validation
    if (email.value === '') {
        showError(email, 'Email address is required');
        console.log(showError);
    } else if (!emailIsValid(email.value)){
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
        console.log(showSuccess);
    };

    // Password Validation
    if (password.value === '') {
        showError(password, 'Password is required');
        console.log(showError);
    } else {
        showSuccess(password);
        console.log(showSuccess);
    };

    // Confirm Password validation
    if (password2.value === !password.value) {
        showError(password2, 'Passwords do not match');
        console.log(showError);
    } else {
        showSuccess(password2);
        console.log(showSuccess);
    };
});