import React from 'react';
import classNames from 'classnames/bind';
import BookClubForm from '../../components/BookClubForm';
import text from '../../text.json';
import style from './EditBookClub.css';
import { useParams } from 'react-router-dom';
import { useGetBookClubByIdQuery } from '../../redux/services/bookClub/bookClub';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';

const cx = classNames.bind(style);

const { editbookClubForm } = text;

const EditBookClub = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetBookClubByIdQuery(id);

  if (error) {
    return <p>{text.error.generic}</p>;
  }

  return (
    <div className={cx('edit-book-club-page')} data-qa="edit-book-club-page">
      <h2
        className={cx('edit-book-club-page-title')}
        data-qa="edit-book-club-page-title"
      >
        {editbookClubForm.title}
      </h2>
      {isLoading && <LoadingOverlay loading={isLoading} />}
      <BookClubForm data={data} />
    </div>
  );
};

export default EditBookClub;
