import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './Label.css';

const cx = classNames.bind(style);

const Label = ({ htmlFor, labelText, dataTestId, variant }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cx('input-label', variant)}
      data-qa={dataTestId}
    >
      {labelText}
    </label>
  );
};

Label.propTypes = {
  labelText: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

Label.defaultProps = {
  variant: '',
};

export default Label;
