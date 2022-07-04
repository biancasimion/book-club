import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar';

const Layout = () => {
  return (
    <main data-qa="layout">
      <NavigationBar />
      <Outlet />
    </main>
  );
};

export default Layout;
