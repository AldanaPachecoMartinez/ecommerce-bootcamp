
document.addEventListener('DOMContentLoaded', renderizarHeader('header'))
document.addEventListener('DOMContentLoaded', renderizarFooter('footer'))


function renderizarHeader(id){
    document.getElementById(id).innerHTML = ` <nav class="navbar">
    <a href="/index.html" class="navbar__nav-link">
        <img src="/assets/images/logo-marca-large.png" alt="Logo del E-commerce"  class="navbar__logo">
    </a>

    <div class="user-navbar">
        <div class="user-navbar__cart-icon-container" onclick='handleOrders()'>
            <i class="fa-solid fa-cart-shopping"></i>
            <p id='cart-count' class='cart-count'></p>
        </div>
        <div class="user-navbar__user-avatar-container">
            <img src="https://corporacionhidraulica.com.pe/wp-content/uploads/2022/08/usu.png" alt="imagen de usuario" class="user-navbar__user-avatar">
        </div>
    </div>
    
    <input type="checkbox" class="navbar__menu-btn" id="menu-btn">
    <label for="menu-btn" class="navbar__menu-label">
        <span class="navbar__menu-icon"></span>
    </label>


    <ul class="navbar__nav-links-container" id="navbar-list">
        <li class="navbar__nav-item">
            <a href="/index.html" class="navbar__nav-link">Inicio</a></li>
        <li class="navbar__nav-item">
            <a href="/pages/contact/contact.html" class="navbar__nav-link">Contacto</a></li>
        <li class="navbar__nav-item">
            <a href="/pages/about-us/about-us.html" class="navbar__nav-link">Nosotros</a></li>
        <li class="navbar__nav-item">
            <a href="/pages/register/register.html" class="navbar__nav-link">Registrarse</a></li>
        <li class="navbar__nav-item" id="sign-in">
                <a href="/pages/login/login.html" class="navbar__nav-link">Login</a></li>
    </ul>
</nav>

`
}

function renderizarFooter(id){
    document.getElementById(id).innerHTML = `<div class= 'footer'> <div class="footer__column">
    <ul class="footer__social-media-container">
        <li class="footer__contact-item">
            <a href="#" class="footer__contact-link">
            <i class="fa-brands fa-facebook-f footer__contact-icon
            footer__contact-icon--facebook"></i>
                Facebook
            </a>
        </li>
        <li class="footer__contact-item">
            <a href="#" class="footer__contact-link">
            <i class="fa-brands fa-instagram footer__contact-icon footer__contact-icon--instagram"></i>
                Instagram
            </a>
        </li>
        <li class="footer__contact-item">
            <a href="#" class="footer__contact-link">
            <i class="fa-brands fa-linkedin footer__contact-icon footer__contact-icon--linkedin"></i>
                Linkedin
            </a>
        </li>    
    </ul>
</div>
<div class="footer__column">
    <img src="/assets/images/logo-marca.png" alt="Company Logo" class="footer__logo" width="120px">
    <h2 class="footer__company-name">
        DE&CO <em>design</em>
    </h2>
    <p class="footer__copyrigth">
        Todos los derechos reservados a DE&CO
    </p>
</div>
<div class="footer__column">
    <ul class="footer__contact-container">
        <li class="footer__contact-item">
            <a href="#" class="footer__contact-link">
                <i class="fa-solid fa-phone footer__contact-icon"></i>
                Teléfono
            </a>
        </li>
        <li class="footer__contact-item">
            <a href="#" class="footer__contact-link">
                <i class="fa-solid fa-location-dot footer__contact-icon"></i>
                Localización
            </a>
        </li>
        <li class="footer__contact-item">
            <a href="#" class="footer__contact-link">
                <i class="fa-solid fa-envelope footer__contact-icon"></i>
                E-mail
            </a>
        </li>    
    </ul>
</div>

</div>`
}


