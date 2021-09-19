/* eslint-disable react/prop-types */
import React from 'react';

import Formula from './Formula';
import Product from './Product';

export default function ProductsEditor({ products }) {
  return (
    <>
      {products?.map((product, index) => (
        <>
          <Product product={product} modified />
          <Formula product={product} index={index} />
          <Product product={product} modified={false} />
        </>
      ))}
    </>
  );
}
