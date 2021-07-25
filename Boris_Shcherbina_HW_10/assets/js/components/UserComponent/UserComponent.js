import Component from '../../Core/Component/Component.js';
import renderTemplate from '../../Core/utils/render.js';
export class UserComponent extends Component {
    constructor(template, entryId, onLogOut) {
        super(template, entryId);

        this.getRealElementById('logout-btn').addEventListener('click', onLogOut);

        this.state = {
            list: [],
            user: {}
        };

        this.addListener('#list', 'click', e => {
            e.target.classList.contains('delete') && this.onDelete(e);
            e.target.classList.contains('update') && this.onUpdateOpen(e);

        });

        this.addListener('#create-user-btn', 'click', e => {
            this.setState({
                user: {
                    first_name: '',
                    last_name: ''
                }
            });

            this.openUserModal();

        });

        this.addListener('#user-form', 'click', e => {
            if (e.target.classList.contains('is-primary')) {
                e.preventDefault();
                this.onUserUpdateConfirm();
            }
        });

    }

    onUserUpdateConfirm() {
        const { user } = this.state;

        const name = this.realQuerySelector('#name_field').value;
        const job = this.realQuerySelector('#job_field').value;

        this.createUser(name, job);
    }

    onDelete(evt) {
        const id = evt.target.parentElement.dataset['id'];

        this.deleteUser(id).then(e => {
            this.setState({
                list: this.state.list.filter(e => +e.id !== +id),
            });
        });
    }

    onUpdateOpen(evt) {
        const id = evt.target.parentElement.dataset['id'];

        this.setState({
            user: this.state.list.find(e => +e.id === +id)
        });

        this.openUserModal();
    }

    render() {
        const { list, user } = this.state;

        super.render();

        const listEl = this.getRealElementById('list');
        const liTpl = this.querySelector('#list  > li').outerHTML;

        const userFormEl = this.getRealElementById('user-form');
        const userFormTpl = this.querySelector('#user-form').innerHTML;

        userFormEl.innerHTML = renderTemplate(userFormTpl, user);

        listEl.innerHTML = list.reduce((tpl, e) => {
            return tpl + renderTemplate(liTpl, e);
        }, '');
    }

    setState(state){
        console.log('state', state);
        this.state = {
            ...this.state,
            ...state
        };
        this.render();
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
            console.log('data', data)
           this.setState({list: data});
        });
    }

    openUserModal() {
        const userFormEl = this.getRealElementById('user-form');

        userFormEl.showModal();
    }

    deleteUser(id){
        return fetch(`${this.ApiUrl}/users/${id}`, {
        method: 'DELETE'
    })};

    createUser() {
        const name = this.realQuerySelector('#name_field').value;
        const job = this.realQuerySelector('#job_field').value;
        let state;
        this.onCreateUserRequest(name, job).then(function (result){
            this.state. = result;
        });

        console.log(state);
    }

    onCreateUserRequest(name, job){
        const requestBody = {
            name: name,
            job: job
        }

        return fetch(`${this.ApiUrl}/api/users`, {
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

    updateUser(id, name, job){
        console.log(id, name, job);
    };
}