const badgeHTML = document.getElementById('cart-count');

let order = {
    products: [
        {
            productName: '',
            cantidad: 2,
            price:1000,
        },
        {
            productName: '',
            cantidad: 2,
            price:1000,
        },
    ],
    user: 'email@gmail.com',
    total: 2000,
}

function actualizarBadge() {
    badgeHTML.innerText = order.products.reduce((acc, producto) => acc += producto.cantidad , 0);
}

