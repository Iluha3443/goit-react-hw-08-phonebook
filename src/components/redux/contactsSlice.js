import { createSlice } from "@reduxjs/toolkit";
import { createNewUser } from "./redux-auth/auth-operation";
import { login } from "./redux-auth/auth-operation";
import { logOut } from "./redux-auth/auth-operation";


export const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        auth: {
            user: { 'name': null, 'email': null },
            isLoggedIn: false,
            token: null
        },
        contacts: {
            items: [],
            isLoading: false,
            error: null
        },
        filter: ""
    },
    reducers: {
        getUserContacts(state, actions) {
            state.contacts.items = actions.payload
        },
        handleSubmit(state, actions) {
            state.contacts.items.push(actions.payload)
        },
        deleteNumber(state, actions) {
            state.contacts.items = state.contacts.items.filter(contact => contact.id !== actions.payload)
        },
        filteredContacts(state, actions) {
            state.filter = actions.payload
        },
    },
    extraReducers: {
        [createNewUser.pending](state, action) {
            state.contacts.isLoading = true;
        },
        [createNewUser.fulfilled](state, action) {
              console.log(action)
             state.contacts.isLoading = false;
             state.auth.user = action.payload.user;
             state.auth.token = action.payload.token;
             state.auth.isLoggedIn = true;
        },
          [createNewUser.rejected](state, action) {
            state.contacts.error = true;
        },
          [login.pending](state, action) {
            state.contacts.isLoading = true;
        },
        [login.fulfilled](state, action) {
             state.contacts.isLoading = false;
             state.auth.user = action.payload.user;
             state.auth.token = action.payload.token;
             state.auth.isLoggedIn = true;
        },
          [login.rejected](state, action) {
            state.contacts.error = true;
        },
          [logOut.pending](state, action) {
            state.contacts.isLoading = true;
        },
        [logOut.fulfilled](state, action) {
             state.contacts.isLoading = false;
            state.auth.user = { 'name': null, 'email': null };
            state.auth.isLoggedIn = false;
            state.auth.token = null;
            state.contacts.items = [];
        },
          [logOut.rejected](state, action) {
            state.contacts.error = true;
        },
    }
});

export const { handleSubmit, deleteNumber, filteredContacts, getUserContacts } = contactSlice.actions;