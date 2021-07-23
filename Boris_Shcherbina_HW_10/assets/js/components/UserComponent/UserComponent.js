import Component from '../../Core/Component/Component.js';
import renderTemplate from '../../Core/utils/render.js';
export class UserComponent extends Component {
    constructor(template, entryId, onLogOut) {
        super(template, entryId);

        this._template = template;

        this.getElementById('logout-btn').addEventListener('click', onLogOut);

        this.listEl = this.getElementById('list');
        this.liTmp = this.listEl.firstElementChild.outerHTML;
    }

    setState(users = []){
        this.listEl.innerHTML = users.reduce((tpl, e) => {
            return tpl + renderTemplate(this.liTmp, e);
        }, '');
    }

    getUserList(page = 1) {
        return fetch(`${this.ApiUrl}/users?page=${page}`)
            .then(e => {
                if (!e.ok) throw e;
                return e;
            })
            .then(e => e.json());
    }

    loadUsers(){
        this.getUserList().then(({data}) => {
            this.setState(data);
            super.render();
        });
    }
}