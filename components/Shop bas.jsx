import React, { useState } from 'react';
import ProductList from './Shop';
import './Shop bas.css'; // Importing external CSS file for styling

const ProductCart = () => {
  const initialProducts = [
    { id: 1, name: 'Abonnement 1 moi', price: 40.0, quantity: 0 },
    { id: 2, name: 'Abonnement a un cous', price: 105.0, quantity: 0 },
    { id: 3, name: 'Carte cours solo', price: 15.0, quantity: 0 },
    { id: 4, name: 'Carte cours duo', price: 15.0, quantity: 0 },
  ];

  const [products, setProducts] = useState(initialProducts);

  // Function to handle incrementing the quantity
  const incrementQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  // Function to handle decrementing the quantity
  const decrementQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  // Calculate the total price of all products
  const calculateTotalPrice = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    ).toFixed(2);
  };

  // Handle the purchase button click
  const handlePurchase = () => {
    alert('Purchase successful!');
    // Reset the product quantities after purchase
    setProducts(
      products.map((product) => ({ ...product, quantity: 0 }))
    );
  };

  return (
    <div className="product-cart">
      <ProductList
        products={products}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <div className="cart-summary">
        <h2>Total : {calculateTotalPrice()} €</h2>
        <button className="purchase-button" onClick={handlePurchase}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
