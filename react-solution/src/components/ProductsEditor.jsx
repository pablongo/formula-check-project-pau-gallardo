import React from 'react';
import { useSelector } from 'react-redux';

import Formula from './Formula';

export default function ProductsEditor() {
  const { products } = useSelector((store) => store.products);
  return (
    <>
      {products.map(() => <Formula />)}
    </>
  );
}
