import React from 'react';
// Remaned Routes as RouterRoutes so I could import below the from routes.js Routes
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from './pages/Home';
import AddBookClub from './pages/AddBookClub';
import { Routes } from './routes';
import Layout from './components/Layout';
import BookClub from './pages/BookClub';
import { Provider } from 'react-redux';
import { store } from './store';

const AppWrapper = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Layout />}>
        <Route path={Routes.home.path} exact={true} element={<Home />} />
        <Route
          path={Routes.addBookClub.path}
          exact={true}
          element={<AddBookClub />}
        />
        <Route path="/book-club/:id" exact={true} element={<BookClub />} />
      </Route>
    </RouterRoutes>
  );
};

const App = () => (
  <Provider store={store}>
    <AppWrapper />
  </Provider>
);

export default App;
