document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-grid');

    // Използваме директен път, тъй като products.json е в същата папка като index.html
    fetch('./products.json')
        .then(response => {
            if (!response.ok) throw new Error('Липсва products.json');
            return response.json();
        })
        .then(products => {
            productContainer.innerHTML = ''; 

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';

                // Директно взимане на данните по твоите ключове
                const title = product["product-title"] || "Бижу";
                const image = product["product-image src"] || "";
                const price = product["product-meta (2)"] || "По запитване";

                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${image}" alt="${title}">
                    </div>
                    <div class="product-info">
                        <h3>${title}</h3>
                        <p class="price">${price}</p>
                        <button class="buy-btn">КУПИ СЕГА</button>
                    </div>
                `;
                productContainer.appendChild(productCard);
            });
        })
        .catch(err => {
            console.error(err);
            productContainer.innerHTML = `<p style="color:red">Грешка при зареждане: ${err.message}</p>`;
        });
});
