import React from 'react';
import { render, screen } from '../../tests/test-utils';
import NavigationBar from './NavigationBar';

describe('NavigationBar', () => {
  it('should show the layout', () => {
    render(<NavigationBar />);
    expect(screen.getByTestId('navigation-bar-wrapper')).toBeInTheDocument();
  });
});
