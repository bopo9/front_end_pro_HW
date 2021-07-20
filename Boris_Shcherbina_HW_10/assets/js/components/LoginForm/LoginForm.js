import Component from '../Component/Component.js';
export default class LoginForm extends Component{

    #token = 0;

    constructor(loginId,passwordId,Validation, onSuccess) {
        super();

        this.loginInputEl = document.getElementById(loginId);
        this.passwordInputEl = document.getElementById(passwordId);
        this.Validation = Validation;
        this.onSuccess = onSuccess;

        this.signInBtn = document.getElementById('sign-in-btn');

        this.loginInputEl.addEventListener('input', Validation.onLoginValidate.bind(this));
        this.passwordInputEl.addEventListener('input', Validation.onLoginValidate.bind(this));
        this.signInBtn.addEventListener('click', this.onSignInClick.bind(this));
    }
    // eve.holt@reqres.in
    onSignInClick() {
        this.templateEl.querySelector('#error-message').classList.add('hidden');

        this.checkUserCredentials().then(e => {
            // localStorage.setItem('token', e.token);
            this.onSuccess(e);
        }).catch((e) => {
            this.templateEl.querySelector('#error-message').classList.remove('hidden');
        })

    }

    checkUserCredentials(){
        const login = this.loginInputEl.value;
        const password = this.passwordInputEl.value;
        const API_URL = 'https://reqres.in/api';

        const requestBody = {
            email: login,
            password: password
        }

        return fetch(`${API_URL}/login`, {
            body: JSON.stringify(requestBody),
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        }).then(e => {
            if (e.status >= 400) {
                throw e;
            }
            return e;
        }).then(e => e.json());
    }

    static render(){
        console.log('this', this.super.render())
    }
}