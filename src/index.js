import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { App } from 'components/App';
import { store } from './components/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from "./components/redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Provider store={store}>   
        <PersistGate loading={null} persistor={persistor}>
          <App />
          </PersistGate>
      </Provider>
      </BrowserRouter>
  </React.StrictMode>
);