import React from 'react';
import { render, screen } from '../../utils/test.utils';

import Product from './Product';

describe('Given a Product component', () => {
  describe('When it renders', () => {
    beforeEach(() => {
      const product = {
        name: 'Ugly Watch',
        price: 25,
        formulaPrice: 30,
      };
      render(<Product product={product} modified />);
    });
    describe('And modified is true', () => {
      test('Then Original Price should be in the document', () => {
        expect(screen.getByText(/Original price/i)).toBeInTheDocument();
      });
    });
    beforeEach(() => {
      const product = {
        name: 'Ugly Watch',
        price: 25,
        formulaPrice: 30,
      };
      render(<Product product={product} modified={false} />);
    });
    describe('And modified is true', () => {
      test('Then Original Price should be in the document', () => {
        expect(screen.getByText(/Modified price/i)).toBeInTheDocument();
      });
    });
  });
});
