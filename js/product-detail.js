const params = window.location.search

const paramsUrl = new URLSearchParams(params);

const paramsEntries = Object.fromEntries();

const indice = paramsEntries.id;

const products = JSON.parse(localStorage.getItem('products'));

const product = products[indice];

document.body.innerText = `<p>${JSON.stringify(product)}</p>`

//alli dibujar el div con todo lo que quiero mostrar del producto 