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

            const userFormEl = this.getRealElementById('user-form');
            userFormEl.setAttribute('data-method', 'create');

            this.openUserModal();
        });

        this.addListener('#user-form', 'click', e => {
            const userFormEl = this.getRealElementById('user-form');

            if (e.target.classList.contains('is-primary')) {
                if (userFormEl.getAttribute('data-method') == 'create'){
                    e.preventDefault();
                    this.createUser();
                }else{
                    e.preventDefault();
                    this.onUserUpdateConfirm();
                }
            }
        });
    }

    onUserUpdateConfirm(evt) {
        const {user} = this.state;

        const id = this.getRealElementById('user-form').getAttribute('data-id');
        const name = this.realQuerySelector('#name_field').value;
        const job = this.realQuerySelector('#job_field').value;

        this.updateUser(id, name, job);
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

        const userFormEl = this.getRealElementById('user-form');
        userFormEl.setAttribute('data-method', 'update');
        userFormEl.setAttribute('data-id', id);

        this.openUserModal();
    }

    render() {
        const {list, user} = this.state;

        super.render();

        const listEl = this.getRealElementById('list');
        const liTpl = this.querySelector('#list  > li').outerHTML;

        const userFormEl = this.getRealElementById('user-form');
        const userFormTpl = this.querySelector('#user-form').innerHTML;

        userFormEl.innerHTML = renderTemplate(userFormTpl, user);
        userFormEl.open = false;


        listEl.innerHTML = list.reduce((tpl, e) => {
            return tpl + renderTemplate(liTpl, e);
        }, '');
    }

    setState(state) {
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
            .then(e => e.json())
            .catch(error => console.log(error));
    }

    loadUsers() {
        this.getUserList().then(({data}) => {
            this.setState({list: data});
        });
    }

    openUserModal() {
        const userFormEl = this.getRealElementById('user-form');

        userFormEl.showModal();
    }

    deleteUser(id) {
        return fetch(`${this.ApiUrl}/users/${id}`, {
            method: 'DELETE'
        }).catch(error => console.log(error));
    };

    createUser() {
        const {list} = this.state;

        const name = this.realQuerySelector('#name_field').value;
        const job = this.realQuerySelector('#job_field').value;

        this.onCreateUserRequest(name, job).then((data) => {
            data.avatar = 'https://reqres.in/img/faces/3-image.jpg';
            data.first_name = data.name;
            delete data.name;
            data.last_name = data.job;
            list.push(data)
            this.setState({list: list});
        });
    }

    onCreateUserRequest(name, job) {
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
        })
        .then(e => {
            if (!e.ok) {
                throw e;
            }
            return e;
        })
        .then(e => e.json())
        .catch(error => console.log(error));
    }

    updateUser(id, name, job) {
        const requestBody = {
            name: name,
            job: job
        }

        const updatedUser = fetch(`${this.ApiUrl}/api/users/${id}`, {
            body: JSON.stringify(requestBody),
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(e => {
            if (!e.ok) {
                throw e;
            }
            return e;
        })
        .then(e => e.json())
        .catch(error => console.log(error));

        updatedUser.then((data) => {
            let { list } = this.state;

            let updatedUser = list.find(users => users.id == id);
            updatedUser.first_name = data.name;
            updatedUser.last_name = data.job;

            list = list.map(user => user.id !== updatedUser.id ? user : updatedUser);

            this.setState({
                list: list
            })
        })
    }
}
