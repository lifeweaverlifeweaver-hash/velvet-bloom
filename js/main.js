document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-grid');

    // Зареждаме продуктите от файла products.json
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            productContainer.innerHTML = ''; // Изчистваме съобщението за зареждане

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';

                // Използваме точните имена от твоя файл: "product-image src", "product-title", "product-meta (2)"
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product["product-image src"]}" alt="${product["product-title"]}">
                    </div>
                    <div class="product-info">
                        <h3>${product["product-title"]}</h3>
                        <p class="category">${product["chip"] || 'Бижу'}</p>
                        <p class="price">${product["product-meta (2)"]}</p>
                        <button class="buy-btn">КУПИ СЕГА</button>
                    </div>
                `;

                productContainer.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Грешка при зареждане:', error);
            productContainer.innerHTML = '<p>Проблем при зареждането на продуктите. Моля, опитайте по-късно.</p>';
        });
});
