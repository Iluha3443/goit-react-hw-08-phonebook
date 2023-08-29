import PhoneBook from './PhoneBook/PhoneBook';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Register } from './Register/Register';
import { Login } from './Login/Login';


export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<PhoneBook />} />
      </Routes>
    </>
  );
};