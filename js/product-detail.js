const params = window.location.search
const paramsUrl = new URLSearchParams(params);
const indice = paramsUrl.get('id');
const product = products[indice];

const productDetail = document.getElementById('product-detail').innerHTML= 
`
<div class="container-dtl__carrousel">
<img src="${product?.thumbnail}" alt="" class="container-dtl__imgs">
</div>

<div class="container-description">
<h3 class="subtitle-dtl">${product?.category}</h3>
<h1 class="title-dtl">${product?.name}</h1>
<p class="detalle-dtl">${product?.resume}</p>
    <div class="container-description__footer">
        <div class="price-dtl">$${product?.price}</div>
        <div class="stock-dtl">
        <div class="order-dtl">
            <button class="quitar-product" onclick='changeQuantity("-")'>-</button>
            <input id="suma-products-detail" value=0 />
            <button class="agregar-product" onclick='changeQuantity("+")'>+</button>
            </div>
            <p class="stock-text-dtl">${product.stock} disponibles</p>
            </div>
    </div>
    <div class="container-btn-comprar">
<button class="container-description__btn-comprar" onclick='addToCart()'>
    Lo quiero!
</button>
</div>

</div>

`

function addToCart(){
    let cantidad=document.getElementById('suma-products-detail').value
    console.log(cantidad)
}

function changeQuantity(operator){
    cantidad= Number(document.getElementById('suma-products-detail').value)
    document.getElementById('suma-products-detail').value= cantidad += (operator==='+') ? 1 : -1
}