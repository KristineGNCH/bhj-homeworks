'use strict'

const add = Array.from(document.querySelectorAll('.product__add'));
const quantityControls = document.querySelectorAll('.product__quantity-controls');
const cartProducts = document.querySelectorAll('.cart__products');

for (let i = 0; i < add.length; i++) {
    add[i].addEventListener('click', function () {
        const product = this.closet('.product');
        const datasetId = product.dataset.id;

        for (let i = 0; i < cartProducts.length; i++) {
            if (cartProducts.children[i].dataset.id === datasetId) {
                let productCount = cartProducts.children[i].querySelector('.product__quantity-value');
                productCount.innerText = Number(productCount.innerText) + Number(product.querySelector('.product__quantity-value').innerText);
                return false;
            }
        }


        cartProducts.insertAdjacentHTML('beforeend',
            `<div class="cart__product" data-id="${datasetId}"><img class="cart__product-image" src="${product.querySelector('.product__image').src
            }"><div class="cart__product - count">${product.querySelector('.product__quantity-value').innerText}</div></div >`);
    });
}

for (let i = 0; i < quantityControls.length; i++) {
    quantityControls[i].addEventListener('click', function () {
        let quantityValue = Number(this.querySelector('.product__quantity-value').innerText);
        if (event.target.classList.contains('.product__quantity-control_dec')) {
            if (quantityValue > 1) {
                quantityValue--;
            } else {
                quantityValue = 1;
            }
        } else {
            quantityValue++;
        }
        this.querySelector('.product__quantity-value').innerText = quantityValue;
    })

}