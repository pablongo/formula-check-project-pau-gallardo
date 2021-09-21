import React from 'react';
import { useSelector } from 'react-redux';

import ProductsEditor from '../components/ProductsEditor/ProductsEditor';
import Navbar from '../components/Navbar/Navbar';

import './PriceFormulasPage.css';

export default function PriceFormulasPage() {
  const products = useSelector((store) => store.products);
  return (
    products && (
      <main className="main">
        <Navbar />
        <ProductsEditor products={products} />
      </main>
    )
  );
}
