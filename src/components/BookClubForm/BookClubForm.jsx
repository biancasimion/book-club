import React, { useState } from 'react';
import classNames from 'classnames';
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
const { bookClubForm } = text;
const cx = classNames.bind(style);
const { backendDev } = config;

const BookClubForm = () => {
  const [bookCategory, setBookCategory] = useState([]);
  const [showSelectList, setShowSelectList] = useState(false);

  const onCategoryChange = (event) => {
    const { value } = event.target;
    console.log('VALUE_---', value, bookCategory);

    setBookCategory([...bookCategory, value]);
  };

  const showSelect = () => {
    setShowSelectList(!showSelectList);
  };

  const selectedCategories = () => {
    return bookCategory.map((category, index) => {
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const fromData = {
      data: {
        name: data.bookClubName,
        description: data.bookClubDescription,
        category: data.category,
        ...(data.privateCheckbox && { isPrivate: data.privateCheckbox }),
        ...(data.adultCheckbox && { isAdultOnly: data.adultCheckbox }),
      },
    };

    const response = await axios.post(`${backendDev}/api/v1/book-club`, {
      ...fromData,
    });
    console.log('RESPONSE', response);
    // add loader and redirect the user to their new book club page
  };
  return (
    <form
      className={cx('book-club-form')}
      data-qa="book-club-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={cx('input-wrapper')}>
        <Input
          id="bookClubName"
          type="text"
          dataTestId="book-club"
          name="bookClubName"
          onChange={() => {}}
          labelText="Book Club Name *"
          register={{ ...register('bookClubName') }}
        />
      </div>
      <div className={cx('input-wrapper')}>
        <Input
          id="bookClubDescription"
          type="text"
          dataTestId="book-club-description"
          name="bookClubDescription"
          onChange={() => {}}
          labelText="Description *"
          register={{ ...register('bookClubDescription') }}
        />
      </div>
      <div className={cx('input-wrapper')}>
        <Label
          htmlFor="book-club-category-btn"
          labelText="Category *"
          dataTestId={'book-club-category-label'}
        />
        <div
          className={cx('book-club-select-button')}
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
        <Button type="button" dataTestId="cancel-form-button" text="Cancel" />
        <Button type="submit" dataTestId="submit-form-button" text="Create" />
      </div>
    </form>
  );
};

export default BookClubForm;
