// Константа за контейнера, където ще се показват бижутата
const productContainer = document.getElementById('product-grid');

// Основна функция за зареждане на продуктите
async function fetchProducts() {
    try {
        // Зареждаме вече готовия products.json
        const response = await fetch('products.json');
        const products = await response.json();

        // Изчистваме контейнера, ако има тестови данни
        productContainer.innerHTML = '';

        products.forEach(product => {
            // Създаваме карта за всеки продукт
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300?text=Velvet+Bloom'">
                </div>
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p class="price">${product.price} €</p>
                    <button class="add-to-cart-btn" onclick="addToCart('${product.title}')">
                        КУПИ СЕГА
                    </button>
                </div>
            `;

            productContainer.appendChild(productCard);
        });

        console.log(`Успешно заредени ${products.length} артикула.`);
    } catch (error) {
        console.error("Грешка при зареждане на продуктите:", error);
        productContainer.innerHTML = '<p>В момента обновяваме каталога, моля опитайте пак след малко.</p>';
    }
}

// Проста функция за количка (можеш да я разшириш по-късно)
function addToCart(productName) {
    alert(`Добавихте "${productName}" в количката си!`);
}

// Стартираме всичко при зареждане на страницата
document.addEventListener('DOMContentLoaded', fetchProducts);
