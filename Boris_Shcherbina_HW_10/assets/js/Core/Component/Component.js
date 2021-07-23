export default class Component {
    #API_URL = 'https://reqres.in/api';

    constructor(template, entryId) {
        const el = document.createElement('div');
        el.insertAdjacentHTML('afterbegin', template);
        this.templateEl = el;
        this.entryEl = document.getElementById(entryId);
    }

    get ApiUrl(){
        return this.#API_URL;
    }

    render() {
        return this.entryEl.insertAdjacentElement('afterbegin', this.templateEl);
    }

    dispose() {
        return this.templateEl.remove();
    }

    getElementById(id) {
        return this.templateEl.querySelector(`#${id}`);
    }
}