import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from './Input.css';
import Label from '../Label';
const cx = classNames.bind(style);

const Input = ({
  type,
  dataTestId,
  labelText,
  id,
  name,
  register,
  variant,
  error,
  placeholder,
}) => {
  return (
    <div
      className={cx('input-element-wrapper', variant)}
      data-qa={`input-${dataTestId}-wrapper`}
    >
      {labelText && (
        <Label
          htmlFor={id}
          dataTestId={`${dataTestId}-label`}
          labelText={labelText}
          variant={variant}
        />
      )}
      <input
        className={cx('input', variant, { error: error })}
        id={id}
        name={name}
        type={type}
        data-qa={`input-${dataTestId}`}
        {...register}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  variant: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  variant: '',
  error: false,
  labelText: undefined,
  placeholder: '',
};

export default Input;
