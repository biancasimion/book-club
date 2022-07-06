import React, { useState } from 'react';
import classNames from 'classnames';
import style from './Comments.css';
import Button from '../Button';
const cx = classNames.bind(style);

const Comments = () => {
  const [numberOfComments, setNumberOfCmments] = useState(0);
  const commentsTitle =
    numberOfComments > 0 ? `Comments (${numberOfComments})` : 'Comments';

  return (
    <div className={cx('comments-wrapper')} data-qa="comments-wrapper">
      <h4 className={cx('comments-wrapper__title')} data-qa="comments-title">
        {commentsTitle}
      </h4>
      <div className={cx('comment-section')} data-qa="comment-section">
        <div className={cx('comment-section__image')}></div>
        <div className={cx('comment-textarea-wrapper')}>
          <textarea
            className={cx('comment-section__textarea')}
            id="comment"
            name="commentArea"
          />
          <div className={cx('comment-section__buttons')}>
            <Button
              variant="space-right"
              type="button"
              dataTestId="cancel-comment-button"
              text="Cancel"
            />
            <Button type="button" dataTestId="comment-button" text="Comment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
