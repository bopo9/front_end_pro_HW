import Component from '../../Core/Component/Component.js';
export default class LoginForm extends Component{
    constructor(template, entryId, Validation, onSuccess) {
        super(template, entryId);

        this.onSuccess = onSuccess;

        this.loginInputEl = this.getRealElementById('login-input');
        this.passwordInputEl = this.getRealElementById('password-input');

        this.errorMessageEl = this.getRealElementById('error-message');

        this.signInBtn = this.getRealElementById('sign-in-btn');

        this.loginInputEl.addEventListener('input', Validation.onLoginValidate.bind(this));
        this.passwordInputEl.addEventListener('input', Validation.onLoginValidate.bind(this));

        this.getRealElementById('sign-in-btn').addEventListener('click', this.onSignInClick.bind(this));

    }
    // eve.holt@reqres.in
    onSignInClick() {

        this.errorMessageEl.classList.add('hidden');

        this.checkUserCredentials('login-input', 'password-input').then(e => {
            this.onSuccess(e);
        }).catch((e) => {
            this.errorMessageEl.classList.remove('hidden');
        })

    }

    checkUserCredentials(loginId,passwordId){
        const login = this.loginInputEl.value;
        const password = this.passwordInputEl.value;

        const requestBody = {
            email: login,
            password: password
        }

        return fetch(`${super.ApiUrl}/login`, {
            body: JSON.stringify(requestBody),
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        }).then(e => {
            if (!e.ok) {
                throw e;
            }
            return e;
        }).then(e => e.json());
    }
}