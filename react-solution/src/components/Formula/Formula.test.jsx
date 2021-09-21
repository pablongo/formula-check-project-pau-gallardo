import React from 'react';
import { render, screen, fireEvent } from '../../utils/test.utils';

import Formula from './Formula';

describe('Given a Formula component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      const product = {
        name: 'Smarty Watch',
        image: 'url',
        price: 54,
        formulaPrice: 54,
        formula: '',
      };
      const index = 0;
      render(<Formula product={product} index={index} />);
    });
    describe('And state is EDIT', () => {
      test('Then Edit should be in the document', () => {
        expect(screen.getByText(/Edit/i)).toBeInTheDocument();
      });
    });
    describe('And state is DISPLAY', () => {
      test('Then Save should be in the document', () => {
        const editButton = screen.getByTestId('edit-button');

        fireEvent.click(editButton);

        expect(screen.getByText(/Save/i)).toBeInTheDocument();
      });
    });
  });
});
