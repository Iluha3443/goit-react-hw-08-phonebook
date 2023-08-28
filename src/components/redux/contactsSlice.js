import { createSlice } from "@reduxjs/toolkit";



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
         
    }
});

export const { handleSubmit, deleteNumber, filteredContacts } = contactSlice.actions;