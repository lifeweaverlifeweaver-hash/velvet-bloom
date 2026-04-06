document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');

    fetch('./products.json')
        .then(res => res.json())
        .then(rawData => {
            // АВТОМАТИЧНО НАМИРАНЕ НА ДАННИТЕ
            // Easy Scraper често слага продуктите в обект, а не в чист списък
            let products = Array.isArray(rawData) ? rawData : (rawData.data || rawData.rows || Object.values(rawData)[0]);

            if (!Array.isArray(products)) {
                console.error("Не мога да намеря списъка с продукти в JSON файла.");
                return;
            }

            grid.innerHTML = '';
            
            products.forEach(p => {
                const card = document.createElement('div');
                card.className = 'product-card';
                
                // Вземаме заглавие и цена, като проверяваме за твоите специфични имена
                const title = p["product-title"] || "Бижу";
                const img = p["product-image src"] || "";
                const price = p["product-meta (2)"] || p["product-meta"] || "19.99 €";

                card.innerHTML = `
                    <div class="product-image"><img src="${img}" alt=""></div>
                    <div class="product-info">
                        <h3>${title}</h3>
                        <p class="price">${price}</p>
                        <button class="buy-btn">КУПИ СЕГА</button>
                    </div>
                `;
                grid.appendChild(card);
            });
        })
        .catch(err => {
            console.error("Грешка:", err);
            grid.innerHTML = "<p>Грешка при зареждане на JSON. Проверете файла в GitHub.</p>";
        });
});document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');

    fetch('./products.json')
        .then(res => res.json())
        .then(rawData => {
            // АВТОМАТИЧНО НАМИРАНЕ НА ДАННИТЕ
            // Easy Scraper често слага продуктите в обект, а не в чист списък
            let products = Array.isArray(rawData) ? rawData : (rawData.data || rawData.rows || Object.values(rawData)[0]);

            if (!Array.isArray(products)) {
                console.error("Не мога да намеря списъка с продукти в JSON файла.");
                return;
            }

            grid.innerHTML = '';
            
            products.forEach(p => {
                const card = document.createElement('div');
                card.className = 'product-card';
                
                // Вземаме заглавие и цена, като проверяваме за твоите специфични имена
                const title = p["product-title"] || "Бижу";
                const img = p["product-image src"] || "";
                const price = p["product-meta (2)"] || p["product-meta"] || "19.99 €";

                card.innerHTML = `
                    <div class="product-image"><img src="${img}" alt=""></div>
                    <div class="product-info">
                        <h3>${title}</h3>
                        <p class="price">${price}</p>
                        <button class="buy-btn">КУПИ СЕГА</button>
                    </div>
                `;
                grid.appendChild(card);
            });
        })
        .catch(err => {
            console.error("Грешка:", err);
            grid.innerHTML = "<p>Грешка при зареждане на JSON. Проверете файла в GitHub.</p>";
        });
});
