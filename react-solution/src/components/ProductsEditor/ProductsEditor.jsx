/* eslint-disable react/prop-types */
import React from 'react';

import Formula from '../Formula/Formula';
import Product from '../Product/Product';

import './ProductsEditor.css';

export default function ProductsEditor({ products }) {
  return (
    <div className="products-container">
      {products?.map((product, index) => (
        <article data-testid={`article-${product.name}`} key={product.name} className="products-container__articles">
          <Product product={product} modified />
          <Formula product={product} index={index} />
          <Product product={product} modified={false} />
        </article>
      ))}
    </div>
  );
}
