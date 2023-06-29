import { findProducts, getProducts } from "../services/products";
import { buttonOption, inputSearch, productsContainer } from "./domElements";
import { endpoints } from "../services/data.js";
import axios from 'axios'; 
export const printProducts = async (categoryId = null) => {
  const data = await getProducts();
  const categoriesFiltered = data.filter((product) => {
    return categoryId ? product.category.id === Number(categoryId) : product;
  });
  renderProducts(categoriesFiltered);
};

export const printProductsFinder = async () => {
  const dataFinder = await findProducts(inputSearch.value);
  renderProducts(dataFinder);
  console.log(dataFinder);
};

const renderProducts = (array) => {
  productsContainer.innerHTML = "";
  array.forEach((product) => {
    productsContainer.innerHTML += `
        <section class="main__products-container__product">
                <h2 class="main__products-container__product--title">${product.category.name}</h2>
                <img src="${product.imageURL}" alt="">
                <p class="main__products-container__product--item">
                    Producto:
                    <span>${product.name}</span>
                </p>
                <p class="main__products-container__product--item">
                    Precio:
                    <span>${product.price}</span>
                </p>
                <p class="main__products-container__product--item">Cantidad:
                    <span>${product.amount}</span>
                    <div id="buttons " >
                    <button type="button" class="delete" data-id="${product.id}">Eliminar</button>
                    <button type="button" class="button">Editar</button>
                    </div>
                </p>

        </section>
        `;
  });
};
export const prueba = async () => {
  try {

    //delete
    productsContainer.addEventListener('click', async function async(event) {
      if (event.target.classList.contains('delete')) {
        let clickedElement = event.target;
        const idBtn = clickedElement.getAttribute("data-id")
        
        const { data } = await axios.delete(`${endpoints.urlProductos}${idBtn}`)
        console.log(data);
          window.location.reload()
        }else{
            console.log('error')
        }

//edit

        if (event.target.classList.contains('button')) {
            let clickedElement = event.target;
            const idBtn = clickedElement.getAttribute("data-id")
            
            const { data } = await axios.patch(`${endpoints.urlProductos}${idBtn}`)
            console.log(data);
              window.location.reload()
            }
      });

      


    } catch (error) {
      console.log(error);
    }
}