const form = document.forms['registrationForm'];
if (form) {
    form.addEventListener('submit', validateForm);
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
    const username = form['username'].value;
    const email = form['email'].value;
    const password = form['password'].value;
    const confirmPassword = form['confirmPassword'].value;

    if (isEmpty(username)) {
        usernameEmpty.style.display = 'block';
        event.preventDefault();
    }
    else
    {
        usernameEmpty.style.display = 'none';
    }

    if (isEmpty(email)) {
        emailEmpty.style.display = 'block';
        event.preventDefault();
    }
    else
    {
        emailEmpty.style.display = 'none';
    }


    if (isEmpty(password)) {
        passwordEmpty.style.display = 'block';
        event.preventDefault();
    }
    else
    {
        passwordEmpty.style.display = 'none';
    }

    if (isEmpty(confirmPassword)) {
        confirmPasswordEmpty.style.display = 'block';
        event.preventDefault();
    }
    else
    {
        confirmPasswordEmpty.style.display = 'none';
    }
}

