import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Input from '../Input';
import { useForm } from 'react-hook-form';
import bookCategories from '../../../config/categories';
import style from './BookClubForm.css';
import text from '../../text.json';
import Label from '../Label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import axios from 'axios';
import config from '../../../config/default.json';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Routes } from '../../routes';

const { bookClubForm, error } = text;
const cx = classNames.bind(style);
const { backendDev, backendLocal } = config;

const BookClubForm = ({ data }) => {
  const navigate = useNavigate();

  const [bookCategory, setBookCategory] = useState([]);
  const [showSelectList, setShowSelectList] = useState(false);
  const [hasFormBeenSubmitted, setHasFormBeenSubmitted] = useState(false);
  const [showCategoryError, setShowCategoryError] = useState(false);
  const [showError, setShowError] = useState(false);
  const [defaultData, setDefaultData] = useState({});

  const onCategoryChange = (event) => {
    const { value } = event.target;
    return setBookCategory([...bookCategory, value]);
  };

  const showSelect = () => {
    setShowCategoryError(false);
    setShowSelectList(!showSelectList);
  };

  const selectedCategories = () => {
    return bookCategory.map((category) => {
      const selectedItem = bookCategories.find((item) => {
        return item.value === category;
      });

      return (
        <div className={cx('selected-item')} key={category}>
          {selectedItem.name}
        </div>
      );
    });
  };

  useEffect(() => {
    if (hasFormBeenSubmitted && bookCategory.length === 0 && !errors.category) {
      setShowCategoryError(true);
    }
  }, [hasFormBeenSubmitted, bookCategory]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultData,
  });

  useEffect(() => {
    if (data) {
      setDefaultData({
        bookClubName: data.name,
        category: data.category,
        bookClubDescription: data.description,
        privateCheckbox: data.isPrivate,
        adultCheckbox: data.isAdultOnly,
      });
      setBookCategory(data.category);
    }
  }, [data]);

  useEffect(() => {
    if (Object.keys(defaultData).length > 0) {
      reset(defaultData);
    }
  }, [reset, defaultData]);

  const onSubmit = async (data) => {
    const fromData = {
      data: {
        name: data.bookClubName,
        description: data.bookClubDescription,
        category: data.category,
        ...(data.privateCheckbox && { isPrivate: data.privateCheckbox }),
        ...(data.adultCheckbox && { isAdultOnly: data.adultCheckbox }),
      },
    };

    try {
      const response = await axios.post(`${backendDev}/api/v1/book-club`, {
        ...fromData,
      });

      if (response.status === 200) {
        const { _id } = response.data;

        navigate(`/book-club/${_id}`);
      }
    } catch (e) {
      setShowError(true);
    }
  };

  const errorMessage = (message) => {
    return <div className={cx('error-message')}>{message}</div>;
  };

  return (
    <form
      className={cx('book-club-form')}
      data-qa="book-club-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      {showError && (
        <div className={cx('error-message', 'main')}>{error.generic}</div>
      )}
      <div className={cx('input-wrapper')}>
        <Input
          id="bookClubName"
          type="text"
          dataTestId="book-club"
          name="bookClubName"
          onChange={() => {}}
          labelText="Book Club Name *"
          register={{
            ...register('bookClubName', {
              required: true,
              maxLength: 80,
            }),
          }}
          error={!!errors.bookClubName}
        />
        {errors.bookClubName && errorMessage(bookClubForm.errors.bookClubName)}
      </div>
      <div className={cx('input-wrapper')}>
        <Input
          id="bookClubDescription"
          type="text"
          dataTestId="book-club-description"
          name="bookClubDescription"
          onChange={() => {}}
          labelText="Description *"
          register={{
            ...register('bookClubDescription', {
              required: true,
            }),
          }}
          error={!!errors.bookClubDescription}
        />
        {errors.bookClubDescription &&
          errorMessage(bookClubForm.errors.bookClubDescription)}
      </div>
      <div className={cx('input-wrapper')}>
        <Label
          htmlFor="book-club-category-btn"
          labelText="Category *"
          dataTestId={'book-club-category-label'}
        />
        <div
          className={cx('book-club-select-button', {
            error: !!errors.category,
          })}
          id="book-club-category-btn"
          onClick={() => showSelect()}
          data-qa="book-club-select-button"
        >
          <div
            data-qa="book-club-select-button-copy"
            className={cx('book-club-select-button-copy')}
          >
            {bookCategory.length === 0
              ? 'Choose one or more categories'
              : selectedCategories()}
          </div>
          <div
            data-qa="book-club-select-button-icon"
            className={cx('book-club-select-button-icon')}
          >
            {showSelectList ? (
              <FontAwesomeIcon icon={solid('chevron-up')} />
            ) : (
              <FontAwesomeIcon icon={solid('chevron-down')} />
            )}
          </div>
        </div>
        {showSelectList && (
          <select
            id="book-club-category"
            className={cx('select')}
            {...register('category', {
              validate: {
                errors: (value) => {
                  if (value.length === 0) {
                    return bookClubForm.errors.bookClubCategory;
                  }
                },
              },
              onChange: (e) => onCategoryChange(e),
              onBlur: () => setShowSelectList(false),
            })}
            value={bookCategory}
            multiple
            data-qa="category-select"
          >
            {bookCategories.map((category) => {
              return (
                <option
                  data-qa="select-category-option"
                  key={category.value}
                  value={category.value}
                >
                  {category.name}
                </option>
              );
            })}
          </select>
        )}
        {errors.category && errorMessage(bookClubForm.errors.bookClubCategory)}
        {!errors.category &&
          showCategoryError &&
          errorMessage(bookClubForm.errors.bookClubCategory)}
      </div>
      <div className={cx('input-wrapper')}>
        <Input
          id="book-club-private-checkbox"
          name="privateCheckbox"
          type="checkbox"
          dataTestId="book-club-private-checkbox"
          labelText={bookClubForm.isPrivate}
          variant="row"
          register={{ ...register('privateCheckbox') }}
        />
      </div>
      <div className={cx('input-wrapper')}>
        <Input
          id="book-club-adult-checkbox"
          name="adultCheckbox"
          type="checkbox"
          dataTestId="book-club-adult-checkbox"
          labelText={bookClubForm.isAdultOnly}
          variant="row"
          register={{ ...register('adultCheckbox') }}
        />
      </div>

      <div className={cx('form-buttons-wrapper')}>
        <Button
          type="button"
          dataTestId="cancel-form-button"
          text="Cancel"
          onClick={() => navigate(Routes.home.path)}
        />
        <Button
          type="submit"
          onClick={() => {
            setHasFormBeenSubmitted(true);
          }}
          dataTestId="submit-form-button"
          text={data ? 'Edit' : 'Create'}
        />
      </div>
    </form>
  );
};

BookClubForm.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    members: PropTypes.number,
    isPrivate: PropTypes.bool,
    isAdultOnly: PropTypes.bool,
  }),
};

BookClubForm.defaultProps = {
  data: undefined,
};

export default BookClubForm;
