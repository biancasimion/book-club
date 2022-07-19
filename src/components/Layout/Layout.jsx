import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar';
import Container from '../Container';
import classNames from 'classnames/bind';
import style from './Layout.css';

const cx = classNames.bind(style);

const Layout = () => {
  return (
    <main className={cx('layout')} data-qa="layout">
      <NavigationBar />

      <Container>
        <div className={cx('page')}>
          <div className={cx('content')}>
            <Outlet />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Layout;
