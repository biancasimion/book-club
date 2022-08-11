import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './Comment.css';
import Button from '../Button';
import PropTypes from 'prop-types';
import text from '../../text.json';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';

const cx = classNames.bind(style);

const Comment = ({
  addComment,
  addCommentLoading,
  addCommentError,
  username,
  bookClubId,
}) => {
  const [commentError, setCommentError] = useState();
  const [errors, setErrors] = useState({});
  const [commentData, setCommentData] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!commentData) {
      setErrors({ comment: 'Comment is required' });
    }
    const formData = {
      bookClubId,
      comment: {
        userName: username,
        comment: commentData,
        hasBeenEdited: false,
        date: new Date().toISOString(),
      },
    };

    addComment({ body: formData });
  };

  useEffect(() => {
    if (addCommentError) {
      setCommentError(text.error.generic);
    }
  }, [addCommentError]);

  return (
    <form
      className={cx('comment-form')}
      data-qa="comment-form"
      onSubmit={onSubmit}
    >
      {commentError && <p>{commentError}</p>}
      {addCommentLoading && <LoadingOverlay loading={addCommentLoading} />}
      <div className={cx('comment-section')} data-qa="comment-section">
        <div className={cx('comment-section__image')}></div>
        <div className={cx('comment-textarea-wrapper')}>
          <div>
            <textarea
              value={commentData}
              className={cx('comment-section__textarea')}
              placeholder="Leave a comment"
              id="comment"
              name="commentArea"
              onChange={(e) => {
                const hasCharacters = /[a-z]/g;

                if (!e.target.value || !hasCharacters.test(e.target.value)) {
                  setErrors({ comment: 'Comment is required' });
                  setCommentData();
                  return;
                }
                setCommentData(e.target.value);
                setErrors({});
              }}
              onBlur={() => setErrors({})}
            />
            {errors.comment && <p>{errors.comment}</p>}
          </div>
          <div className={cx('comment-section__buttons')}>
            <Button
              variant="space-right"
              type="button"
              dataTestId="cancel-comment-button"
              text="Cancel"
              onClick={() => setCommentData('')}
            />
            <Button type="submit" dataTestId="comment-button" text="Comment" />
          </div>
        </div>
      </div>
    </form>
  );
};

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  bookClubId: PropTypes.string.isRequired,
  addCommentError: PropTypes.string,
  addCommentLoading: PropTypes.bool,
  addComment: PropTypes.func,
};

Comment.defaultProps = {
  addCommentError: undefined,
  addCommentLoading: false,
  addComment: () => null,
};

export default Comment;
