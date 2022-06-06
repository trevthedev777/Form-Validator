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
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid")
    }
}

/* Validate Matching Passwords */
function passwordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match")
    }
};

/* Get Fieldname*/
function getFieldName(input) {
    // Returns word with Capital;ized first letter
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

/* Checks the required fields and validates them*/
function checkReqiured(inputArr) {
    // forEach is the same as a for loop
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            // Creates the custome input warning
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        };
    });

};

/* Checks the required lengths for username and password and validates them*/
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be more than ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must not be more than ${max} characters`)
    } else {
        showSuccess(input);
    }; 
}

// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkReqiured([ username, email, password, password2 ]);
    // Length of username, min 3 and max 15 characters
    checkLength(username, 3, 15);
    // Length of password min 6 and max 25 characters
    checkLength(password, 6, 25);
    checkEmail(email);
    passwordsMatch(password, password2);
});