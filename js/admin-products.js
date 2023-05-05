const d = document;



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
    showConfirm(`¿Desea eliminar el producto ${el.name}?`,'Si presion aceptar, el mismo se eliminará definitivamente.',()=>deleteProduct(i))
}

function deleteProduct(i){
    let refreshProducts=JSON.parse(window.localStorage.getItem('products'))
    let newProducts=refreshProducts.filter((product,idx)=> idx !== i)
    window.localStorage.setItem('products',JSON.stringify(newProducts))
    renderProducts(newProducts)

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