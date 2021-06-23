const USERS = [
    { login: 'admin', password: 'password' },
    { login: 'mod', password: 'password1' },
    { login: 'admin2', password: 'Pa$$word' },
    { login: 'user', password: '1234' },
];

const loginInputEl = document.getElementById('item-login-input');
const passwordInputEl = document.getElementById('item-password-input');
const errorMessageEl = document.getElementById('error-message');
const signInBtnEl = document.getElementById('sign-in-btn');

const validateInputs = () => {
    if (!!loginInputEl.value && !!passwordInputEl.value) {
        signInBtnEl.classList.remove('is-disabled');
        signInBtnEl.removeAttribute('disabled');
    } else {
        signInBtnEl.classList.add('is-disabled');
        signInBtnEl.setAttribute('disabled', 'disabled');
    }
};

const validateInput = evtObject => {
    const inputEl = evtObject.target;

    errorMessageEl.classList.add('hidden');
    if (!inputEl.value) {
        inputEl.classList.add('is-error');
    } else {
        inputEl.classList.remove('is-error');
    }
    validateInputs();
}

loginInputEl.addEventListener('blur', validateInput);
loginInputEl.addEventListener('input', validateInput);

passwordInputEl.addEventListener('blur', validateInput);
passwordInputEl.addEventListener('input', validateInput);

const checkUserCredentials = (login, password) => {
    return !!USERS.find(e => e.login === login && e.password === password);
};

signInBtnEl.addEventListener('click', () => {
    const login = loginInputEl.value;
    const password = passwordInputEl.value;

    if (checkUserCredentials(login, password)) {
        document.getElementById('item-login-input').remove();
        document.getElementById('item-password-input').remove();
        document.getElementById('main-block').classList.remove('hidden');
        document.getElementById('login-success-alert').classList.remove('hidden');
        setTimeout(() => document.getElementById('login-success-alert').classList.add('opacityHidden'), 5000);
        setTimeout(() => document.getElementById('login-success-alert').classList.add('hidden'), 5000);
        clearTimeout();
    } else {
        errorMessageEl.classList.remove('hidden');
    }
});