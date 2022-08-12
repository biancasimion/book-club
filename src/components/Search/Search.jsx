import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './Search.css';
import Input from '../Input';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BookClubSearch from '../BookClubSearch';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const cx = classNames.bind(style);

const Search = () => {
  const [searchTerm, setSearchTerm] = useState();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (searchTerm) => {
    setSearchTerm(searchTerm.searchBookClub);
  };

  return (
    <div>
      <form className={cx('search-form')} onSubmit={handleSubmit(onSubmit)}>
        <div className={cx('search-wrapper')}>
          <div className={cx('search-input-wrapper')}>
            <Input
              placeholder="Search for a book club"
              type="text"
              id="search-book-club"
              name="searchBookClub"
              dataTestId="search-book-club"
              register={{
                ...register('searchBookClub'),
              }}
            />
          </div>
          <div className={cx('search-button-wrapper')}>
            <button
              className={cx('search-button')}
              data-qa="submit-form-button"
              type="submit"
            >
              <FontAwesomeIcon icon={solid('search')} />
            </button>
          </div>
        </div>
      </form>
      {searchTerm && <BookClubSearch searchTerm={searchTerm} />}
    </div>
  );
};

export default Search;
