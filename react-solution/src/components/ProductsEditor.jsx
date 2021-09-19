/* eslint-disable react/prop-types */
import React from 'react';

import Formula from './Formula';
import Product from './Product';

import './ProductsEditor.css';

export default function ProductsEditor({ products }) {
  return (
    <>
      {products?.map((product, index) => (
        <articles className="product-formula">
          <Product product={product} modified />
          <Formula product={product} index={index} />
          <Product product={product} modified={false} />
        </articles>
      ))}
    </>
  );
}
