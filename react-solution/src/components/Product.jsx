/* eslint-disable react/prop-types */
import React from 'react';

export default function Product({ product, modified }) {
  return (
    <>
      <h2>{product?.name}</h2>
      <img src="" alt="" />
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
    </>
  );
}
