const navbarList = document.getElementById('navbar-list')
const products = JSON.parse(localStorage.getItem('products'));
const usersList = JSON.parse(window.localStorage.getItem('users'));
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const allCarts=JSON.parse(window.localStorage.getItem('cart'))
let userCart=allCarts?.filter((el)=> el?.email === currentUser?.email)||[]
const signIn = document.getElementById('sign-in');

if(!allCarts){
    userCart=[{email:currentUser?.email,order:[]}]
    window.localStorage.setItem('cart',JSON.stringify(userCart))
}
if(userCart.length===0){
    allCarts.push({email:currentUser.email,order:[]})
    window.localStorage.setItem('cart',JSON.stringify(allCarts))
}




function renderHeaderLinks() {

    
if(currentUser) {
    signIn.innerHTML = `<div onclick="logout()" class="navbar__nav-link">Logout</a>`;
    
    if(currentUser.role === 'ADMIN_ROLE') {

    const adminProductLink = createListItemElement('admin-product', 'Controlar Stock');
        adminProductLink.classList.add('navbar__nav-item');

    const adminUserLink = createListItemElement('admin-user', 'Ver usuarios');
        adminUserLink.classList.add('navbar__nav-item');

    navbarList.appendChild(adminProductLink);
    navbarList.appendChild(adminUserLink);

    }

}else {
    const link = createLinkElement('login', 'Ingresar a mi cuenta');
    signIn.replaceChildren(link);
    document.getElementById('cart-btn-header').setAttribute('disabled',true)
}

}

function createListItemElement(path,text) {

    const listItem = document.createElement('li');
    listItem.classList.add('navbar__nav-link');
    listItem.setAttribute('id', path)
    link = createLinkElement(path,text);
    listItem.appendChild(link);
    return listItem;
}

function createLinkElement(path,text) {

    const link = document.createElement('a');
    link.classList.add('navbar__nav-link');
    link.href = `/pages/${path}/${path}.html`;
    link.innerText = text;
    return link;
}

function logout() {
    window.location.href='/index.html'  
    localStorage.removeItem('currentUser');
    renderHeaderLinks(); 
}



renderHeaderLinks()