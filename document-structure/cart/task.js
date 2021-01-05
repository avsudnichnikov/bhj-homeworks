class Storage {
    constructor(name) {
        this.name = name;
        this._data = JSON.parse(localStorage.getItem(this.name)) || [];
    }

    get data() {
        return this._data;
    }

    set data(values) {
        this._data = Array.from(values);
        localStorage.setItem(this.name, JSON.stringify(this._data));
    }

    create(value) {
        this._data.push(value);
        this.data = this._data;
    }

    update(idValue, propKey, propValue) {
        this._data.map((record) => {
            if (record.id === idValue) {
                record[propKey] = propValue;
            }
        })
        this.data = this._data;
    }

    delete(idKey, idValue) {
        this._data.filter((record) => record.id !== idValue)
        this.data = this._data;
    }

    clear(value) {
        this._data = [];
        localStorage.removeItem(this.name);
    }
}

const cart = {el: document.querySelector('.cart__products'), storage: new Storage('cart')};
const productIncBtns = document.querySelectorAll('.product__quantity-control.product__quantity-control_inc');
const productDecBtns = document.querySelectorAll('.product__quantity-control.product__quantity-control_dec');
const productAddBtns = document.querySelectorAll('.product__add');

const getProducts = () => {
    cart.storage.data.forEach((task) => {
        cart.el.innerHTML += cartProductDecorate(task)
    });
}

const clearCart = () => {
    return function (event) {
        event.preventDefault();
        cart.storage.clear();
        cart.el.innerHTML = '';
    }
}

function addProductToCart(product) {
    cart.storage.create(product);
    cart.el.innerHTML += cartProductDecorate(product);
}

function changeProductInCart(product, productInCart) {
    const output = productInCart.querySelector('.cart__product-count')
    const quantity = +output.textContent + product.item;
    output.textContent = `${quantity}`;
    cart.storage.update(product.id, 'item', quantity);
}

function cartProductDecorate(product) {
    return `<div class="cart__product" data-id="${product.id}">
            <img class="cart__product-image" src="${product.image}">
            <div class="cart__product-count">${product.item}</div>
            </div>`;
}

function priceChangeQuantityValue(difference = 1) {
    return function (event) {
        const container = event.target.closest('.product__quantity-controls');
        const output = container.querySelector('.product__quantity-value');
        const quantity = +output.textContent + difference;
        output.textContent = `${(quantity > 0) ? quantity : 1}`;
    }
}

window.addEventListener('load', getProducts);

document.querySelector('.cart__clear_btn').addEventListener('click', clearCart());

productIncBtns.forEach((btn) => {
    btn.addEventListener('click', priceChangeQuantityValue(1))
})

productDecBtns.forEach((btn) => {
    btn.addEventListener('click', priceChangeQuantityValue(-1))
})

productAddBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const productEl = event.target.closest('.product');
        const product = {
            id: productEl.dataset.id,
            item: +productEl.querySelector('.product__quantity-value').textContent,
            image: productEl.querySelector('.product__image').getAttribute('src'),
        }

        const productInCart = cart.el.querySelector(`[data-id="${product.id}"]`);

        if (productInCart) {
            changeProductInCart(product, productInCart);
        } else {
            addProductToCart(product);
        }
    });
})
