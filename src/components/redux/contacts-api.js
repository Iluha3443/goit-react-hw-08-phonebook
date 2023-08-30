import { token } from "./redux-auth/auth-operation";
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { getUserContacts,handleSubmit, deleteNumber } from "./contactsSlice";


export const fetchUserContacts = createAsyncThunk(
    "user/contacts", async (_,{dispatch}) => {
        try {
            const { data } = await axios.get(`contacts`);
            dispatch(getUserContacts(data))
        } catch {
            
        }
    }
)

export const CreatedNewContacts = createAsyncThunk(
    "user/contacts", async (contact,{dispatch}) => {
        try {
            const { data } = await axios.post(`/contacts`, contact);
            dispatch(handleSubmit(data))
        } catch {
            
        }
    }
)

export const DeleteContactUser = createAsyncThunk(
    "user/contacts", async (id,{dispatch}) => {
        try {
            await axios.delete(`/contacts/${id}`);
            dispatch(deleteNumber(id))
        } catch {
            
        }
    }
)
 

