const cardsContainer = document.getElementById('card-container');


if(!usersList || usersList.length===0) {
    window.localStorage.setItem('users',JSON.stringify([{
        fullname:'Admin',
        email:'admin@admin.com',
        password:'Alfabeta1.',
        role:'ADMIN_ROLE',
        bornDate:new Date().toLocaleDateString().slice(0,10),
        creationDate:new Date().toLocaleDateString().slice(0,10)
    }]))
    window.location.reload()

}

if (!products || products.length===0) {
    let initProducts = [
        {
        id: 1,
        name: "Vela Thálassa",
        price: "2500",
        resume:
            "Para disfrutar de su luz y aroma a vainilla, esta vela de soja ha sido elaborada artesanalmente cuidando sus detalles para hacerla única. En ella se busca reflejar, como su nombre lo indica, toda la magia del mar.",
        description: "",
        thumbnail: "/assets/images/sea-candle.png",
        images: ["/assets/images/arch-candle.png"],
        category: "velas",
        stock: 10,
        favorite:true,
        createdat:Date.now()


        },
        {
            id: 2,
            name: "VELA EFFRADEIA",
            price: "2700",
            resume:
            "Con aroma a coco, prepara y perfuma el ambiente para crear momentos de calma, armonía y bienestar. De diseño fluido y gran durabilidad, esta vela de cera vegetal es la compañía perfecta para cualquier espacio.",
            description: "",
            thumbnail: "/assets/images/shapes-candle.png",
            images: ["/assets/images/arch-candle.png"],
            category: "velas",
            stock: 5,
            favorite:false,
            createdat:Date.now()
        },
        {
            id: 3,
            name: "VELA ZESTASIÁ",
            price: "3000",
            resume:
            "Llamada calidez, este diseño presenta notas amaderadas y florales. Ideal para crear esos instantes de encuentro con uno mismo y disfrutar de su luz. También disponible en su versión mango y maracuyá.",
            description: "",
            thumbnail: "/assets/images/wind-candle.png",
            images: ["/assets/images/arch-candle.png"],
            category: "velas",
            stock: 3,
            favorite:true,
            createdat:Date.now()
        },
        {
            id: 4,
            name: "VELA CICLOS",
            price: "3500",
            resume:
            "Con doble pabilo 100% ecológico para que su consumo se de parejamente, desea brindar ese detalle minimalista que embellece cualquier espacio. Cuenta con aroma a peonias y flores blancas, una fragancia clásica, fresca y elegante.",
            description: "",
            thumbnail: "/assets/images/circle-candle.png",
            images: ["/assets/images/arch-candle.png"],
            category: "velas",
            stock: 8,
            favorite:false,
            createdat:Date.now()
        },
        {
            id: 5,
            name: "VELA GRAVÁTES",
            price: "3000",
            resume:
            "Elaborada en cera vegetal, se conjuga en uno de nuestros diseños mas complejos. Confeccionada 100% a mano y con esencias que dejarán un suave aroma a frambuesas. Compañera ideal para momentos especiales.",
            description: "",
            thumbnail: "/assets/images/knot-candle.png",
            images: ["/assets/images/arch-candle.png"],
            category: "velas",
            stock: 3,
            favorite:false,
            createdat:Date.now()
        },
        {
            id: 6,
            name: "VELA DIUMOS",
            price: "2500",
            resume:
            "Fomada por líneas que simulan suaves movimientos, este diseño en cera de soja cuenta con olor a café y caramelo. Destacada tanto por su fragancia como por su originalidad. Disfrutala también en aroma naranja y canela.",
            description: "",
            thumbnail: "/assets/images/large.candle.png",
            images: ["/assets/images/arch-candle.png"],
            category: "velas",
            stock: 12,
            favorite:false,
            createdat:Date.now()
        },
        {
            id: 7,
            name: "VELA AERÁKI",
            price: "3200",
            resume:
            "Con su versatilidad busca reflejar el viento. Está confeccionada en cera de soja, con aceites aromáticos de verbena y limón. Vertida y terminada a mano, cuidando cada uno de sus detalles.",
            description: "",
            thumbnail: "/assets/images/feather-candle.png",
            images: ["/assets/images/arch-candle.png"],
            category: "velas",
            stock: 4,
            favorite:true,
            createdat:Date.now()
        },
        {
            id: 8,
            name: "VELA ZEI",
            price: "3000",
            resume:
            "Trabajada artesanalmente y con estilo bombé, esta vela cuenta con aroma a té blanco y jengibre. Innovadora y delicada, es realizada con un pabilo de algodón 100% ecológico al igual que el resto de nuestros productos.",
            description: "",
            thumbnail: "/assets/images/lines-candle.png",
            images: ["/assets/images/arch-candle.png"],
            category: "velas",
            stock: 1,
            favorite:true,
            createdat:Date.now()
        },
        {
            id: 9,
            name: "VELA IRIS",
            price: "2800",
            resume:
            "Siendo la combinación perfecta para decorar y perfumar, llega esta vela con su aroma a lavanda y tilo. Una fragancia que vamos a desear permanezca mucho tiempo. Incluye dos pabilos, para que al utilizarla no pierda su figura.",
            description: "",
            thumbnail: "/assets/images/arch-candle.png",
            images: ["/assets/images/arch-candle.png"],
            category: "velas",
            stock: 11,
            favorite:false,
            createdat:Date.now()
        },
        {
            id: 10,
            name: "VELA NERÓ",
            price: "2200",
            resume:
            "Inspirada en el agua y con suaves notas de manzana y canela, esta vela conjuga delicadeza y sencillez. Combinable con cualquier ambiente y decoración. Disfrutala también en su versión vainilla.",
            description: "",
            thumbnail: "/assets/images/water-candle.png",
            images: ["/assets/images/arch-candle.png"],
            category: "velas",
            stock: 11,
            favorite:false,
            createdat:Date.now()
        },
        {
            id: 11,
            name: "ESCULTURA NIX",
            price: "9600",
            resume:
            "Tallada a mano en una sola pieza de piedra blanca, esta escultura abstracta se entreteje creando una forma única y fluida. Busca simular un movimiento continuo e infinito. Sus medidas son 30cm de alto y 45cm de ancho.",
            description: "",
            thumbnail: "/assets/images/sculpture.png",
            images: ["/assets/images/arch-candle.png"],
            category: "Esculturas",
            stock: 1,
            favorite:false,
            createdat:Date.now()
        },
        {
            id: 12,
            name: "BASE HELIOS",
            price: "5800",
            resume:
            "Sumándose a la Línea Voltaire de arte y esculturas, llega esta base realizada en cerámica artesanal con acabado semi-laqueado y detalles en su pie. Completamente hecha a mano. Exclusiva y delicada.",
            description: "",
            thumbnail: "/assets/images/deco-dish.png",
            images: ["/assets/images/arch-candle.png"],
            category: "Esculturas",
            stock: 1,
            favorite:false,
            createdat:Date.now()
        },
        {
            id: 13,
            name: "CUADRO ZADIG",
            price: "18000",
            resume:
            "Los protagonistas de cualquier habitación seguramente sean los movimientos y texturas de este cuadro, realizado en yeso, con técnicas únicas y contemporáneas. Sus medidas son 40cm de alto y 60cm de ancho. ",
            description: "",
            thumbnail: "/assets/images/frame-art-2.png",
            images: ["/assets/images/arch-candle.png"],
            category: "Cuadros",
            stock: 1,
            favorite:false,
            createdat:Date.now()
        },
        {
            id: 14,
            name: "CUADRO MONROE",
            price: "25000",
            resume:
            "Otro de los íconos de la Línea Voltaire, es este abstracto realizado en yeso que combina la planitud de un cuadro con el relieve de las esculturas. Sus diferentes niveles, con terminaciones talladas a mano, llegan a formar la esencia del mismo y sus figuras, quedan libres a nuestra interpretación. Sus medidas son 40cm de alto y 45cm de ancho. ",
            description: "",
            thumbnail: "/assets/images/frame-art.png",
            images: ["/assets/images/arch-candle.png"],
            category: "Cuadros",
            stock: 1,
            favorite:true,
            createdat:Date.now()
        },
    ];
    window.localStorage.setItem("products", JSON.stringify(initProducts));
    window.location.reload()
}


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
    if(!currentUser){
        showAlert('Para poder agregar productos a su carro de compras, debe ingresar a su cuenta. Si aún no posee una, puede hacerlo en la seccion REGISTRARSE del menu superior.',null,8000)
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
            quantity:1
        })
    }
    
    window.localStorage.setItem('cart',JSON.stringify(userCart))
    renderOrder(userCart)
    actualizarBadge(userCart)
    showAlert('Producto agregado al carro de compras correctamente.','ok')
}


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


renderizarProductos(products)