import React from 'react';
import { Typography } from '@mui/material';
import classNames from 'classnames';
import BookClubForm from '../../components/BookClubForm';
import text from '../../text.json';
import style from './AddBookClub.css';

const cx = classNames.bind(style);

const { bookClubForm } = text;
const AddBookClub = () => {
  return (
    <div className={cx('add-book-club-page')} data-qa="add-book-club-page">
      <h2
        className={cx('add-book-club-page-title')}
        data-qa="add-book-club-page-title"
      >
        {bookClubForm.title}
      </h2>
      <BookClubForm />
    </div>
  );
};

export default AddBookClub;
