import { checkUser, clearSession } from "../services/session"
import { loginBtn, nameUser, welcomeText, productsContainer } from "./domElements";
import { showLogin } from "./loginView";

// import { prueba } from "./printProducts.js"


export const verifySession = () => {
    const user = checkUser();
    if(user?.name){
        loginBtn.innerHTML = 'Cerrar Sesión';
        loginBtn.addEventListener('click', () => {
            clearSession()
            showLogin()
        })
        welcomeText.classList.remove('hidden')
        nameUser.innerHTML = user.name;
        // clickedElement.classList.remove('hidden')
    }else {
        loginBtn.innerHTML = 'Iniciar Sesión';
        loginBtn.addEventListener('click', () => {
            showLogin()
        })
        welcomeText.classList.add('hidden')
        // clickedElement.classList.add('ver')
    }
}