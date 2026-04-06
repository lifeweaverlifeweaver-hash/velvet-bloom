document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-grid');

    fetch('products.json')
        .then(response => {
            if (!response.ok) throw new Error('File not found');
            return response.json();
        })
        .then(products => {
            productContainer.innerHTML = ''; 

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';

                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product["product-image src"]}" alt="${product["product-title"]}">
                    </div>
                    <div class="product-info">
                        <h3>${product["product-title"]}</h3>
                        <p class="category">${product["chip"] || ''}</p>
                        <p class="price">${product["product-meta (2)"]}</p>
                        <button class="buy-btn">КУПИ СЕГА</button>
                    </div>
                `;
                productContainer.appendChild(productCard);
            });
        })
        .catch(err => {
            console.error("Error:", err);
            productContainer.innerHTML = "<p>Грешка при зареждане на продуктите.</p>";
        });
});
