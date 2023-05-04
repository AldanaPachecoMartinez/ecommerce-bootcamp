const d = document;
const formChargeUser = d.getElementById('form-users');

if(!window.localStorage.getItem('currentUser')){
    window.location.href ='/index.html';
    console.log('salir')
}

let usersList = JSON.parse(window.localStorage.getItem('users'));

const roleOptions=[
    {value:'ADMIN_ROLE',name:'ADMIN'},
    {value:'USER_ROLE',name:'USER'},
    {value:'SUPERADMIN_ROLE',name:'SUPERADMIN'}
]

formChargeUser.innerHTML = `
<button class = "close-modal" onclick="removeFormUser()">X</button>
<h3 id='form-title'>Agregar Usuario</h3>
<form class="product-form" id="product-form" onsubmit="handleSubmit(event)" data-mode='add'>

<div class="input-box">
    <label for="nameInput">Nombre Completo</label><br>
    <input type="text" name="name" id="nameInput" class= "input-form-products" max-length="100" min-length="4" required>
</div>

<div class="input-box">
<label for="emailInput">E-mail</label> <br>
<input type="text" name="email" id="emailInput" class= "input-form-products" max-length="100" min-length="4" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
</div>

<div class="input-box">
    <label for="bornInput">Fecha de Nacimiento</label><br>
    <input type="date" name="born" id="bornInput" class= "input-form-products" max="2023-05-10" min="1920-01-01" required>
</div>

<div class="input-box">
<label for="roleSelector">Rol</label>
<select name="rol" id="roleSelector" class ="role-selector">
<optgroup>
    <option value="USER_ROLE">USER</option>
    <option value="ADMIN_ROLE">ADMIN</option>
    <option value="SUPERADMIN_ROLE">SUPERADMIN</option>
</optgroup>
</select>
</div>


<div class="input-box">
<label for="createdInput">Fecha de Creación</label>
<input type="date" name="createdAt" id="createdInput" class="input-form-products" max="2023-05-10" min="1920-01-01" required>
</div>

<div class = "container-btns-fp">
<button type="submit" class="submit-btn" id="submit-btn" onclick="handleSubmitUser(event)">Agregar</button>

<button class="clean-btn" id="clean-btn" onclick='handleClean()'>Limpiar</button>
</div>
`;
function showFormUser() {
    formChargeUser.classList.add('visible');
}

function removeFormUser() {
    formChargeUser.classList.remove('visible');
    handleCleanUser()
}

const handleCleanUser =()=>{
    const formChargeUser= d.getElementById("product-form")
    formChargeUser.dataset.mode='add'
    formChargeUser['submit-btn'].innerHTML='Agregar'
    d.getElementById('form-title').innerHTML='Agregar Producto'
    formChargeUser.reset()
}


function handleSubmitUser(evt) {
    evt.preventDefault();
    const element = evt.target.elements;

    if(evt.target.dataset.mode==='add'){
        const newUser = {
            fullname : element.name.value ,
            email : element.email.value,
            bornDate : element.born.valueAsNumber ,
            password:element.email.value,
            password2: element.email.value,
            role: element.rol.value,
        };

        usersList.push(newUser)
        window.localStorage.setItem('users',JSON.stringify(usersList))
        renderizarUsuarios(usersList)
        handleCleanUser()
        formChargeUser.classList.remove('visible')

        return;
    }
    if(evt.target.dataset.mode==='edit'){
        let IndexToReplace=products.findIndex(e=>
            e.id==element.id.value
        )

        const newProduct = {
            fullname : element.name.value ,
            email : element.email.value,
            bornDate : element.born.valueAsNumber ,
            role: element.rol.value,
        };

        products[IndexToReplace]=newProduct
        window.localStorage.setItem('products',JSON.stringify(products))
        renderProducts(products)
        handleClean()
        formContainer.classList.remove('visible')

        return;
    }
}
const handleEdit =(el)=>{
    const formChargeUser= d.getElementById("product-form")
    formChargeUser.dataset.mode='edit'
    formChargeUser['submit-btn'].innerHTML='Editar'
    d.getElementById('form-title').innerHTML='Editar Producto'
    formChargeUser.classList.add('visible')

    Object.entries(el).forEach(([key,value])=>{
        formChargeUser[key].value=value
    })
    
}

function handleDelete(i){
    showConfirm('Desea borrar el usuario?', 'Si presiona el botón Aceptar el usuario se habrá borrado definitivamente', ()=>deleteUser(i))
}

function deleteUser(i){
    let newUsers = usersList.filter((el,inx)=>{return inx!==i})
    window.localStorage.setItem('users',JSON.stringify(newUsers))
    renderizarUsuarios(newUsers)
    
}

function handleRole(event,i){

    showConfirm(`¿Desea cambiar el rol del usuario ${usersList[i].fullname}?`, `Si presiona aceptar cambiará su rol de ${usersList[i].role} a ${event.target.value}`, () => changeRole(event,i))
    
}

function changeRole(event, i) {
    usersList[i].role=event.target.value
    window.localStorage.setItem('users',JSON.stringify(usersList))
}

function renderizarUsuarios(usersList) {

let usersRows = usersList.map((el,i)=>{

    return(
    `
    <tr>
    <td>${el.fullname}</td>
    <td>${el.email}</td>
    <td>${new Date(el.bornDate).toLocaleDateString()}</td>
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
    <td></td>
    <td>
        <button class="user__action-btn"><i class="fa-regular fa-pen-to-square"></i></button>
        <button class="user__action-btn" onclick="handleDelete(${i})">
            <i class="fa-solid fa-trash-can"></i>
        </button> 
    </td>
    
    </tr>
    `

    )
})

d.getElementById('users-rows').innerHTML = usersRows.join('')

}

renderizarUsuarios(usersList)





