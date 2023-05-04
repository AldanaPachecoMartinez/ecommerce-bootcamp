const params = window.location.search

const paramsUrl = new URLSearchParams(params)

const paramsEntries = Object.fromEntries(paramsUrl) || [] ;

const indice = paramsEntries.id;

const products = JSON.parse(localStorage.getItem('products'));

const product = products[indice] || {};

const main = document.getElementById('main-dtl')

const bodyDetail = document.createElement('div').innerHTML = `

<div class="container-dtl__carrousel">
<img src="" alt="" class="container-dtl__imgs">
</div>

<div class="container-description">
<h2 class="subtitle-dtl">${product?.category}</h2>
<h1 class="title-dtl">${product?.name}</h1>
<p class="detalle-dtl">${product?.description}</p>
    <div class="container-description__footer">
        <div class="price-dtl">${product?.price}</div>
        <div class="order-dtl">
            <button class="quitar-product">-</button>
            <div id="suma-products-detail"></div>
            <button class="agregar-product">+</button>
        </div>
    </div>
<button class="container-description__btn-comprar">
    <a href="">Lo quiero<i class="fa-light fa-arrow-right-long fa-beat-fade"></i></a>
</button>
<button class="container-description__btn-cart">
    <a href="/js/orders.js"></a>
</button>
</div>

`

document.main.appendChild(bodyDetail)