const badgeHTML = document.getElementById('cart-count');
function actualizarBadge() {
    let actualCart=JSON.parse(window.localStorage.getItem('cart'))
    let userCart=actualCart?.filter((el)=> el?.email === currentUser?.email)
    
    badgeHTML.innerText = userCart[0].order.reduce((acc, producto) => acc += producto.quantity , 0);

    if(!currentUser){
        badgeHTML.setAttribute('hidden',true)
    }

    }


function handleOrders(){
    let mainOrders = document.getElementById('main-orders')
    if(!mainOrders){
            mainOrders=document.createElement('div')
            mainOrders.id='main-orders'
            mainOrders.classList='main-orders-container visible'
            
            
        document.body.appendChild(mainOrders)
    }else{
        //si existe
        mainOrders.classList.toggle('visible')
    }
    renderOrder(userCart)
}

function renderOrder(userCart){
    let totalAmount=0
    let mainOrders = document.getElementById('main-orders')
    if(!mainOrders){
        mainOrders=document.createElement('div')
        mainOrders.id='main-orders'
        mainOrders.classList='main-orders-container'
        document.body.appendChild(mainOrders)
}

    let productsInOrder = userCart[0].order.map((el,i)=>{
        let product = products.filter((prod,idx)=>prod.id==el?.product)[0]
        totalAmount += product?.price * el.quantity
        return(
            `
            <div class="order-item">
            <img src="${product?.thumbnail}" class="thumb-order">
            <div class='order-column-1'>
            <p class="order-item-name">${product?.name.toUpperCase()}</p>
            <div class='order-quantity-container'>
            <button class="order-quantity-less" onclick='modifyQuantity("-",${i})'>-</button>
            <p class="order-item-quantity">${el.quantity}</p>
            <button class="order-quantity-more" onclick='modifyQuantity("+",${i})'>+</button>
            </div>
            </div>
            <p class="order-item-price">$${product?.price * el.quantity}</p>
            <button class="order-item-delete" onclick='removeItem(${i})'>x</button>
            </div>
            `
        )
    })

    let orderFooter = `
    <div class="order-footer">
    <p class="total-amount-order">$${totalAmount}</p>
    <button class="check-out-btn" onclick= "showAlert('Gracias por tu compra! En unos instantes nos comunicaremos con usted.', 'ok', 5000)">Finalicemos la compra</button>
</div>
    `

    let orderHeader = `
    <div class='order-header-container'>
    <i class="fa-solid fa-xmark fa-xl" onclick='closeOrder()'></i>
    <p class= "text-order">Hola <strong>${currentUser.fullname}</strong>! Este es el detalle de tu compra: </p>
    </div>
    `


    mainOrders.innerHTML= orderHeader + '<div class="order-products-container">'+ productsInOrder.join('') + '</div>' + orderFooter 
}

function modifyQuantity(operator,i){
    if(userCart[0].order[i].quantity === 0 && operator=== '-') { return}
    userCart[0].order[i].quantity+= (operator==='+') ? 1 : -1
    window.localStorage.setItem('cart',JSON.stringify(userCart))
    renderOrder(userCart)
    actualizarBadge()
}

function removeItem(i){
    userCart[0].order=userCart[0].order.filter((el,idx)=>idx!==i)
    window.localStorage.setItem('cart',JSON.stringify(userCart))
    renderOrder(userCart)
    actualizarBadge()

}

function closeOrder(){
    document.getElementById('main-orders').classList.remove('visible')

}

actualizarBadge()