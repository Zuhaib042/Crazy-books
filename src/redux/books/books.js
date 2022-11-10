import { fetchBooksfromApi, addBooktoApi } from '../api/api';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

// state data
const initialState = [];

// Reducer
const addremoveReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // do reducer stuff
    case ADD_BOOK: {
      return [...state, action.payload];
    }
    case REMOVE_BOOK: {
      return [...state.filter((book) => book.id !== action.payload)];
    }
    case GET_BOOKS: {
      return action.payload;
    }
    default:
      return state;
  }
};

// Action Creators

export const fetchBooks = () => async (dispatch) => {
  const payload = await fetchBooksfromApi();
  dispatch({
    type: GET_BOOKS,
    payload,
  });
};

export const addBook = (payload) => async (dispatch) => {
  addBooktoApi(payload);
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export default addremoveReducer;
