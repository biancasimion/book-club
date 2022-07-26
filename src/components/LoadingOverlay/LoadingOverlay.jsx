import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './LoadingOverlay.css';

const cx = classNames.bind(style);

const LoadingOverlay = ({ loading }) => {
  if (!loading) {
    return null;
  }
  return (
    <div className={cx('loading-overlay')} data-qa="loading-overlay">
      <div className={cx('loading')} data-qa="loading">
        <div data-qa="spinner" className={cx('spinner')} />
      </div>
    </div>
  );
};

LoadingOverlay.propTypes = {
  loading: PropTypes.bool,
};

LoadingOverlay.defaultProps = {
  loading: false,
};

export default LoadingOverlay;
