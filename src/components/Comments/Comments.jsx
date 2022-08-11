import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Comments.css';
import PropTypes from 'prop-types';
import Comment from '../Comment';
import CommentsList from '../CommentsList';

const cx = classNames.bind(style);

const Comments = ({
  addComment,
  addCommentLoading,
  addCommentError,
  username,
  bookClubId,
  comments,
}) => {
  const [numberOfComments, setNumberOfComments] = useState(0);

  useEffect(() => {
    if (comments && comments.length > 0) {
      setNumberOfComments(comments.length);
    }
  }, [comments]);

  const commentsTitle =
    numberOfComments > 0 ? `Comments (${numberOfComments})` : 'Comments';

  return (
    <div className={cx('comments-wrapper')} data-qa="comments-wrapper">
      <h4 className={cx('comments-wrapper__title')} data-qa="comments-title">
        {commentsTitle}
      </h4>
      {comments && <CommentsList comments={comments} />}
      {username && (
        <Comment
          addComment={addComment}
          addCommentLoading={addCommentLoading}
          addCommentError={addCommentError}
          username={username}
          bookClubId={bookClubId}
        />
      )}
    </div>
  );
};

Comments.propTypes = {
  username: PropTypes.string.isRequired,
  bookClubId: PropTypes.string.isRequired,
  addCommentError: PropTypes.string,
  addCommentLoading: PropTypes.bool,
  addComment: PropTypes.func,
  addCommentData: PropTypes.shape(),
  comments: PropTypes.arrayOf(PropTypes.shape()),
};

Comments.defaultProps = {
  addCommentError: undefined,
  addCommentLoading: false,
  addCommentData: undefined,
  addComment: () => null,
  comments: undefined,
};

export default Comments;
