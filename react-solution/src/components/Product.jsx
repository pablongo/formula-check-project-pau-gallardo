/* eslint-disable react/prop-types */
import React from 'react';
import './Product.css';

export default function Product({ product, modified }) {
  return (
    <div className="product-container">
      <h2>{product?.name}</h2>
      <img src="https://via.placeholder.com/150" alt="" />
      {modified
        ? (
          <>
            <h3>Original price</h3>
            <span>{product?.price}</span>
          </>
        )
        : (
          <>
            <h3>Modified price</h3>
            <span>{product?.formulaPrice}</span>
          </>
        )}
    </div>
  );
}
