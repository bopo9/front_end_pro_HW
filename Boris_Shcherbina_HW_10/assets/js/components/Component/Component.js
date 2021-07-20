export default class Component {
    constructor() {
        this.template = document.getElementById('login-form-tpl').innerHTML;
        this.entryEl = document.getElementById('main-entry');

        const el = document.createElement('div');
        el.insertAdjacentHTML('afterbegin', this.template);
        this.templateEl = el;
    }

    static render() {
        return this.entryEl.insertAdjacentElement('afterbegin', this.templateEl);
    }

    static dispose() {
       return this.templateEl.remove();
    }
}
