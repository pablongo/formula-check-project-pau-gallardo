import React from 'react';
import { render, screen } from '../../utils/test.utils';

import ProductsEditor from './ProductsEditor';

describe('Given a ProductsEditor component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      const products = [{
        name: 'pau-watch',
      }];
      render(<ProductsEditor products={products} />);
    });
    test('Then pau-watch should be in the document', () => {
      expect(screen.getByTestId('article-pau-watch'));
    });
  });
});
