const loginForm = document.forms['registrationForm'];
if (loginForm) {
    loginForm.addEventListener('submit', validateForm);
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
    const usernameL = loginForm['username'].value;
    const passwordL = loginForm['password'].value;

    if (isEmpty(usernameL)) {
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

    if (isEmpty(passwordL)) {
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
}