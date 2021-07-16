import LoginFormComponent from "./components/LoginForm/LoginForm.js";
import Validation from "./components/Validation/Validation.js";


const isUserLoggedIn = false;

if (isUserLoggedIn) {
    new User().render();
} else {
    new LoginFormComponent(document.getElementById('login-form-tpl').innerHTML, 'main-entry',Validation).render();
}