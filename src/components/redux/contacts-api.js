import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { deleteNumber, handleSubmit } from './contactsSlice';

// axios.defaults.baseURL = `https://connections-api.herokuapp.com/`;
const BASE_URL = `https://64e621f209e64530d17fa2cc.mockapi.io/contacts/`;
