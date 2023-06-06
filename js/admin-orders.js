d = document

function renderizarOrdenes(orders) {

    let orders = orders?.map((el,i)=>{
        
        return(
        `
        <tr>
        <td>${el.fullName}</td>
        <td>${el.email}</td>
        <td>${formatearFecha(el.bornDate)}</td>
        <td>
            <select name="role" id="role-selector" onchange="handleRole(event,${i})">
            <optgroup>
                ${
                    roleOptions.map(e=>{
                        return(
                        `<option value=${e.value} ${(e.value===el.role) ? 'selected' : ''} >${e.name}</option>`
                        )
                    })
                }
            </optgroup>
            </select>
        </td>
        <td>${formatearFecha(el.createdAt)}</td>
        <td>
            <button class="user__action-btn" onclick='handleEdit(${JSON.stringify(el)})'><i class="fa-regular fa-pen-to-square"></i></button>
    
            <button class="user__action-btn" onclick='handleDelete(${JSON.stringify(el._id)})'>
                <i class="fa-solid fa-trash-can"></i>
            </button> 
        </td>
        
        </tr>
        `
    
        )
    })

}

d.getElementById('search-orders').innerHTML=`
<input type="text" placeholder="Buscar órdenes" onkeyup='handleBuscar(event)' id='orders-search-input' value=${query}>
<button onclick='handleBuscar(event)' id='btn-search-products'>Buscar</button>
<button onclick='cleanSearch()' class="limpiar-busqueda">X</button>`

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