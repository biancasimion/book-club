import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './BookClubDetails.css';
import text from '../../text.json';
import Button from '../Button';
const cx = classNames.bind(style);
import categories from '../../../config/categories';
import PropTypes from 'prop-types';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';

const formatCategories = (category) => {
  const matchingCatgeory = categories.find((item) => item.value === category);
  return matchingCatgeory.name;
};

const BookClubDetails = ({
  bookClub,
  joinBookClub,
  joinBookClubError,
  joinBookClubLoading,
  bookClubId,
  joinBookClubData,
}) => {
  const [categoryName, setCategoryName] = useState();
  const [error, setError] = useState();
  const [members, setMembers] = useState(0);

  const joinBookClubById = () => {
    joinBookClub({ id: bookClubId });
  };

  useEffect(() => {
    if (joinBookClubData) {
      setMembers(joinBookClubData.members);
    }
  }, [joinBookClubData]);

  useEffect(() => {
    if (!joinBookClubData && bookClub.members) {
      setMembers(bookClub.members);
    }
  }, [joinBookClubData, bookClub]);

  useEffect(() => {
    if (joinBookClubError) {
      setError(text.error.generic);
    }
  }, [joinBookClubError]);

  useEffect(() => {
    if (bookClub.category.length > 0) {
      bookClub.category.map((item) => {
        setCategoryName((previousState) => {
          if (previousState) {
            return `${previousState}, ${formatCategories(item)}`;
          }
          return `${formatCategories(item)}`;
        });
      });
    }
  }, [bookClub]);

  return (
    <div
      className={cx('book-club-details')}
      data-qa="book-club-details-container"
    >
      {error && (
        <p className={cx('error')} data-qa="error-message">
          {error}
        </p>
      )}
      {joinBookClubLoading && <LoadingOverlay loading />}
      <div className={cx('wrapper')}>
        <div className={cx('book-club-image-wrapper')}>
          <div className={cx('book-club-image')} data-qa="book-club-image" />
        </div>
        <div className={cx('book-club-details__wrapper')}>
          <div className={cx('book-club-title-wrapper')}>
            <h2 className={cx('book-club-title')} data-qa="book-club-title">
              {bookClub.name}
            </h2>
            <Button
              text="Join"
              dataTestId="join-book-club-button"
              type="button"
              variant="small"
              onClick={() => joinBookClubById()}
            />
          </div>
          <div className={cx('book-club-description-wrapper')}>
            <div
              className={cx('book-club-description')}
              data-qa="book-club-description"
            >
              {bookClub.description}
            </div>
          </div>
          <div
            className={cx('book-club-category-info')}
            data-qa="book-club-category-info"
          >
            <div className={cx('book-club-label-wrapper')}>
              <div
                className={cx('book-club-label')}
                data-qa="book-club-category-title"
              >
                Category
              </div>
              <div
                className={cx('book-club-label')}
                data-qa="book-club-type-title"
              >
                Type
              </div>
              <div
                className={cx('book-club-label')}
                data-qa="book-club-type-members"
              >
                Members
              </div>
            </div>
            <div className={cx('book-club-category-info-wrapper')}>
              <div
                className={cx('book-club-category')}
                data-qa="book-club-category"
              >
                {categoryName}
              </div>
              <div className={cx('book-club-type')} data-qa="book-club-type">
                {bookClub.isPrivate
                  ? text.bookClub.privateGroup
                  : text.bookClub.publicGroup}
                <span> {bookClub.isAdultOnly && text.bookClub.adultOnly}</span>
              </div>
              <div
                className={cx('book-club-memebers')}
                data-qa="book-club-members"
              >
                ({members})
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BookClubDetails.propTypes = {
  bookClub: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    members: PropTypes.number,
    isPrivate: PropTypes.bool,
    isAdultOnly: PropTypes.bool,
  }),
  joinBookClub: PropTypes.func.isRequired,
  joinBookClubError: PropTypes.string,
  joinBookClubLoading: PropTypes.bool,
  bookClubId: PropTypes.string.isRequired,
  joinBookClubData: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    members: PropTypes.number,
  }),
};

BookClubDetails.defaultProps = {
  bookClub: {},
  joinBookClubError: undefined,
  joinBookClubLoading: false,
  joinBookClubData: undefined,
};

export default BookClubDetails;
