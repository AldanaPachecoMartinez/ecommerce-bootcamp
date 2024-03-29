const registerForm = document.getElementById('registerForm');
const registerBtn = document.getElementById('registerSubmit');

registerForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const el = evt.target.elements;

    if(el.password.value !== el.password2.value) {
        showAlert(`Las contraseñas no coinciden`, 'warning')
        return
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExist = checkIfUserExist(users, el.email.value)
    
    if(userExist) {
        showAlert(`El email ya existe`, 'error')
        return;
    }

    
    const user = {
        fullname: el.fullName.value,
        email: el.email.value,
        password: el.password.value,
        password2: el.password2.value,
        age: el.age.value,
        bornDate: el.bornDate.value,
        role: 'USER_ROLE'
    }
    
    users.push(user);
    
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(user));


    showAlert('El usuario se registro correctamente', 'succes');
        window.location.href='/index.html'
        window.location.reload()


})


function checkIfUserExist(users, emailToSearch) {
    
        const indexOfUser = users.findIndex(usuario => { 
            if(usuario.email === emailToSearch) {
                return true;
            }
        })
        
        if(indexOfUser !== -1){
            console.warn(`El usuario ya existe`);
            return true;
        }
    
    }



