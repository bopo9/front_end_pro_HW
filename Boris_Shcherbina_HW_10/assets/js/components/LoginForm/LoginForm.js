export default class LoginForm {
    constructor(template, entryId, Validation) {
        const el = document.createElement('div');
        el.insertAdjacentHTML('afterbegin', template);

        this.templateEl = el;
        this.entryEl = document.getElementById(entryId);
        this.Validation = Validation;

        this.templateEl.querySelector('#login-input')
            .addEventListener('input', this.Validation.onLoginValidate.bind(this));

        this.templateEl.querySelector('#password-input')
            .addEventListener('input', this.Validation.onLoginValidate.bind(this));

        // this.templateEl.querySelector('#sign-in-btn')
        //     .addEventListener('click', Validate.onLoginValidate(evtObj));
    }

    render() {
        Array.prototype.forEach.call(this.entryEl.children, e => e.remove());
        this.entryEl.insertAdjacentElement('afterbegin', this.templateEl);
    }

}