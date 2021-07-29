import LoginFormComponent from "./components/LoginForm/LoginForm.js";
import Validation from "./components/Validation/Validation.js";
import Components from "./Core/Component/Component.js";
import {UserComponent} from "./components/UserComponent/UserComponent.js";


const LoginForm = new LoginFormComponent(
    document.getElementById('login-form-tpl').innerHTML,
    'main-entry',
    Validation,
    onSuccessLogin
);

const userComponent = new UserComponent(
    document.getElementById('user-list-item-tpl').innerHTML,
    'main-entry',
    onLogOut
);

function onSuccessLogin({token}) {
    sessionStorage.setItem('token', token);
    LoginForm.dispose();
    userComponent.loadUsers();
}

function onLogOut() {
    sessionStorage.removeItem('token');
    userComponent.dispose();
    LoginForm.render();
}


if (sessionStorage.getItem('token')) {

    userComponent.loadUsers();
} else {
    LoginForm.render();
}