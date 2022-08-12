import React, { useEffect, useState } from 'react';
// Remaned Routes as RouterRoutes so I could import below the from routes.js Routes
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from './pages/Home';
import AddBookClub from './pages/AddBookClub';
import { Routes } from './routes';
import Layout from './components/Layout';
import BookClub from './pages/BookClub';
import BookClubSearch from './pages/BookClubSearch';
import { Provider } from 'react-redux';
import { store } from './store';
import { useGenerateUsernameQuery } from './redux/services/user/user';

const AppWrapper = () => {
  const [username, setUsername] = useState();
  const { data } = useGenerateUsernameQuery();

  useEffect(() => {
    const localStorageName = localStorage.getItem('username');
    if (!localStorageName && data) {
      localStorage.setItem('username', data?.username);
      setUsername(data?.username);
      return;
    }

    setUsername(localStorageName);
  }, [data]);

  return (
    <RouterRoutes>
      <Route path="/" element={<Layout />}>
        <Route path={Routes.home.path} exact={true} element={<Home />} />
        <Route
          path={Routes.addBookClub.path}
          exact={true}
          element={<AddBookClub />}
        />
        <Route
          path={Routes.bookClub.path}
          exact={true}
          element={<BookClub username={username} />}
        />
        <Route
          path={Routes.bookClubSearch.path}
          exact={true}
          element={<BookClubSearch />}
        />
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
