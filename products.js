"use strict";

// Находим элемент, куда надо вставить элементы.
const featuredItemsEl = document.querySelector(".product_cards");
// Вставляем все данные из массива, предварительно каждые данные превратив в
// html-разметки товаров, складывая все разметки в одну строку.
featuredItemsEl.innerHTML = getProductsList()
  .map((product) => renderProduct(product))
  .join("");

/**
 * Фугнкция создает html товара.
 * @param {object} data - объект с информацией о товаре.
 * @returns разметку товара.
 */
function renderProduct(data) {
  return `
    <div class="item">
        <div class="container_img">
            <img src="${data.src}" alt="${data.alt}">
            <div class="featuredImgDark">
                <button class="addToCart" data-id="${data.id}">
                <img src="img/cart.svg" alt="">
                    Add to Cart
                </button>
            </div>
        </div>
        <div class="info">
            <h4 class="info_h4">
                ${data.name}
            </h4>
            <p class="info_p">
                ${data.desc}
            </p>
            <div class="cena">
                ${data.price} руб.
            </div>
        </div>
    </div>
  `;
}