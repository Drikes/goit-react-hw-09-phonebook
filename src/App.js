import React, { Suspense, lazy, useEffect } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from './routes';


import AppBar from './components/UserMenu';

import { getCurrentUser } from './redux/auth/auth-operations';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components//PublicRoute/PublicRoute';

import './app.css'

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */)
);

const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-view" */)
);

const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-view" */)
);

const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-view" */)
);


export default function App() {

  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);


  return (
    <div  className="app">
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute exact path={routes.home} component={HomeView} />
          <PrivateRoute
            path={routes.contacts}
            redirectTo="/login"
            component={ContactsView}
          />
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo="/contacts"
            component={LoginView}
          />
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo="/"
            component={RegisterView}
          />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );

}
