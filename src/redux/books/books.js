// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer
export default function addReducer(state = [], action = {}) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}

// Action Creators
export const addBook = (payload) => {
  return {
    type: ADD_BOOK,
    payload,
  };
};

export const removeBook = (payload) => {
  return {
    type: REMOVE_BOOK,
    payload,
  };
};
