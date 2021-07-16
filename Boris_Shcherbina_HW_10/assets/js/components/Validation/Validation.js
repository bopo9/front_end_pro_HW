export default class Validation {

    static onLoginValidate(evtObj) {
        const inputEl = evtObj.target;
        if (!inputEl.value) {
            inputEl.classList.add('is-error');

        } else {
            inputEl.classList.remove('is-error');

        }
    }
}