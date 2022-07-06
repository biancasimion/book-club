import React from 'react';
import { render, screen } from '../../tests/test-utils';
import BookClub from './BookClub';

describe('BookClub page', () => {
  it('should show the book club page', () => {
    render(<BookClub />);
    expect(screen.getByTestId('book-club-page')).toBeInTheDocument();
  });
  it('should show the book club title', () => {
    render(<BookClub />);
    expect(screen.getByTestId('book-club-page-title')).toBeInTheDocument();
  });
});
