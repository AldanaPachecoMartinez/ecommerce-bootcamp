const badgeHTML = document.getElementById('cart-count');
function actualizarBadge() {
    let actualCart=JSON.parse(window.localStorage.getItem('cart'))
    
    badgeHTML.innerText = actualCart[0].order.reduce((acc, producto) => acc += producto.quantity , 0);
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
    <button class="check-out-btn">Check Out</button>
</div>
    `

    let orderHeader = `
    <div class='order-header-container'>
    <i class="fa-solid fa-xmark fa-xl" onclick='closeOrder()'></i>
    </div>
    `


    mainOrders.innerHTML= orderHeader + '<div class="order-prodcuts-container">'+ productsInOrder.join('') + '</div>' + orderFooter 
}

function modifyQuantity(operator,i){
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