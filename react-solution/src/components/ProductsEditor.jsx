/* eslint-disable react/prop-types */
import React from 'react';

import Formula from './Formula';
import Product from './Product';

import './ProductsEditor.css';

export default function ProductsEditor({ products }) {
  return (
    <div className="products-container">
      {products?.map((product, index) => (
        <article key={product.name} className="products-container__articles">
          <Product product={product} modified />
          <Formula product={product} index={index} />
          <Product product={product} modified={false} />
        </article>
      ))}
    </div>
  );
}
