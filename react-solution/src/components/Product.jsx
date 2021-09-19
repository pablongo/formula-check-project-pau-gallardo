/* eslint-disable react/prop-types */
import React from 'react';
import './Product.css';

export default function Product({ product, modified }) {
  return (
    <div className="product-container">
      <h2 className="product-container__title">{product?.name}</h2>
      <img
        className="product-container__image"
        src="https://via.placeholder.com/150"
        alt="product"
      />
      {modified
        ? (
          <>
            <h3 className="product-container__title">Original price</h3>
            <span className="product-container__title">{`${product?.price}€`}</span>
          </>
        )
        : (
          <>
            <h3 className="product-container__title">Modified price</h3>
            <span className="product-container__title">{`${product?.formulaPrice}€`}</span>
          </>
        )}
    </div>
  );
}
