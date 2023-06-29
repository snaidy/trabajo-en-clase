
// const shop = document.querySelector('.shop')
// const login = document.querySelector('.login')

import { login, returnBtn, shop } from "./domElements.js"
import { verifySession } from "./shop.js"

export const shopReturn = () => {
    returnBtn.addEventListener('click', showShop)
}

export const showShop = () => {
    localStorage.removeItem('currentView')
    shop.classList.add('active-view-shop')
    login.classList.remove('active-view-login')
    verifySession();
}