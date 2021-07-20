import LoginFormComponent from "./components/LoginForm/LoginForm.js";
import Validation from "./components/Validation/Validation.js";
import Components from "./components/Component/Component.js";
import {User} from "./components/User/User.js";

let isLog = false;

console.dir(LoginFormComponent.render)

LoginFormComponent.render();

const LoginForm = new LoginFormComponent('login-input','password-input', Validation, onSuccessLogin);

async function onSuccessLogin(e) {
    User.dispose()
}

console.log(isLog)

if (isLog) {
    console.log('1');
} else {

}