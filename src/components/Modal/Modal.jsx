import React from 'react';
import classNames from 'classnames/bind';
import style from './Modal.css';
import Button from '../Button';
import PropTypes from 'prop-types';

const cx = classNames.bind(style);

const Modal = ({ content, text, cancelModal, onClick }) => {
  return (
    <div className={cx('modal')} data-qa="modal">
      <div className={cx('modal-wrapper')}>
        <div className={cx('modal-content')}>{content}</div>
        <div className={cx('modal-buttons-wrapper')}>
          <div className={cx('cancel-modal-button')}>
            <Button
              text="cancel"
              dataTestId="cancel-modal"
              onClick={() => cancelModal()}
              type="button"
              variant="small-green"
            />
          </div>
          <div>
            <Button
              text={text}
              dataTestId={`${text}-modal`}
              onClick={() => onClick()}
              type="button"
              variant="small-green"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  content: PropTypes.string,
  text: PropTypes.string,
  cancelModal: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  content: undefined,
  text: undefined,
};

export default Modal;
