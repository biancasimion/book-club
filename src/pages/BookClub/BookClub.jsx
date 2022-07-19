import React from 'react';
import classNames from 'classnames/bind';
import Comments from '../../components/Comments';
import style from './BookClub.css';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(style);

const BookClub = () => {
  const { id } = useParams();
  console.log('======', id);
  return (
    <div className={cx('book-club-page')} data-qa="book-club-page">
      <h2 className={cx('book-club-page-title')} data-qa="book-club-page-title">
        Name of the book club
      </h2>
      <Comments />
    </div>
  );
};

export default BookClub;
