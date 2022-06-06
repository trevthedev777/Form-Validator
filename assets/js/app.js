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

// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required');
        console.log(showError);
    } else {
        showSuccess(username);
        console.log(showSuccess);
    }
});