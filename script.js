const products = [
    { name: "Laptop", price: "$800", category: "electronics", image: "apple.jpg?text=Laptop" },
    { name: "Phone", price: "$500", category: "electronics", image: "smartphone.jpg?text=Phone" },
    { name: "Headphones", price: "$50", category: "electronics", image: "headphone.jpeg?text=Headphones" },
    { name: "Pizza", price: "$10", category: "clothing", image: "pizza.jpg?text=Pizza" },
    { name: "Burger", price: "$5", category: "clothing", image: "burger.jpg?text=Burger" },
    { name: "Cake", price: "$15", category: "clothing", image: "cake.jpeg?text=Cake" },
    { name: "Watch", price: "$150", category: "others", image: "watch.jpg?text=Watch" },
    { name: "Sunglasses", price: "$80", category: "others", image: "glasses.jpg?text=Sunglasses" }
];

function displayProducts() {
    products.forEach(product => {
        let section = document.getElementById(`${product.category}-products`);

        section.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ${product.price}</p>
                <button onclick="order('${product.name}')">Order Now</button>
            </div>
        `;
    });
}

function order(productName) {
    alert(`Ordered: ${productName}`);
}

window.onload = displayProducts;
