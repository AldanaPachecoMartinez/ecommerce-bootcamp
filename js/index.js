const cardsContainer = document.getElementById('card-container');

const productsLS = JSON.parse(localStorage.getItem('products')) || [];



function renderizarProductos(products) {
    cardsContainer.innerHTML = '';
    products.forEach((product, index)=> {
        const card = document.createElement('article');
        card.classList.add('card');

        card.innerHTML += `
        <div class="card__cart">
            <i class="fa-solid fa-cart-plus" onclick='addToCart(${JSON.stringify(product)})'>
                <a href=""></a>
            </i>
        </div>

        <div class="card__header">
            <img src="${product.thumbnail}" alt="${product.name}" class="card__img">
        </div>

        <div class="card__body">
            <div class="card__title">
                ${product.name.toUpperCase()}
            </div>
            <p class="card__description"> 
                ${product.resume}
            </p>
            <div class="card__price">
                $${product.price}
            </div>

        <div class="card__footer">
            <div class="card__date">
                31/01/2023
            </div>
            <div class="card__btn-container">
                <a href="/pages/product-detail/product-detail.html?id=${index}" class="card__btn">Detalle</a>
            </div>
        </div>
        </div>
        `
        cardsContainer.appendChild(card);
    });
}

function addToCart(product){
    let index = (userCart[0].order.findIndex(el=>el.product===product.id))

    if(index !== -1){
    userCart[0].order[index].quantity++ 
    }else{
        userCart[0].order.push({
            product:product.id,
            quantity:1
        })
    }
    
    window.localStorage.setItem('cart',JSON.stringify(userCart))
    renderOrder(userCart)
    actualizarBadge()
}


document.getElementById('search-product-index').onkeyup= (evt)=>handleBuscarIndex(evt)

function handleBuscarIndex(evt){
    if(evt.keyCode !==13 && evt.target.id !== 'search-index'){
        return
    }
    const searchValue=document.getElementById('search-product-index').value.toLowerCase()
    let searchResults = products.filter((el)=>{
        return el.name.toLowerCase().includes(searchValue) ||
        el.category.toLowerCase().includes(searchValue)         
    })
    document.querySelector('.section-cards__products-count').innerHTML = `Se encontraron ${searchResults.length} productos`

    renderizarProductos(searchResults)
}




renderizarProductos(productsLS)