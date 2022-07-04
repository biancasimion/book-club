import React from 'react';
import { render, screen } from '../../tests/test-utils';
import Layout from './Layout';

describe('Layout', () => {
  it('should show the layout', () => {
    render(<Layout />);
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });
});
