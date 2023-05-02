// const cardsContainer = document.getElementById('card-container');

// const productsLS = JSON.parse(localStorage.getItem('products')) || [];

// function renderizarProductos(products) {
    
//     cardsContainer.innerHTML = ``;

//     products.forEach((product, index)=> {
//         const card = document.createElement('article');
//         card.classList.add('card');

//         card.innerHTML = `

//         <div class="card__header">
//             <img src="${product.image}" alt="${product.name}" class="card__img">
//         </div>

//         <div class="card__body">
//             <div class="card__title">
//                 ${product.name}
//             </div>
//             <p class="card__description"> 
//                 ${product.description}
//             </p>
//             <div class="card__price">
//                 ${product.price}
//             </div>
//         </div>

//         <div class="card__footer">
//             <div class="card__date">
//                 31/01/2023
//             </div>
//             <div class="card__btn-container">
//                 <a href="/pages/product-detail/product-detail.html?id=${index}" class="card__btn">Detalle</a>
//             </div>
//         </div>
//         `

//         cardsContainer.appendChild(card);

//     });
// }

// renderizarProductos()