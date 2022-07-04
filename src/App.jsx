import React from 'react';
// Remaned Routes as RouterRoutes so I could import below the from routes.js Routes
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from './pages/Home';
import AddBookClub from './pages/AddBookClub';
import { Routes } from './routes';
import Layout from './components/Layout';

const App = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Layout />}>
        <Route path={Routes.home.path} element={<Home />} />
        <Route path={Routes.addBookClub.path} element={<AddBookClub />} />
      </Route>
    </RouterRoutes>
  );
};

export default App;
