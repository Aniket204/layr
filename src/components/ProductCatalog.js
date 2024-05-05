// ProductCatalog.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from './ProductCard';
import '../styles/styles.css';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('price');
  const [filterBy, setFilterBy] = useState('');

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProductsData();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else if (sortBy === 'name') {
      return a.title.localeCompare(b.title);
    }
  });

  const filteredProducts = sortedProducts.filter(product => {
    if (!filterBy) return true;
    return product.category === filterBy;
  });

  return (
    <div className="product-catalog">
      <div className="filters">
        <label>
          Sort By:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </label>
        <label>
          Filter By:
          <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </label>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
