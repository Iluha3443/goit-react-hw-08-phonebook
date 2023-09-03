import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getUserContacts, handleSubmit, deleteNumber } from './contactsSlice';

export const fetchUserContacts = createAsyncThunk(
  'user/contacts',
  async (_, { dispatch, getState }) => {
    try {
      const token = getState().auth.token;
      const { data } = await axios.get(`contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      dispatch(getUserContacts(data));
    } catch {}
  }
);

export const CreatedNewContacts = createAsyncThunk(
  'user/contacts',
  async (contact, { dispatch, getState }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.post(`/contacts`, contact, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(handleSubmit(response.data));
    } catch {}
  }
);

export const DeleteContactUser = createAsyncThunk(
  'user/contacts',
  async (id, { dispatch }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      dispatch(deleteNumber(id));
    } catch {}
  }
);
