import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <div className="details">
        <p>${product.price}</p>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;