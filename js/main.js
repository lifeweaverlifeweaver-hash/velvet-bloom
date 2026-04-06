window.onload = function() {
    const container = document.getElementById('product-grid');
    
    console.log("Приложението стартира...");

    fetch('products.json')
        .then(response => {
            if (!response.ok) throw new Error("Не намерих products.json");
            return response.json();
        })
        .then(data => {
            console.log("Данните са заредени:", data);
            container.innerHTML = ''; 

            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'product-card';
                
                // Вземаме данните по твоите заглавия от снимката
                const name = item["product-title"] || "Няма име";
                const img = item["product-image src"] || "";
                const price = item["product-meta (2)"] || item["product-meta  (2)"] || "0.00";

                card.innerHTML = `
                    <img src="${img}" style="width:100%">
                    <h3>${name}</h3>
                    <p>${price}</p>
                    <button class="buy-btn">КУПИ</button>
                `;
                container.appendChild(card);
            });
        })
        .catch(err => {
            console.error("Грешка:", err);
            container.innerHTML = "Грешка при зареждане: " + err.message;
        });
};

