const d = document;
const paginacion = d.getElementById('paginacion-products');
let currentPage=1
let query=''
let totalResults=0

if(!window.localStorage.getItem('currentUser')){
    window.location.href ='/index.html';
    console.log('salir')
}

const formContainer= d.getElementById("form-container")
const formProducts= d.getElementById("product-form")


const renderProducts = (products) => {
    let filas = products.map((el) => {
    return `
    
    <tr>
    <td>${el._id}</td>
    <td>${el.name}</td>
    <td>${el.price}</td>
            <td class="long-text">${el.resume}</td> 
            <td class="long-text">${el.description}</td>
            <td>
            <img src='${URL}/upload/products/${el.thumbnail}' class="img-product-table" />
            </td>
            <td> 
            ${
                el.images.map(src=> `<img src="${URL}/upload/products/${src}" class="img-product-table"></img>`)
            }
            </td>
            <td>${el.category}</td>
            <td>${el.stock}</td>
            <td>
            <div class='btns-table'>
            <button id="fav-btn" class='btn-fav ${(el.favorite) ? 'favorite' : ''}' onclick='handleFav(${JSON.stringify(el)})'><i class="fa-regular fa-star"></i></button>
            <button id="edit-product" class ="btn-edit"onclick='handleEdit(${JSON.stringify(el)})'><i class="fa-solid fa-pen-to-square"></i></button>
            <button id="edit-product" class="btn-delete"onclick='handleDelete(${JSON.stringify(el)})'><i class="fa-regular fa-trash-can"></i></button>
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
    <input type="hidden" name="_id" required >
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
<label for="imagesInput">Imágenes</label>
<input type="file" name="file" id="imagesInput" class= "input-form-products" multiple
required>
</div>
<div id='images-selector'></div>
<p class='img-aclaration'>La imagen que seleccione como favorita quedará como portada del producto</p>

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

async function deleteImage (evt,img){
    evt.preventDefault()
    const token = window.localStorage.getItem('token')
    try {
        let resp= await axios.delete(`${URL}/products/image/${img}`,{
            headers:{Authorization:token}
        })
    
        const msg = resp.data.msg;
        showAlert(msg, 'success', 2500)
    } catch (error) {
        console.log(error);
        showAlert(error.response.data.msg, 'error', 3000);
    }
}

const handleEdit =(el)=>{
    const formProducts= d.getElementById("product-form")
    formProducts.dataset.mode='edit'
    formProducts['submit-btn'].innerHTML='Editar'
    d.getElementById('form-title').innerHTML='Editar Producto'
    formContainer.classList.add('visible')
    Object.entries(el).forEach(([key,value])=>{
        if(formProducts[key]){
            formProducts[key].value=value
        }
if(key==='images'){
    let renderImage = value.map(img=>`<div class='img-card'>
    <img src="${URL}/upload/products/${img}"} class='image-sel'>
    <button class='img-card__del' onclick=deleteImage(event,'${img}')><i class="fa-solid fa-xmark"></i></button>
    <button class='img-card__fav'>${(el.thumbnail===img)? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star">'}</i></i></button>
    </div>
    `).join('')
    d.getElementById('images-selector').innerHTML=renderImage + '<button class="add-image"><i class="fa-solid fa-circle-plus"></i></button>'
}
    })
    
}

const handleClean =()=>{
    const formProducts= d.getElementById("product-form")
    formProducts.dataset.mode='add'
    formProducts['submit-btn'].innerHTML='Agregar'
    d.getElementById('form-title').innerHTML='Agregar Producto'
    formProducts.reset()
}


function handleDelete (el){
    showConfirm(`¿Desea eliminar el producto ${el.name}?`,'Si presion aceptar, el mismo se eliminará definitivamente.',()=>deleteProduct(el._id))
}

async function deleteProduct(id){
const token=window.localStorage.getItem('token')
try {
    let resp= await axios.delete(`${URL}/products/${id}`,{
        headers:{Authorization:token}
    })

    const msg = resp.data.msg;
    showAlert(msg, 'success', 2500)
    printProducts();
} catch (error) {
    console.log(error);
    showAlert(error.response.data.msg, 'error', 3000);
}    

}

async function handleFav (el){
    const token=window.localStorage.getItem('token')
    let newValue= (!el.favorite)

try {
    let resp= await axios.put(`${URL}/products/${el._id}`,
    {favorite:newValue},{
        headers:{Authorization:token}
    })

    const msg = `El producto fue ${(newValue) ? 'agregado a' : 'quitado de'} sus favoritos`
    showAlert(msg, 'success', 2500)
    printProducts();
} catch (error) {
    console.log(error);
    showAlert(error.response.data.msg, 'error', 3000);
}    

}

async function handleSubmit(evt) {
    evt.preventDefault();
    const element = evt.target.elements;

    if(evt.target.dataset.mode==='add'){

        let newProduct= new FormData() 
        newProduct.append('name',element.name.value)
        newProduct.append('description',element.description.value)
        newProduct.append('price',element.price.value)
        newProduct.append('resume',element.resume.value)
        newProduct.append('category',element.category.value)
        newProduct.append('stock',element.stock.value)
        newProduct.append('favorite',false)
        for (var i = 0; i < element.file.files.length; i++) {
            var file = element.file.files[i];
            newProduct.append('file', file);
        }
        

        try {
            const token = window.localStorage.getItem('token');
            const resp = await axios.post(`${URL}/products`, newProduct, {headers: {
                Authorization: token,
                'Content-Type': 'multipart/form-data'},
            })
            const msg = resp.data.msg;
            showAlert(msg, 'success', 2500)
        } catch (error) {
            console.log(error);
        showAlert(error.response.data.msg, 'error',3000);
        }
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
<input type="text" placeholder="Buscar productos" onkeyup='handleBuscar(event)' id='products-search-input' value=${query}>
<button onclick='handleBuscar(event)' id='btn-search-products'>Buscar</button>
<button onclick='cleanSearch()' class="limpiar-busqueda">X</button>
`
const gralContainer = d.querySelector('.container-pt');
const result = d.getElementById('search-product-result');

async function handleBuscar(evt){
    
    if(evt.keyCode !==13 && evt.target.id !== 'btn-search-products'){
        return
    }
    const searchValue=d.getElementById('products-search-input').value.toLowerCase()

    query=searchValue
    await printProducts()
result.style.display='flex'
    if(!totalResults > 0) {
        gralContainer.style.display = "none";
        result.innerHTML = `No se encontraron resultados`
    }else{
        
        gralContainer.style.display = "flex";
        if(totalResults===1){
        result.innerHTML=`Se encontró 1 resultado `
            
        }else{
            result.innerHTML=`Se encontraron ${totalResults} resultados`

        }

    }
}

async function cleanSearch(){
    gralContainer.style.display = "flex";
    d.getElementById('products-search-input').value=''
result.style.display='none'

    query=''
    page=0
    printProducts()
}

const handlePage=async(signo,maxPages)=>{
    if(signo === '-' && currentPage ===1 ){
        return
    }
    if(currentPage===maxPages && signo==='+'){return}
    currentPage += (signo==='+') ? 1 : -1
    await printProducts()
}
function renderPaginacion() {

    const limit=15
    let maxPages=Math.ceil((totalResults/limit))
if(maxPages>1){
    paginacion.innerHTML = `
    <div>
    <button onclick=handlePage('-',${maxPages})><i class="fa-solid fa-chevron-left"></i></button> 
    <input type="number" max=${maxPages} min=1 value=${currentPage}> 
    <button onclick=handlePage('+',${maxPages})><i class="fa-solid fa-chevron-right"></i></button>
    </div>
    `
}else{
    paginacion.innerHTML = ``
}
}

async function obtenerProductos(page = 0, search = ''){
    const response  = await axios.get(`${URL}/products?page=${page}&search=${search}`)
    .then(res=>{
        return res.data
    })
    .catch(err=>console.log(err))
totalResults=response.totalFound
renderPaginacion(response.totalFound)
return response.findProducts
}


async function printProducts() {
    productsList = await obtenerProductos(currentPage-1,query);
    renderProducts(productsList)
}

printProducts();

