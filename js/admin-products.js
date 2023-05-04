const d = document;

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

if(!window.localStorage.getItem('currentUser')){
    window.location.href ='/index.html';
    console.log('salir')
}

const formContainer= d.getElementById("form-container")
const formProducts= d.getElementById("product-form")


const renderProducts = (products) => {
    let filas = products.map((el, i) => {
    return `
    
    <tr>
    <td>${el.id}</td>
    <td>${el.name}</td>
    <td>${el.price}</td>
            <td class="long-text">${el.resume}</td> 
            <td class="long-text">${el.description}</td>
            <td>
            <img src=${el.thumbnail} class="img-product-table" />
            </td>
            <td> <img src="${el.images}" class="img-product-table"></td>
            <td>${el.category}</td>
            <td>${el.stock}</td>
            <td>
            <div class='btns-table'>
            <button id="fav-btn" class='btn-fav ${(el.favorite) ? 'favorite' : ''}' onclick='handleFav(${JSON.stringify(el)},${i})'><i class="fa-regular fa-star"></i></button>
            <button id="edit-product" class ="btn-edit"onclick='handleEdit(${JSON.stringify(el)})'><i class="fa-solid fa-pen-to-square"></i></button>
            <button id="edit-product" class="btn-delete"onclick='handleDelete(${JSON.stringify(el)},${i})'><i class="fa-regular fa-trash-can"></i></button>
        </div>
            
            </td>
            </tr>

            
            `;
    }).join('');

    d.getElementById("products-rows").innerHTML = filas;
};

function showForm() {
    formContainer.classList.add('visible');
}

function removeForm() {
    formContainer.classList.remove('visible');
    handleClean()
}

formContainer.innerHTML = `

<button class = "close-modal" onclick="removeForm()">X</button>
<h3 id='form-title'>Agregar Producto</h3>
<form class="product-form" id="product-form" onsubmit="handleSubmit(event)" data-mode='add'>

<div class="input-box">
    <input type="hidden" name="id" required >
    <input type="hidden" name="favorite" >
</div>

<div class="input-box">
    <label for="nameInput">Nombre Producto</label><br>
    <input type="text" name="name" id="nameInput" class= "input-form-products" required >
</div>

<div class="input-box">
    <label for="priceInput">Precio</label><br>
    <input type="number" name="price" id="priceInput" class= "input-form-products" required>
</div>

<div class="input-box">
    <label for="resumeInput">Resumen</label><br>
    <textarea name="resume" id="resumeInput" rows="4" max-lenght="4" min-lenght="80" class ="textarea-form"></textarea>
</div>

<div class="input-box">
    <label for="descriptionInput">Descripción</label><br>
    <textarea name="description" id="descriptionInput" rows="5" class ="textarea-form"></textarea>
</div>

<div class="input-box">
    <label for="thumbnailInput">Portada</label>
    <input type="text" name="thumbnail" id="thumbnlailInput" class= "input-form-products" 
    required>
</div>

<div class="input-box">
<label for="imagesInput">Imagenes</label>
<input type="text" name="images" id="imagesInput" class= "input-form-products" 
required>
</div>

<div class="input-box">
    <label for="categoryInput">Categoría</label><br>
    <input type="text" name="category" id="categoryInput" class= "input-form-products" required >
</div>

<div class="input-box">
    <label for="stockInput">Stock</label><br>
    <input type="number" name="stock" id="stockInput" class= "input-form-products" required>
</div>

<div class = "container-btns-fp">
<button type="submit" class="submit-btn" id="submit-btn">Agregar</button>
<button class="clean-btn" id="clean-btn" onclick='handleClean()'>Limpiar</button>
</div>

</form>
`;


const handleEdit =(el)=>{
    const formProducts= d.getElementById("product-form")
    formProducts.dataset.mode='edit'
    formProducts['submit-btn'].innerHTML='Editar'
    d.getElementById('form-title').innerHTML='Editar Producto'
    formContainer.classList.add('visible')

    Object.entries(el).forEach(([key,value])=>{
        formProducts[key].value=value
    })
    
}

const handleClean =()=>{
    const formProducts= d.getElementById("product-form")
    formProducts.dataset.mode='add'
    formProducts['submit-btn'].innerHTML='Agregar'
    d.getElementById('form-title').innerHTML='Agregar Producto'
    formProducts.reset()
}

const getNewId = () =>{
    let maxId=0
    products.forEach((el)=>{
        maxId=(el.id>maxId) ? el.id : maxId
    })
    return maxId + 1
}

function handleDelete (el,i){
    console.log(el)
    showConfirm(`¿Desea eliminar el producto ${el.name}?`,'Si presion aceptar, el mismo se eliminará definitivamente.',()=>deleteProduct(i))
}

function deleteProduct(i){

    window.localStorage.setItem('products',JSON.stringify(products.filter((product,idx)=> idx !== i)))
    renderProducts(products.filter((product,idx)=> idx !== i))

}

function handleFav (el,i){
    el['favorite'] = !(el?.favorite)
    products[i]=el
    window.localStorage.setItem('products',JSON.stringify(products))
    renderProducts(products)
}

function handleSubmit(evt) {
    evt.preventDefault();
    const element = evt.target.elements;

    if(evt.target.dataset.mode==='add'){
        const newProduct = {
            id: getNewId(),
            name : element.name.value ,
            description : element.description.value,
            price : element.price.valueAsNumber ,
            resume:element.resume.value,
            thumbnail: element.thumbnail.value,
            images: element.images.value,
            category: element.category.value,
            stock: element.stock.valueAsNumber,
            favorite:false
        };

        products.push(newProduct)
        window.localStorage.setItem('products',JSON.stringify(products))
        renderProducts(products)
        handleClean()
        formContainer.classList.remove('visible')

        return;
    }
    if(evt.target.dataset.mode==='edit'){
        let IndexToReplace=products.findIndex(e=>
            e.id==element.id.value
        )
        console.log(IndexToReplace)

        const newProduct = {
            id: element.id.value,
            name : element.name.value ,
            description : element.description.value,
            price : element.price.valueAsNumber ,
            resume:element.resume.value,
            thumbnail: element.thumbnail.value,
            images: element.images.value,
            category: element.category.value,
            stock: element.stock.valueAsNumber,
            favorite:element.favorite.value
        };

        products[IndexToReplace]=newProduct
        window.localStorage.setItem('products',JSON.stringify(products))
        renderProducts(products)
        handleClean()
        formContainer.classList.remove('visible')

        return;
    }
}

d.getElementById('search-product').innerHTML=`
<input type="text" placeholder="Buscar productos" onkeyup='handleBuscar(event)' id='products-search-input'>
<button onclick='handleBuscar(event)' id='btn-search-products'>Buscar</button>
<button onclick='cleanSearch()' class="limpiar-busqueda">X</button>
`

function handleBuscar(evt){
    if(evt.keyCode !==13 && evt.target.id !== 'btn-search-products'){
        return
    }
    const searchValue=d.getElementById('products-search-input').value.toLowerCase()
    let searchResults = products.filter((el)=>{
        return el.name.toLowerCase().includes(searchValue) ||
        el.category.toLowerCase().includes(searchValue) ||
        el.description.toLowerCase().includes(searchValue) ||
        el.price.toLowerCase().includes(searchValue) ||
        el.resume.toLowerCase().includes(searchValue) 
    })

    renderProducts(searchResults)
}

function cleanSearch(){
    renderProducts(products)
    d.getElementById('products-search-input').value=null
}

renderProducts(products);