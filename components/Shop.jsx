import React from 'react';
import './ProductList.css'; // Importing external CSS file for styling
import ProductCart from "./Shop bas"

const ProductList = ({ products, incrementQuantity, decrementQuantity }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>Prix: {product.price.toFixed(2)}€ </p>
          <div className="quantity-controls">
            <button
              className="quantity-button"
              onClick={() => decrementQuantity(product.id)}
            >
              -
            </button>
            <span className="quantity">{product.quantity}</span>
            <button
              className="quantity-button"
              onClick={() => incrementQuantity(product.id)}
            >
              +
            </button>
          </div>
          <p>Total: {(product.price * product.quantity).toFixed(2)} €</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
