import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './Button.css';

const cx = classNames.bind(style);

const Button = ({ text, dataTestId, variant, type }) => {
  return (
    <button type={type} className={cx('button', variant)} data-qa={dataTestId}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

Button.defaultProps = {
  variant: '',
};

export default Button;
