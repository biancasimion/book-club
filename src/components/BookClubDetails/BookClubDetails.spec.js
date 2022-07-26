import React from 'react';
import { screen, render } from '@testing-library/react';
import BookClubDetails from './BookClubDetails';

const mockProps = {
  bookClub: {
    name: 'test',
    description: 'description',
    _id: 'id',
    category: ['romance', 'classics'],
    isPrivate: false,
  },
  joinBookClub: jest.fn(),
  bookClubId: '12345',
};
describe('BookClubDetails', () => {
  it('should render the BookClubDetails', () => {
    render(<BookClubDetails {...mockProps} />);

    expect(
      screen.getByTestId('book-club-details-container')
    ).toBeInTheDocument();
  });

  describe('when there is an error', () => {
    it('should display the error message', () => {
      render(<BookClubDetails {...mockProps} joinBookClubError="error" />);

      expect(screen.getByTestId('error-message')).toBeInTheDocument();
    });
  });

  describe('when it is loading', () => {
    it('should display the loading overlay', () => {
      render(<BookClubDetails {...mockProps} joinBookClubLoading />);

      expect(screen.getByTestId('loading-overlay')).toBeInTheDocument();
    });
  });

  it('should have an image', () => {
    render(<BookClubDetails {...mockProps} />);

    expect(screen.getByTestId('book-club-image')).toBeInTheDocument();
  });

  it('should have a title', () => {
    render(<BookClubDetails {...mockProps} />);

    expect(screen.getByTestId('book-club-title')).toBeInTheDocument();
  });

  it('should have a join book club button', () => {
    render(<BookClubDetails {...mockProps} />);

    expect(screen.getByTestId('join-book-club-button')).toBeInTheDocument();
  });

  it('should have a description', () => {
    render(<BookClubDetails {...mockProps} />);

    expect(screen.getByTestId('book-club-description')).toBeInTheDocument();
  });

  describe('when there are memebers', () => {
    it('should show the number of members', () => {
      const props = {
        bookClub: {
          name: 'test',
          description: 'description',
          _id: 'id',
          category: ['romance', 'classics'],
          members: 1,
        },
        joinBookClub: jest.fn(),
        bookClubId: '12345',
        joinBookClubData: undefined,
      };
      render(<BookClubDetails {...props} />);

      expect(screen.getByTestId('book-club-members')).toBeInTheDocument();
      expect(screen.getByText('(1)')).toBeInTheDocument();
    });
  });

  it('should show the book club type', () => {
    render(<BookClubDetails {...mockProps} />);

    expect(screen.getByTestId('book-club-type')).toBeInTheDocument();
  });
});
