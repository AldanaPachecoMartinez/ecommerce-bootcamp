const navbarList = document.getElementById('navbar-list')
const products = JSON.parse(localStorage.getItem('products'));
const allCarts=JSON.parse(window.localStorage.getItem('cart'))
let userCart=allCarts?.filter((el)=> el?.email === currentUser?.email)||[]
const signIn = document.getElementById('sign-in');



if(!allCarts){
    userCart=[{email:currentUser?.email,order:[]}]
    window.localStorage.setItem('cart',JSON.stringify(userCart))
}
if(userCart.length===0){
    allCarts.push({email:currentUser?.email,order:[]})
    window.localStorage.setItem('cart',JSON.stringify(allCarts))
}




function renderHeaderLinks() {

    
if(currentUser) {
    signIn.style.display = 'none';
    
    if(currentUser.role === 'ADMIN_ROLE') {

    const adminProductLink = createListItemElement('admin-product', 'Stock');
        adminProductLink.classList.add('navbar__nav-item');

    const adminUserLink = createListItemElement('admin-user', 'Usuarios');
        adminUserLink.classList.add('navbar__nav-item');

    navbarList.appendChild(adminProductLink);
    navbarList.appendChild(adminUserLink);

    }

}else {
    const link = createLinkElement('login', 'Ingresar');
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

let menu = document.querySelector('.menu-user');

function menuUser() {
    document.querySelector('.menu-user').innerHTML = `
    <ul class="menu-user__container">
        <button class="close-menu" onclick="closeMenu()">X</button>
        <li class="menu-user__item">
    <a href="/pages/profile/profile.html" class="navbar__nav-link menu-user__link"><i class="fa-regular fa-user icon-menu"></i> Ver mi perfil</a>
        </li>
        <li class="menu-user__item">
    <a href="/pages/contact/contact.html" class="navbar__nav-link menu-user__link"><i class="fa-regular fa-bookmark icon-menu"></i>  Mis órdenes</a>
        </li>
        <li class="menu-user__item">
    <a href="/pages/contact/contact.html" class="navbar__nav-link menu-user__link"><i class="fa-solid fa-wand-magic-sparkles icon-menu"></i> Wishlist</a>
        </li>
        <li class="menu-user__item">
    <a class="navbar__nav-link menu-user__link" onclick="logout()"><i class="fa-solid fa-door-open icon-menu"></i> Salir</a>
        </li>
    </ul>
    `
    menu.classList.add('visible');
}

function closeMenu() {
    menu.classList.remove('visible');
}


renderHeaderLinks()