let registerForm = document.forms['registrationForm'];
if (registerForm) {
    registerForm.addEventListener('submit', validateForm);
} else {
    console.error('Unable to find the registration form; no validation will be performed');
}

function isEmpty(field) {
    if (field === "") {
        return true;
    }
    else
    {
        return false;
    }
}

function validateForm(event) {
    let usernameR = registerForm['username'].value;
    let emailR = registerForm['email'].value;
    let passwordR = registerForm['password'].value;
    let confirmPasswordR = registerForm['confirmPassword'].value;

    if (isEmpty(usernameR)) {
        usernameEmpty.style.display = 'block';
        username.style.border = '2px solid red';
        usernameLabel.style.color = 'red';
        usernameLabel.style.fontWeight = 'bold';
        event.preventDefault();
    }
    else
    {
        usernameEmpty.style.display = 'none';
        username.style.border = '1px solid #CCC';
        usernameLabel.style.color = 'black';
        usernameLabel.style.fontWeight = 'normal';
    }

    if (isEmpty(emailR)) {
        emailEmpty.style.display = 'block';
        email.style.border = '2px solid red';
        emailLabel.style.color = 'red';
        emailLabel.style.fontWeight = 'bold';
        event.preventDefault();
    }
    else
    {
        emailEmpty.style.display = 'none';
        email.style.border = '1px solid #CCC';
        emailLabel.style.color = 'black';
        emailLabel.style.fontWeight = 'normal';
    }


    if (isEmpty(passwordR)) {
        passwordEmpty.style.display = 'block';
        password.style.border = '2px solid red';
        passwordLabel.style.color = 'red';
        passwordLabel.style.fontWeight = 'bold';
        event.preventDefault();
    }
    else
    {
        passwordEmpty.style.display = 'none';
        password.style.border = '1px solid #CCC';
        passwordLabel.style.color = 'black';
        passwordLabel.style.fontWeight = 'normal';
    }

    if (isEmpty(confirmPasswordR)) {
        confirmPasswordEmpty.style.display = 'block';
        confirmPassword.style.border = '2px solid red';
        confirmPasswordLabel.style.color = 'red';
        confirmPasswordLabel.style.fontWeight = 'bold';
        event.preventDefault();
    }
    else
    {
        confirmPasswordEmpty.style.display = 'none';
        confirmPassword.style.border = '1px solid #CCC';
        confirmPasswordLabel.style.color = 'black';
        confirmPasswordLabel.style.fontWeight = 'normal';
    }

    
}

