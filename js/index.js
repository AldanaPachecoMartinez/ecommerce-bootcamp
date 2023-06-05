const cardsContainer = document.getElementById('card-container');


if (!products || products.length===0) {
    let initProducts = [
        {
        id: 1,
        name: "Vela Thálassa",
        price: "2500",
        resume:
            "Para disfrutar de su luz y aroma a vainilla, esta vela de soja ha sido elaborada artesanalmente cuidando sus detalles para hacerla única. En ella se busca reflejar, como su nombre lo indica, toda la magia del mar.",
        description: "Creada para despertarnos esa sensación de calidez y paz, propio del mar. Disponible en aroma: vainilla, manzana y canela y flores blancas. Thálassa es definitivamente de las más buscadas. Cuenta con un pabilo que llega hasta su base para un uso parejo, y sus medidas son 25cm x 10cm.",
        thumbnail: "/assets/images/sea-candle.png",
        images: ["/assets/details-images/sea-candle1.jpeg", "/assets/details-images/sea-candle2.jpeg"],
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
            description: "Effradeia es única por sus detalles. Cuenta con aroma a coco y su pabilo 100% ecológico llega hasta su base. Exclusiva y refinada. Sus medidas son 20cm x 15cm.",
            thumbnail: "/assets/images/shapes-candle.png",
            images: ["/assets/details-images/effradeia2.jpeg","/assets/details-images/effradeia1.jpeg"],
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
            description: "Las palabras están de más, cuando su diseño lo dice todo. Sus curvas buscan dar una idea de fluidez y movimiento. Disponible en aroma lima y verbena y mango y maracuyá. Frutal y fresca. Sus medidas son 15cm x 10cm aproximadamente.",
            thumbnail: "/assets/images/wind-candle.png",
            images: ["/assets/details-images/zestasia1.jpeg", "/assets/details-images/zestasia2.jpeg"],
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
            description: "De nuestras velas más grandes y duraderas, llega Ciclos, con doble pabilo 100% ecológico y confeccionada en cera vegetal cuidando que mantenga su figura durante todo el consumo. Sus medidas son 35cm x 25cm.",
            thumbnail: "/assets/images/circle-candle.png",
            images: ["/assets/details-images/ciclos1.jpeg", "/assets/details-images/ciclos2.png"],
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
            description: "De diseño complejo y que simula un entrelazado infinito. Gran detalle para cualquier espacio. Disponible en sus fragancias garndenia, lavanda y frambuesas. Las medidas son: 20cm x 12cm",
            thumbnail: "/assets/images/knot-candle.png",
            images: ["/assets/details-images/gravates1.jpeg", "/assets/details-images/gravates2.jpeg"],
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
            description: "Su figura asimétrica brinda un toque especial a sus lineas, diseñadas para combinar a la perfección. Sumamente solicitada por su aroma a café y caramelo. Las medidas son: 18cm x 12cm. ",
            thumbnail: "/assets/images/large.candle.png",
            images: ["/assets/details-images/diumos1.png", "/assets/details-images/diumos2.jpeg"],
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
            description: "Trabajada en detalle, viene también en su otra versión. Ambas disponibles con sus esencias aromáticas de incienso, madera de cedro y canela y naranja. Sus medidas son aproximadamente: 20cm x 10cm. ",
            thumbnail: "/assets/images/feather-candle.png",
            images: ["/assets/details-images/aeraki1.jpeg", "/assets/details-images/aeraki2.jpeg"],
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
            description: "Zei simula ser una gota de agua, pero trabajada en detalle. De lineas definidas, que le brindan un acabado minimalista. Disponible también en su versión large, una dupla que no puede faltar.",
            thumbnail: "/assets/images/lines-candle.png",
            images: ["/assets/details-images/zei1.jpeg", "/assets/details-images/zei2.jpeg"],
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
            description: "Iris es ese momento de relajación que sentimos al contemplar su luz. Su esencia aromática es ideal para crear momentos de descanso y renovación. También disponible en color oliva. Sus medidas son 25cm x 20cm",
            thumbnail: "/assets/images/arch-candle.png",
            images: ["/assets/details-images/arch1.jpeg", "/assets/details-images/arch2.png"],
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
            description: "Su sencillez combina con todo. Disponible también en aroma vainilla y lavanda. Confeccionada en cera de soja y con pabilo 100% vegetal. Sus medidas son 11cm x 7cm",
            thumbnail: "/assets/images/water-candle.png",
            images: ["/assets/details-images/nero1.jpeg", "/assets/details-images/nero2.jpeg"],
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
            description: "Con múltiples usos como el que podemos observar, es protagonista en cualquier espacio. Su diseño se basa en un único movimiento ininterrumpido que se entrelaza, brindando un acabado minimalista y moderno.",
            thumbnail: "/assets/images/sculpture.png",
            images: ["/assets/details-images/nix1.png", "/assets/details-images/nix2.jpeg"],
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
            description: "Delicada y multiusos. En ella podemos realizar hermosas combinaciones de velas o depositar cualquier objeto que deseemos como frutas por ejemplo. Un detalle fino y sumamente útil.",
            thumbnail: "/assets/images/deco-dish.png",
            images: ["/assets/details-images/helios1.webp", "/assets/details-images/helios2.webp"],
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
            description: "Sumamente volátil y fácil de combinar en cualquier espacio. Aquí podemos ver en detalle su confección, con mucha dedicación, como todo objeto de arte. Una combinación refinada de figuras, arte y fluidez, con mucho para apreciar.",
            thumbnail: "/assets/images/frame-art-2.png",
            images: ["/assets/details-images/zadig1.jpeg", "/assets/details-images/zadig2.jpeg"],
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
            description: "Nada más para contar que este cuadro no pueda mostrar por sí mismo. Un objeto para apreciar y contemplar. Esta obra exclusiva, se realiza a pedido del cliente.",
            thumbnail: "/assets/images/frame-art.png",
            images: ["/assets/details-images/monroe1.jpeg", "/assets/details-images/monroe2.jpeg"],
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
    if(searchResults.length > 1) {document.querySelector('.section-cards__products-count').innerHTML = `Se encontraron ${searchResults.length} productos`}
    else{ document.querySelector('.section-cards__products-count').innerHTML = `Se encontró 1 producto`}
    if(searchResults.length === 0) {document.querySelector('.section-cards__products-count').innerHTML = `No se encontraron productos. Puede buscar con palabras similares.`}

    renderizarProductos(searchResults)
}

function cleanSearchIndex(){
    renderizarProductos(products)
    document.getElementById('search-product-index').value=null
}


renderizarProductos(products)