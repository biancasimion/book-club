import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Comments from '../../components/Comments';
import style from './BookClub.css';
import { useParams } from 'react-router-dom';
import BookClubDetails from '../../components/BookClubDetails';
import {
  useGetBookClubByIdQuery,
  useJoinBookClubByIdMutation,
  useAddCommentMutation,
} from '../../redux/services/bookClub/bookClub';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import text from '../../text.json';
import PropTypes from 'prop-types';

const cx = classNames.bind(style);

const BookClub = ({ username }) => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const { data, error, isLoading } = useGetBookClubByIdQuery(id);

  useEffect(() => {
    if (data?.commentsData) {
      // Add the comments from the API to a react local state
      setComments(data.commentsData.comments);
    }
  }, [data]);

  const [
    joinBookClub,
    {
      isLoading: joinBookClubLoading,
      error: joinBookClubError,
      data: joinBookClubData,
    },
  ] = useJoinBookClubByIdMutation();

  const [
    addComment,
    {
      data: addCommentData,
      isLoading: addCommentLoading,
      error: addCommentError,
    },
  ] = useAddCommentMutation();

  useEffect(() => {
    if (addCommentData) {
      // Update the comments from the local state with the new
      // ones after calling addComment
      setComments(addCommentData.comments);
    }
  }, [addCommentData]);

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
      {username && (
        <Comments
          addComment={addComment}
          addCommentLoading={addCommentLoading}
          addCommentError={addCommentError}
          username={username}
          bookClubId={id}
          comments={comments}
        />
      )}
    </div>
  );
};

BookClub.propTypes = {
  username: PropTypes.string,
};

BookClubDetails.defaultProps = {
  username: undefined,
};

export default BookClub;
