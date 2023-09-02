import PhoneBook from './PhoneBook/PhoneBook';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { Home } from './Home/Home';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { refreshUser } from 'redux/auth/auth-operation';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? (
        <p>Loading...</p>
      ) : (
        <>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={
                <PublicRoute redirectTo="/contacts" component={<Register />} />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<PhoneBook />} />
              }
            />
          </Routes>
        </>
      )}
    </>
  );
};
