import PhoneBook from './PhoneBook/PhoneBook';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Register } from './Register/Register';

export const App = () => {
  return (
     <>
      <Navigation />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<PhoneBook />} />
        <Route path="/contacts" element={<PhoneBook />} />
      </Routes>
    </>
    
  );
};