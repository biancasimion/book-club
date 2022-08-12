import React from 'react';
import Typography from '@mui/material/Typography';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';
import text from '../../text.json';
import style from './Home.css';
import { Routes } from '../../routes';

const cx = classNames.bind(style);

const { home } = text;
const Home = () => {
  const navigate = useNavigate();
  const navigateOnClick = (route) => {
    navigate(route);
  };

  return (
    <div className={cx('home-page')} data-qa="home-page">
      <div className={cx('home-page__wrapper')} data-qa="home-page-wrapper">
        <Typography data-qa="home-page-title" variant="h4">
          {home.title}
        </Typography>
        <Typography data-qa="home-page-copy" variant="body1">
          {home.copy}
        </Typography>
        <div className={cx('home-page__buttons')} data-qa="home-page-buttons">
          <Button
            onClick={() => navigateOnClick(Routes.addBookClub.path)}
            data-qa="home-page-create-book-club-button"
            className={cx('home-page-button')}
            color="primary"
            variant="contained"
          >
            {home.items.crateBookClubBtn}
          </Button>
          <Button
            data-qa="home-page-search-book-club-button"
            className={cx('home-page-button')}
            color="primary"
            variant="contained"
            onClick={() => navigateOnClick(Routes.bookClubSearch.path)}
          >
            {home.items.searchBookClubBtn}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
