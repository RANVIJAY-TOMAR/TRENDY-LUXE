import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/stores").then((res) => setStores(res.data));
    axios.get("http://localhost:5000/products").then((res) => setProducts(res.data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const placeOrder = () => {
    const orderData = {
      email: "test@example.com", // Replace with user email
      store: cart[0]?.store,
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price, 0),
    };

    axios.post("http://localhost:5000/order", orderData)
      .then(() => alert("Order placed successfully!"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Multi-Store Marketplace</h1>
      
      <h2 className="text-xl font-semibold">Stores</h2>
      <ul>
        {stores.map((store, index) => (
          <li key={index} className="p-2 border-b">{store.name}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-4">Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.price} USD</p>
            <button 
              className="mt-2 p-2 bg-blue-500 text-white rounded"
              onClick={() => addToCart(product)}
            >Add to Cart</button>
          </div>
        ))}
      </div>
      
      <h2 className="text-xl font-semibold mt-4">Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - {item.price} USD</li>
        ))}
      </ul>

      <button 
        className="mt-4 p-2 bg-green-500 text-white rounded"
        onClick={placeOrder}
      >Place Order</button>
    </div>
  );
};

export default App;
