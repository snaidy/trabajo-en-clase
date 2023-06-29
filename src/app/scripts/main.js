import { printCategories } from './UI/printCategories.js'
import '../styles/styles.scss'
import { printProducts, printProductsFinder, prueba } from './UI/printProducts.js'
import { buttonOption, formLogin, inputSearch, login, shop } from './UI/domElements.js'
import { handleSubmit } from './UI/loginView.js'
import { shopReturn } from './UI/shopReturn.js'
import { verifySession } from './UI/shop.js'

const currentView = localStorage.getItem('currentView')

document.addEventListener('DOMContentLoaded', () => {
    switch (true) {
        case !currentView:
            shop.classList.add('active-view-shop')
            login.classList.remove('active-view-login')
            break;
        case currentView === 'login':
            shop.classList.remove('active-view-shop')
            login.classList.add('active-view-login')
            break;
        default:
            break;
    }
})

formLogin.addEventListener('submit', (e) => {
    handleSubmit(e)
})

printCategories()
printProducts()
shopReturn()
verifySession()
inputSearch.addEventListener('keyup', printProductsFinder)

console.log('este es el boton', buttonOption)

prueba()