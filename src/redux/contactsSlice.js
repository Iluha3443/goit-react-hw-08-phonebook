import { createSlice } from "@reduxjs/toolkit";
import { fetchUserContacts,DeleteContactUser,CreatedNewContacts } from "./contacts-api";

export const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: {
            items: [],
            isLoading:false,
        },
        filter: ""
    },
    reducers: {
        emptyContactsBook(state, action) {
            state.contacts.items = [];
        },
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
         [fetchUserContacts.pending]: (state, actions) => {
             console.log(actions)
            state.contacts.isLoading = true;
        },
        [fetchUserContacts.fulfilled]: (state, actions) => {
            state.contacts.isLoading = false;
            state.contacts.items = actions.payload;
        },
         [fetchUserContacts.rejected]: (state, actions) => {
             state.contacts.isLoading = false;
             state.contacts.error = actions.payload;
        },
         [DeleteContactUser.pending]: (state, actions) => {
            state.contacts.isLoading = true;
        },
          [DeleteContactUser.fulfilled]: (state, actions) => {
            state.contacts.isLoading = false;
        },
        [DeleteContactUser.rejected]: (state, actions) => {
            state.contacts.isLoading = false;
        },
         [CreatedNewContacts.pending]: (state, actions) => {
            state.contacts.isLoading = true;
        },
         [CreatedNewContacts.fulfilled]: (state, actions) => {
             console.log(actions)
            state.contacts.isLoading = false;
        },
         [CreatedNewContacts.rejected]: (state, actions) => {
            state.contacts.isLoading = false;
        },
    }
});

export const { handleSubmit, deleteNumber, filteredContacts, getUserContacts } = contactSlice.actions;