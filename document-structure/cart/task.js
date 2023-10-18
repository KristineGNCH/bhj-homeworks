const productAdd = document.querySelectorAll('.product__add');
const quantityControls = document.querySelectorAll('.product__quantity-control');
const cartProducts = document.querySelector('.cart__products');

quantityControls.forEach(productsControl => {
    productsControl.addEventListener('click', (e) => {

        if (e.target.classList.contains('product__quantity-control_dec')) {
            if (Number(e.target.parentElement.querySelector('.product__quantity-value').textContent) >= 2) {
                --e.target.parentElement.querySelector('.product__quantity-value').textContent;
            }
        };

        if (e.target.classList.contains('product__quantity-control_inc')) {
            ++e.target.parentElement.querySelector('.product__quantity-value').textContent;
        };
    })
})


function addItem(id, quantity, imageUrl) {
    const newItem = document.createElement('div');
    const itemHTMLContent = `<div class="cart__product" data-id="${id}"><img class="cart__product-image" src="${imageUrl}"><div class="cart__product-count">${quantity}</div>`;
    cartProducts.appendChild(newItem);
    newItem.outerHTML = itemHTMLContent;
};

function upadatedCart(product, quantity) {
    product.querySelector('.cart__product-count').textContent = Number(product.querySelector('.cart__product-count').textContent) + Number(quantity);
};


function addProduct(product) {
    product.id = product.dataset.id;
    product.quantity = product.querySelector('.product__quantity-value').textContent;
    product.image = product.querySelector('.product__image').src;
    if (cartProducts.children.length > 0 && Array.from(cartProducts.children).find(elem => elem.dataset.id === product.id)) {
        upadatedCart(Array.from(cartProducts.children).find(elem => elem.dataset.id === product.id), product.quantity);
    } else {
        addItem(product.id, product.quantity, product.image)
    }
};

productAdd.forEach(toCartButton => {
    toCartButton.addEventListener('click', e => {
        addProduct(e.target.closest('.product'));
    })
});