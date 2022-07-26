import React from 'react';
import classNames from 'classnames/bind';
import Comments from '../../components/Comments';
import style from './BookClub.css';
import { useParams } from 'react-router-dom';
import BookClubDetails from '../../components/BookClubDetails';
import {
  useGetBookClubByIdQuery,
  useJoinBookClubByIdMutation,
} from '../../redux/services/bookClub/bookClub';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import text from '../../text.json';

const cx = classNames.bind(style);

const BookClub = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetBookClubByIdQuery(id);
  const [
    joinBookClub,
    {
      isLoading: joinBookClubLoading,
      error: joinBookClubError,
      data: joinBookClubData,
    },
  ] = useJoinBookClubByIdMutation();

  return (
    <div className={cx('book-club-page')} data-qa="book-club-page">
      {error && <p>{text.error.generic}</p>}
      {isLoading && <LoadingOverlay loading />}
      {data && (
        <BookClubDetails
          bookClub={data}
          joinBookClub={joinBookClub}
          joinBookClubLoading={joinBookClubLoading}
          joinBookClubError={joinBookClubError}
          joinBookClubData={joinBookClubData}
          bookClubId={id}
        />
      )}
      <Comments />
    </div>
  );
};

export default BookClub;
