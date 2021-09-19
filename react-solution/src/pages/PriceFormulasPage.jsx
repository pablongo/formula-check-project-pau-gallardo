import React from 'react';
import { useSelector } from 'react-redux';

import ProductsEditor from '../components/ProductsEditor';

export default function PriceFormulasPage() {
  const products = useSelector((store) => store.products);
  return (
    products && (
    <ProductsEditor products={products} />
    )
  );
}
