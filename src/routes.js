/* eslint-disable import/prefer-default-export */
export const Routes = {
  home: {
    path: '/',
    label: 'Home Page',
  },
  addBookClub: {
    path: '/add-book-club',
    label: 'Add Book Club Page',
  },
  bookClub: {
    path: '/book-club/:id',
    label: 'Book Club Page',
  },
  bookClubSearch: {
    path: '/book-club/search',
    label: 'Book Club Search Page',
  },
  bookClubResults: {
    path: '/book-club/search/:q?',
    label: 'Book Club Results Page',
  },
  editBookClub: {
    path: '/book-club/edit/:id',
    label: 'Edit Book Club Page',
  },
};
