import { saveUser } from "../services/session.js"
import { getUser } from "../services/users.js"
import { login, passwordInput, shop, userInput } from "./domElements.js"
import { verifySession } from "./shop.js"
import { showShop } from "./shopReturn.js"

export const showLogin = () => {
    localStorage.setItem('currentView', 'login')
    shop.classList.remove('active-view-shop')
    login.classList.add('active-view-login')
}

export const handleSubmit = (e) => {
    e.preventDefault()
    validateUser();
}

const validateUser = async () => {
    const user = userInput.value;
    const password = passwordInput.value;
    const resp = await getUser(user, password);
    if (!resp.length) {
        alert('El usuario o la contraseña no existen');
    } else {
        saveUser(resp[0]);
        showShop();
        verifySession();
    }
}

