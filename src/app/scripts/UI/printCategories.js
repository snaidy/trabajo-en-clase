import { getCategories } from '../services/categories.js'
import { listCategories } from './domElements.js'
import { printProducts } from './printProducts.js';

export const printCategories = async () => {
    const resp = await getCategories()
    resp.forEach(category => {
            listCategories.innerHTML += `
            <li class="main__categories__list--item" data-id="${category.id}">${category.name}</li>
            `
    });

    const category = document.querySelectorAll('.main__categories__list--item');
    sendCategoryName(category)
}

const sendCategoryName = (categoryBtn) => {
    categoryBtn.forEach(category => {
        category.addEventListener('click', () => {
            const categoryId = category.getAttribute('data-id');
            printProducts(categoryId)
        })
    })
}
