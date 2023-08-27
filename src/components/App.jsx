import PhoneBook from './PhoneBook/PhoneBook';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

export const App = () => {
  return (
    <Router>
      <div>
         <Navigation />
          <Route path="/contacts" component={PhoneBook} />
     </div>
    </Router>
    
  );
};