import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { contactSlice } from "./contactsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { authSlice } from "./redux-auth/auth-slice";

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: [], 
};

const authPersistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);
const persistedContactReducer = persistReducer(contactsPersistConfig, contactSlice.reducer);


export const store = configureStore({
   reducer: {
    auth: persistedAuthReducer,
    contacts: persistedContactReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);