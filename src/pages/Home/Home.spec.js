import React from 'react';
import { render, screen } from '../../tests/test-utils';
import Home from './Home';

describe('Home page', () => {
  it('should show the home page', () => {
    render(<Home />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('should show the home page title', () => {
    render(<Home />);
    expect(screen.getByTestId('home-page-title')).toBeInTheDocument();
  });

  it('should show the home page buttons', () => {
    render(<Home />);
    expect(screen.getByTestId('home-page-buttons')).toBeInTheDocument();
    expect(
      screen.getByTestId('home-page-create-book-club-button')
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('home-page-search-book-club-button')
    ).toBeInTheDocument();
  });
});
