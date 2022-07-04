import React from 'react';
import { render, screen } from '../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import BookClubForm from './BookClubForm';

describe('BookClubForm', () => {
  it('should show the book club form', () => {
    render(<BookClubForm />);
    expect(screen.getByTestId('book-club-form')).toBeInTheDocument();
  });

  it('should have book club name input', () => {
    render(<BookClubForm />);
    expect(screen.getByTestId('input-book-club')).toBeInTheDocument();
  });

  it('should have description input', () => {
    render(<BookClubForm />);
    expect(
      screen.getByTestId('input-book-club-description')
    ).toBeInTheDocument();
  });

  it('should have label for the category', () => {
    render(<BookClubForm />);
    expect(screen.getByTestId('book-club-category-label')).toBeInTheDocument();
  });

  it('should have select button for the category', () => {
    render(<BookClubForm />);
    expect(screen.getByTestId('book-club-select-button')).toBeInTheDocument();
  });

  it('should have a copy for the select', () => {
    render(<BookClubForm />);
    expect(
      screen.getByTestId('book-club-select-button-copy')
    ).toBeInTheDocument();
  });

  it('should have an icon for the select', () => {
    render(<BookClubForm />);
    expect(
      screen.getByTestId('book-club-select-button-icon')
    ).toBeInTheDocument();
  });

  it('should have a select element', async () => {
    const user = userEvent.setup();

    render(<BookClubForm />);

    await user.click(screen.getByTestId('book-club-select-button'));

    expect(screen.getByTestId('category-select')).toBeInTheDocument();
  });

  it('should have options inside the select element', async () => {
    const user = userEvent.setup();

    render(<BookClubForm />);

    await user.click(screen.getByTestId('book-club-select-button'));

    expect(await await screen.findByText('Mistery')).toBeInTheDocument();
  });

  it('should have an checkbox to make the book club private', () => {
    render(<BookClubForm />);
    expect(
      screen.getByTestId('input-book-club-private-checkbox')
    ).toBeInTheDocument();
  });

  it('should have an checkbox to make the book club adult only', () => {
    render(<BookClubForm />);
    expect(
      screen.getByTestId('input-book-club-adult-checkbox')
    ).toBeInTheDocument();
  });

  it('should have an cancel button', () => {
    render(<BookClubForm />);
    expect(screen.getByTestId('cancel-form-button')).toBeInTheDocument();
  });

  it('should have an submit form button', () => {
    render(<BookClubForm />);
    expect(screen.getByTestId('submit-form-button')).toBeInTheDocument();
  });
});
