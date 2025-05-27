document.addEventListener("DOMContentLoaded", () => {
    let orderDetails = document.getElementById("order-details");
    let totalPriceElement = document.getElementById("total-price");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        orderDetails.innerHTML = "<p>No recent orders found.</p>";
        return;
    }

    let total = 0;
    cart.forEach(item => {
        let itemElement = document.createElement("div");
        itemElement.classList.add("order-item");
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="order-item-img">
            <p>${item.name} - $${item.price.toFixed(2)}</p>
        `;
        orderDetails.appendChild(itemElement);
        total += item.price;
    });

    totalPriceElement.textContent = total.toFixed(2);
    localStorage.removeItem("cart"); // Clear cart after order is placed
});
