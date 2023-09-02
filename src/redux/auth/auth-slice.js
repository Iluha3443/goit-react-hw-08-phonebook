import { createSlice } from '@reduxjs/toolkit';
import { createNewUser, refreshUser, login, logOut } from './auth-operation';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    isLoggedIn: false,
    token: null,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [createNewUser.pending](state, action) {
      state.isLoading = true;
    },
    [createNewUser.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [createNewUser.rejected](state, action) {
      state.error = true;
    },
    [login.pending](state, action) {
      state.isLoading = true;
    },
    [login.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state, action) {
      state.error = true;
    },
    [logOut.pending](state, action) {
      state.isLoading = true;
    },
    [logOut.fulfilled](state, action) {
      state.isLoading = false;
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.token = null;
    },
    [logOut.rejected](state, action) {
      state.error = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
  },
});
