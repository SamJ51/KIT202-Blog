let registerForm = document.forms['registrationForm'];
if (registerForm) {
    registerForm.addEventListener('submit', validateForm);
} else {
    console.error('Unable to find the registration form; no validation will be performed');
}


// check if field is empty (implemented as a function as it can be used multiple times)
// check if field is empty (implemented as a function as it can be used multiple times)
function isEmpty(field) {
    return field === "";
}

function validateForm(event) {
    let usernameR = registerForm['username'].value; // get the value of the username field
    let emailR = registerForm['email'].value; // get the value of the email field
    let passwordR = registerForm['password'].value; // get the value of the password field
    let confirmPasswordR = registerForm['confirmPassword'].value; // get the value of the confirm password field
    const uppercase = /[A-Z]/g;
    const lowercase = /[a-z]/g;
    const numbers = /[0-9]/g;
    const special = /[!@#$%^&*]/g;
    const emailFormat = /\S+@\S+\.\S+/;

    //check if username is empty
    if (isEmpty(usernameR)) {
        usernameEmpty.style.display = 'block';
        username.style.border = '2px solid red';
        usernameLabel.style.color = 'red';
        usernameLabel.style.fontWeight = 'bold';
        event.preventDefault();
    } else {
        usernameEmpty.style.display = 'none';
        username.style.border = '1px solid #CCC';
        usernameLabel.style.color = 'black';
        usernameLabel.style.fontWeight = 'normal';
    }

    //check if email is empty
    if (isEmpty(emailR)) {
        emailEmpty.style.display = 'block';
        email.style.border = '2px solid red';
        emailLabel.style.color = 'red';
        emailLabel.style.fontWeight = 'bold';
        event.preventDefault();
    } else {
        emailEmpty.style.display = 'none';
        email.style.border = '1px solid #CCC';
        emailLabel.style.color = 'black';
        emailLabel.style.fontWeight = 'normal';
    }

    //check email is correct format
    if (!emailFormat.test(emailR)) {
        emailWrongFormat.style.display = 'block';
        email.style.border = '2px solid red';
        emailLabel.style.color = 'red';
        emailLabel.style.fontWeight = 'bold';
        event.preventDefault();
    } else if (!isEmpty(emailR)) {
        emailWrongFormat.style.display = 'none';
        emailWrongFormat.style.border = '1px solid #CCC';
        emailLabel.style.color = 'black';
        emailLabel.style.fontWeight = 'normal';
    }

    //check if password is empty
    if (isEmpty(passwordR)) {
        passwordEmpty.style.display = 'block';
        password.style.border = '2px solid red';
        passwordLabel.style.color = 'red';
        passwordLabel.style.fontWeight = 'bold';
        event.preventDefault();
    } else {
        passwordEmpty.style.display = 'none';
        password.style.border = '1px solid #CCC';
        passwordLabel.style.color = 'black';
        passwordLabel.style.fontWeight = 'normal';
    }

    //check if confirm password is empty
    if (isEmpty(confirmPasswordR)) {
        confirmPasswordEmpty.style.display = 'block';
        confirmPassword.style.border = '2px solid red';
        confirmPasswordLabel.style.color = 'red';
        confirmPasswordLabel.style.fontWeight = 'bold';
        event.preventDefault();
    } else {
        confirmPasswordEmpty.style.display = 'none';
        confirmPassword.style.border = '1px solid #CCC';
        confirmPasswordLabel.style.color = 'black';
        confirmPasswordLabel.style.fontWeight = 'normal';
    }

    //check if password is at least 8 characters long
    if (passwordR.length < 8) {
        passwordTooShort.style.display = 'block';
        password.style.border = '2px solid red';
        passwordLabel.style.color = 'red';
        passwordLabel.style.fontWeight = 'bold';
        event.preventDefault();
    } else {
        passwordTooShort.style.display = 'none';
        password.style.border = '1px solid #CCC';
        passwordLabel.style.color = 'black';
        passwordLabel.style.fontWeight = 'normal';
    }

    //check if password contains at least one uppercase letter
    if (!uppercase.test(passwordR)) {
        passwordUppercase.style.display = 'block';
        password.style.border = '2px solid red';
        passwordLabel.style.color = 'red';
        passwordLabel.style.fontWeight = 'bold';
        event.preventDefault();
    } else {
        passwordUppercase.style.display = 'none';
        password.style.border = '1px solid #CCC';
        passwordLabel.style.color = 'black';
        passwordLabel.style.fontWeight = 'normal';
    }

    //check if password contains at least one lowercase letter
    if (!lowercase.test(passwordR)) {
        passwordLowercase.style.display = 'block';
        password.style.border = '2px solid red';
        passwordLabel.style.color = 'red';
        passwordLabel.style.fontWeight = 'bold';
        event.preventDefault();
    } else {
        passwordLowercase.style.display = 'none';
        password.style.border = '1px solid #CCC';
        passwordLabel.style.color = 'black';
        passwordLabel.style.fontWeight = 'normal';
    }

    //check if password contains at least one number
    if (!numbers.test(passwordR)) {
        passwordNumber.style.display = 'block';
        password.style.border = '2px solid red';
        passwordLabel.style.color = 'red';
        passwordLabel.style.fontWeight = 'bold';
        event.preventDefault();
    } else {
        passwordNumber.style.display = 'none';
        password.style.border = '1px solid #CCC';
        passwordLabel.style.color = 'black';
        passwordLabel.style.fontWeight = 'normal';
    }

    //check if password contains at least one special character
    if (!special.test(passwordR)) {
        passwordSpecial.style.display = 'block';
        password.style.border = '2px solid red';
        passwordLabel.style.color = 'red';
        passwordLabel.style.fontWeight = 'bold';
        event.preventDefault();
    } else {
        passwordSpecial.style.display = 'none';
        password.style.border = '1px solid #CCC';
        passwordLabel.style.color = 'black';
        passwordLabel.style.fontWeight = 'normal';
    }

    //check if password and confirm password match
    if (passwordR !== confirmPasswordR) {
        passwordMismatch.style.display = 'block';
        confirmPassword.style.border = '2px solid red';
        confirmPasswordLabel.style.color = 'red';
        confirmPasswordLabel.style.fontWeight = 'bold';
        event.preventDefault();
    } else {
        passwordMismatch.style.display = 'none';
        confirmPassword.style.border = '1px solid #CCC';
        confirmPasswordLabel.style.color = 'black';
        confirmPasswordLabel.style.fontWeight = 'normal';
    }
}

