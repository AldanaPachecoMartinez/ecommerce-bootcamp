const params = window.location.search
const paramsUrl = new URLSearchParams(params);
const indice = paramsUrl.get('id');
const product = products[indice];

const productDetail = document.getElementById('product-detail').innerHTML= 
`
<div class="container-dtl__carrousel">
<img src="${product?.images[0]||'/assets/images/logo-marca.png'}" alt="" class="container-dtl__imgs" id='image-product-detail'>
<img src="${product?.images[1]||'/assets/images/logo-marca.png'}" alt="" class="second-image-detail">
</div>

<div class="container-description">
<h3 class="subtitle-dtl">${product?.category}</h3>
<h1 class="title-dtl">${product?.name}</h1>
<p class="detalle-dtl">${product?.description}</p>
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
<button class="container-description__btn-comprar" onclick='addToCart(${JSON.stringify(product)})'>
    Lo quiero!
</button>
</div>

</div>

`

function addToCart(product){
    let cantidad=document.getElementById('suma-products-detail').value

    if(!currentUser){
        showAlert('Para poder agregar productos a su carro de compras, debe ingresar a su cuenta. Si aún no posee una, puede hacerlo en la sección REGISTRARSE del menú superior.',null,8000)
        setTimeout(() => {
            window.location.href='/pages/login/login.html'
        }, 8000); 
            
        return
    }

let userCart=allCarts?.filter((el)=> el?.email === currentUser?.email)||[]


    let index = (userCart[0].order.findIndex(el=>el.product==product.id))
    
    if(index !== -1){
        userCart[0].order[index].quantity++ 
    }else{
        userCart[0].order.push({
            product:product.id,
            quantity:Number(cantidad)
        })
    }
    
    window.localStorage.setItem('cart',JSON.stringify(userCart))
    renderOrder(userCart)
    actualizarBadge(userCart)
    showAlert('Producto agregado al carro de compras correctamente.','ok')
}


function changeQuantity(operator){
if(document.getElementById('suma-products-detail').value==='0' && operator==='-'){return}

    cantidad= Number(document.getElementById('suma-products-detail').value)
    document.getElementById('suma-products-detail').value= cantidad += (operator==='+') ? 1 :-1
}