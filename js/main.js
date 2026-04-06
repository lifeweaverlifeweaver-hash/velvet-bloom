document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-grid');

    // Функцията за рисуване на продуктите
    const renderProducts = (products) => {
        productContainer.innerHTML = ''; 
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            // Поправка за имената на колоните (с 1 или 2 интервала)
            const title = product["product-title"] || "Бижу";
            const image = product["product-image src"] || "";
            const price = product["product-meta (2)"] || product["product-meta  (2)"] || "По запитване";
            const category = product["chip"] || "";

            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${image}" alt="${title}">
                </div>
                <div class="product-info">
                    <h3>${title}</h3>
                    <p class="category">${category}</p>
                    <p class="price">${price}</p>
                    <button class="buy-btn">КУПИ СЕГА</button>
                </div>
            `;
            productContainer.appendChild(productCard);
        });
    };

    // Опит 1: Търсим файла в основната папка (най-вероятно)
    fetch('./products.json')
        .then(res => {
            if (!res.ok) throw new Error();
            return res.json();
        })
        .then(data => renderProducts(data))
        .catch(() => {
            // Опит 2: Ако не е там, търсим го в папката js/
            fetch('products.json')
                .then(res => res.json())
                .then(data => renderProducts(data))
                .catch(err => {
                    productContainer.innerHTML = "<p>Грешка: Проверете дали products.json е качен в GitHub.</p>";
                });
        });
});
