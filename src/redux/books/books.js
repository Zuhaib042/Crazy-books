import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import fetchBooksfromApi from '../api/api';

// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';

// state data
const initialState = [];

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gINbrGI6GybOSE438a8P/books';

// Reducer
const addremoveReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // do reducer stuff
    case 'ADD_BOOK/fulfilled': {
      return [...state, action.payload];
    }
    case 'REMOVE_BOOK/fulfilled': {
      return [...state.filter((book) => book.id !== action.payload)];
    }
    case 'GET_BOOKS/fulfilled': {
      return action.payload;
    }
    default:
      return state;
  }
};

// Action Creators

export const fetchBooks = createAsyncThunk(GET_BOOKS, async () => {
  const payload = await fetchBooksfromApi();
  return payload;
});

export const addBook = createAsyncThunk(
  ADD_BOOK,
  async ({ id, title, author, category }) => {
    await axios.post(baseUrl, {
      item_id: id,
      title,
      author,
      category,
    });
    return { id, title, author, category };
  },
);

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (payload) => {
  await axios.delete(`${baseUrl}/${payload}`);
  return payload;
});

export default addremoveReducer;
