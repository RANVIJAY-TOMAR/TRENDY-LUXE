document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalPriceElement = document.getElementById("total-price");

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    let total = 0;
    cart.forEach(item => {
        let itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <p>${item.name} - $${item.price.toFixed(2)}</p>
        `;
        cartContainer.appendChild(itemElement);
        total += item.price;
    });

    totalPriceElement.textContent = total.toFixed(2);

    document.getElementById("place-order").addEventListener("click", () => {
        alert("Thank you for your order! 🎉");
        localStorage.removeItem("cart");
        window.location.href = "index.html"; // Redirect back to store
    });
});
document.getElementById("place-order").addEventListener("click", () => {
    alert("Your order has been placed successfully! 🎉");
    window.location.href = "order-confirmation.html"; // Redirect to confirmation page
});
