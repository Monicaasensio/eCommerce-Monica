const form = document.getElementById('form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const radio = document.getElementById('radio');
let btnClear =  document.querySelector('button');

form.addEventListener('submit', e => {
    if (!validateInputs()) {
        e.preventDefault(); //prevents the form from submittings
    } //function called on submit
});

const setError = (element, message) => { //creates element with set parameters to add value to
    const inputCheck = element.parentElement; //
    const errorMessage = inputCheck.querySelector('.error');

    errorMessage.innerText = message;
    inputCheck.classList.add('error');
    inputCheck.classList.remove('success');
}

const setSuccess = element => {
    const inputCheck = element.parentElement;
    const errorMessage = inputCheck.querySelector('.error');

    errorMessage.innerText = '';
    inputCheck.classList.add('success');
    inputCheck.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs =  () => {
    const firstNameValue = firstName.value.trim(); //trims whitespace after input
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    let isFirstNameValid = false;
    let isLastNameValid = false;
    let isEmailValid = false;

    if(firstNameValue === '') {
        setError(firstName, 'First Name is required');
    } else {
        setSuccess(firstName);
        isFirstNameValid = true;
    }

    if(lastNameValue === '') {
        setError(lastName, 'Last Name is required');
    } else {
        setSuccess(lastName);
        isLastNameValid = true;
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        isEmailValid = true;
    }

    return isFirstNameValid && isLastNameValid && isEmailValid;
};

