const form = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const { email, password } = loginForm.elements;

    const users = JSON.parse(localStorage.getItem('users')) || [] ;

    const user = users.find((usr) => {
        if(usr.email === email.value) {
            return true;
        }
        return false; 
    })

    if(!user || user.password !== password.value) {
        showAlert('Los datos ingresados no son correctos', 'error');
        return
    }


        localStorage.setItem('currentUser', JSON.stringify(user));
        showAlert(`Login correcto te redireccionaremos en unos instantes..`);

        setTimeout(() => {
            window.location.href = '/index.html'


}, 1500)


})
