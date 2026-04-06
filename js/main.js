document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-grid');

    const renderProducts = (products) => {
        productContainer.innerHTML = ''; 
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            // УНИВЕРСАЛНО ТЪРСЕНЕ: Проверяваме всички варианти, които видях на снимките
            const title = product["product-title"] || product["title"] || "Бижу";
            const image = product["product-image src"] || product["image"] || "";
            
            // Търсим цената в "meta (2)", "meta", или "meta (4)"
            const price = product["product-meta (2)"] || 
                          product["product-meta  (2)"] || 
                          product["product-meta"] || 
                          "19.99 €";

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

    // Пробваме да заредим файла
    fetch('./products.json')
        .then(res => res.json())
        .then(data => renderProducts(data))
        .catch(err => {
            // Ако не стане от корена, пробваме от папката js
            fetch('products.json')
                .then(res => res.json())
                .then(data => renderProducts(data))
                .catch(e => console.log("Грешка при зареждане"));
        });
});
