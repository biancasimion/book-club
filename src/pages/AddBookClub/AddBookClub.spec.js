import React from 'react';
import { render, screen } from '../../tests/test-utils';
import AddBookClub from './AddBookClub';

describe('AddBookClub page', () => {
  it('should show the add book club page', () => {
    render(<AddBookClub />);
    expect(screen.getByTestId('add-book-club-page')).toBeInTheDocument();
  });
  it('should show the add book club page title', () => {
    render(<AddBookClub />);
    expect(screen.getByTestId('add-book-club-page-title')).toBeInTheDocument();
  });
});
