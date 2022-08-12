import React from 'react';
import classNames from 'classnames/bind';
import style from './BookClubList.css';
import PropTypes from 'prop-types';
import { formatBookClubCstegories } from '../../helpers/formatCategories';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);

const BookClubList = ({ bookClubList }) => {
  const navigate = useNavigate();

  return (
    <div className={cx('book-club-list-wrapper')}>
      <div className={cx('book-club-list-number')}>
        {bookClubList.length} book clubs found
      </div>
      <div className={cx('book-club-list')}>
        {bookClubList.map((bookClubData) => {
          const randomBackgroundColor = Math.floor(
            Math.random() * 16777215
          ).toString(16);

          return (
            <div
              type="button"
              className={cx('book-club-list-item')}
              key={bookClubData._id}
              onClick={() => navigate(`/book-club/${bookClubData._id}`)}
            >
              <div
                style={{ background: `#${randomBackgroundColor}` }}
                className={cx('book-club-list-image')}
              ></div>
              <div className={cx('book-club-name')}>{bookClubData.name}</div>
              <div className={cx('book-category')}>
                {formatBookClubCstegories(bookClubData.category)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

BookClubList.propTypes = {
  bookClubList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default BookClubList;
