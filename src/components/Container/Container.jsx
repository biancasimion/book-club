import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import style from './Container.css';

const cx = classNames.bind(style);

const Container = ({ children }) => {
  return (
    <div className={cx('container')} data-qa="container">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default Container;
