import React from 'react';
import classNames from 'classnames/bind';
import style from './BookClubSearch.css';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';
import PropTypes from 'prop-types';
import { useFindBookClubBySearchTermQuery } from '../../redux/services/bookClub/bookClub';
import BookClubList from '../BookClubList';
import text from '../../text.json';
const cx = classNames.bind(style);

const BookClubSearch = ({ searchTerm }) => {
  const { data, error, isLoading } =
    useFindBookClubBySearchTermQuery(searchTerm);

  return (
    <div className={cx('book-club-search-wrapper')}>
      {isLoading && <LoadingOverlay loading={isLoading} />}
      {error && <div className={cx('error-message')}>{text.error.generic}</div>}
      {data && <BookClubList bookClubList={data} />}
    </div>
  );
};

BookClubSearch.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default BookClubSearch;
