import React from 'react';
import { render, screen } from '../../utils/test.utils';

import Navbar from './Navbar';

describe('Given a Navbar component', () => {
  describe('When it renders', () => {
    beforeEach(() => {
      render(<Navbar />);
    });
    test('Then should be in the document', () => {
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
  });
});
