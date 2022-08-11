import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './CommentsList.css';
import PropTypes from 'prop-types';
import { formatDateAndTime } from '../../helpers/formatDateAndTime';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const cx = classNames.bind(style);

const CommentsList = ({ comments }) => {
  return (
    <div
      className={cx('comments-list-wrapper')}
      data-qa="comments-list-wrapper"
    >
      {comments.map((comment) => {
        return (
          <div className={cx('comment__content-wrapper')} key={comment._id}>
            <div className={cx('comment__image')}></div>
            <div className={cx('comment__content')}>
              <div className={cx('comment__title-wrapper')}>
                <div
                  className={cx('comment__username')}
                  data-qa="comment-username"
                >
                  {comment.userName}
                </div>
                <div className={cx('comment__date')} data-qa="comment-date">
                  {formatDateAndTime(comment.date)}
                </div>
              </div>

              <div className={cx('comment')} data-qa="comment">
                {comment.comment}
              </div>
              <div className={cx('comment__buttons')}>
                <div className={cx('comment__like-button')}>
                  <FontAwesomeIcon icon={solid('thumbs-up')} />
                </div>
                <div className={cx('comment__reply-button')}>
                  <Button
                    variant="no-outline"
                    text="Reply"
                    dataTestId="reply-button"
                    type="button"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      date: PropTypes.string,
      userName: PropTypes.string,
      hasBeenEdited: PropTypes.bool,
      likes: PropTypes.number,
    })
  ).isRequired,
};

export default CommentsList;
