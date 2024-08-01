// get products from API
fetch('/api/products')
    .then(response => response.json())
    .then(products => {
        const productList = document.getElementById('product-list');
        products.forEach(product => {
            const productHTML = `
                <li>
                    <h3>${product.title}</h3>
                    <img src="${product.image}" alt="${product.title}">
                    <p>${product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button>Add to Cart</button>
                </li>
            `;
            productList.innerHTML += productHTML;
        });
    });

// search functionality
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = document.getElementById('search').value;
    fetch(`/api/products/search?q=${searchTerm}`)
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            productList.innerHTML = '';
            products.forEach(product => {
                const productHTML = `
                    <li>
                        <h3>${product.title}</h3>
                        <img src="${product.image}" alt="${product.title}">
                        <p>${product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button>Add to Cart</button>
                    </li>
                `;
                productList.innerHTML += productHTML;
            });
        });
});