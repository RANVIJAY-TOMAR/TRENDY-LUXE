let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartTotal = parseFloat(localStorage.getItem("cartTotal")) || 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    cartTotal += price;
    
    saveCart();
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let cartTotalElement = document.getElementById("cart-total");
    let cartCount = document.getElementById("cart-count");
    let checkoutBtn = document.getElementById("checkout-btn");

    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
                        <button onclick="removeFromCart(${index})">❌</button>`;
        cartList.appendChild(li);
    });

    cartTotalElement.innerText = cartTotal.toFixed(2);
    cartCount.innerText = cart.length;

    // Show checkout button only if cart has items
    checkoutBtn.style.display = cart.length > 0 ? "block" : "none";

    saveCart();
}

function removeFromCart(index) {
    cartTotal -= cart[index].price;
    cart.splice(index, 1);

    saveCart();
    updateCart();
}

function toggleCart() {
    let cartModal = document.getElementById("cart-modal");
    cartModal.classList.toggle("active");
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty! Add items before checking out.");
        return;
    }

    // Redirect to checkout page
    window.location.href = "checkout.html";
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartTotal", cartTotal.toFixed(2));
}

// Load cart on page load
document.addEventListener("DOMContentLoaded", updateCart);
