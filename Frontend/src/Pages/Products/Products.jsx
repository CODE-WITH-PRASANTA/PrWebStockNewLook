import React from 'react';
import './Products.css';

// Assets
import ProductRightImg from '../../assets/carrier-page-right-side.webp';
import ProductContent from '../../Components/ProductContent/ProductContent';

const Products = () => {
  return (
    <>
    <section className="products-section">
      <div className="products-container">
        <div className="products-content">
          <h2 className="products-title">Our Products</h2>
          <p className="products-subtitle">
            Choose the best website for your business.
          </p>
        </div>
        <div className="products-image">
          <img src={ProductRightImg} alt="Products Illustration" />
        </div>
      </div>
    </section>

    <ProductContent />
    </>
  );
};

export default Products;
