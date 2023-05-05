const d = document;
const formChargeUser = d.getElementById('form-users');

if(!window.localStorage.getItem('currentUser')){
    window.location.href ='/index.html';
}


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
    <input type="text" name="fullname" id="nameInput" class= "input-form-products" max-length="100" min-length="4" required>
</div>

<div class="input-box">
<label for="emailInput">E-mail</label> <br>
<input type="text" name="email" id="emailInput" class= "input-form-products" max-length="100" min-length="4" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
</div>

<div class="input-box">
    <label for="bornInput">Fecha de Nacimiento</label><br>
    <input type="date" name="bornDate" id="bornInput" class= "input-form-products" max="2023-05-10" min="1920-01-01" required>
</div>

<div class="input-box">
<label for="roleSelector">Rol</label>
<select name="role" id="roleSelector" class ="role-selector">
<optgroup>
    <option value="USER_ROLE">USER</option>
    <option value="ADMIN_ROLE">ADMIN</option>
    <option value="SUPERADMIN_ROLE">SUPERADMIN</option>
</optgroup>
</select>
</div>


<div class="input-box">
<label for="createdInput">Fecha de Creación</label>
<input type="date" name="creationDate" id="createdInput" class="input-form-products" max="2023-05-10" min="1920-01-01" required>
</div>

<div class = "container-btns-fp">
<button type="submit" class="submit-btn" id="submit-btn">Agregar</button>

<button class="clean-btn" id="clean-btn" onclick='handleCleanUser()'>Limpiar</button>
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
    formChargeUser.dataset.mode='add'
    formChargeUser['submit-btn'].innerHTML='Agregar'
    d.getElementById('form-title').innerHTML='Agregar Usuario'
    formChargeUser.reset()
}


function handleSubmitUser(evt) {
    evt.preventDefault();
    const element = evt.target.elements;
    if(evt.target.dataset.mode==='add'){
        const newUser = {
            fullname : element.fullname.value ,
            email : element.email.value,
            bornDate : element.bornDate.value ,
            password:element.email.value,
            password2: element.email.value,
            role: element.role.value,
            creationDate:element.creationDate.value
        };
        usersList.push(newUser)
        window.localStorage.setItem('users',JSON.stringify(usersList))
        renderizarUsuarios(usersList)
        handleCleanUser()
        formChargeUser.classList.remove('visible')

        return;
    }
    if(evt.target.dataset.mode==='edit'){
        let IndexToReplace=usersList.findIndex(e=>
            e.email==element.email.value
        )

        const newUser = {
            fullname : element.fullname.value ,
            email : element.email.value,
            bornDate : element.bornDate.value ,
            password:element.email.value,
            password2: element.email.value,
            role: element.role.value,
            creationDate:element.creationDate.value
        };

        usersList[IndexToReplace]=newUser
        window.localStorage.setItem('users',JSON.stringify(usersList))
        renderizarUsuarios(usersList)
        handleCleanUser()
        formChargeUser.classList.remove('visible')

        return;
    }
}
const handleEdit =(el)=>{
    formChargeUser.dataset.mode='edit'
    formChargeUser['submit-btn'].innerHTML='Editar'
    d.getElementById('form-title').innerHTML='Editar Usuario'
    formChargeUser.classList.add('visible')
    Object.entries(el).forEach(([key,value])=>{
        if(formChargeUser[key]){
            formChargeUser[key].value=value
        }
    })
    
}

function handleDelete(i){
    showConfirm('Desea borrar el usuario?', 'Si presiona el botón Aceptar el usuario se habrá borrado definitivamente', ()=>deleteUser(i))
}

function deleteUser(i){
    let newUsers = usersList.filter((el,inx)=>{return inx!==i})
    window.localStorage.setItem('users',JSON.stringify(newUsers))
let refreshUsers = JSON.parse(window.localStorage.getItem('users'));

    renderizarUsuarios(refreshUsers)
    
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
    <td>${el.creationDate}</td>
    <td>
        <button class="user__action-btn" onclick='handleEdit(${JSON.stringify(el)})'><i class="fa-regular fa-pen-to-square"></i></button>
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





