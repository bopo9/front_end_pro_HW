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

async function checkUserCredentials(email, password){
    const url =  'https://reqres.in/api/login';
    const data = {
        email: email,
        password: password
    }


    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(function (response) {
        if (!response.ok) {
            return Promise.reject(new Error(response.statusText));
        }

        if (response.ok) {
            const userList = fetch('https://reqres.in/api/')
                .then(function (response) {
                    document.getElementById('item-login-input').remove();
                    document.getElementById('item-password-input').remove();
                    document.getElementById('main-block').classList.remove('hidden');
                    return Promise.resolve(response);
                })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log('data', data);
                }).catch(function (error) {
                    console.log('error5', error);
                })
        }
    }).catch(function (error) {
        errorMessageEl.classList.remove('hidden');
        console.log('error2', error);
    })


}

signInBtnEl.addEventListener('click', () => {
    const login = loginInputEl.value;
    const password = passwordInputEl.value;

    checkUserCredentials(login, password);
});