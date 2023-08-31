import { createSlice } from "@reduxjs/toolkit";
import { createNewUser } from "./auth-operation";
import { login } from "./auth-operation";
import { logOut } from "./auth-operation";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
         auth: {
            user: { 'name': null, 'email': null },
            isLoggedIn: false,
            token: null,
            isLoading: false,
            error: null,
        },
    },
    extraReducers: {
        [createNewUser.pending](state, action) {
            state.auth.isLoading = true;
        },
        [createNewUser.fulfilled](state, action) {
            state.auth.isLoading = false;
             state.auth.user = action.payload.user;
             state.auth.token = action.payload.token;
             state.auth.isLoggedIn = true;
        },
         [createNewUser.rejected](state, action) {
            state.auth.error = true;
        },
          [login.pending](state, action) {
            state.auth.isLoading = true;
        },
        [login.fulfilled](state, action) {
             state.auth.isLoading = false;
             state.auth.user = action.payload.user;
             state.auth.token = action.payload.token;
             state.auth.isLoggedIn = true;
        },
          [login.rejected](state, action) {
            state.auth.error = true;
        },
          [logOut.pending](state, action) {
            state.auth.isLoading = true;
        },
        [logOut.fulfilled](state, action) {
             state.auth.isLoading = false;
            state.auth.user = { 'name': null, 'email': null };
            state.auth.isLoggedIn = false;
            state.auth.token = null;
        },
          [logOut.rejected](state, action) {
            state.auth.error = true;
        },
    }
})