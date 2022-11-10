// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const baseUrl = // eslint-disable-line
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gINbrGI6GybOSE438a8P/books';

const fetchBooksfromApi = async () => {
  const res = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const allBooks = await res.json();
  const books = Object.keys(allBooks).map((id) => ({
    id,
    title: allBooks[id][0].title,
    author: allBooks[id][0].author,
    category: allBooks[id][0].category,
  }));
  // .sort((a, b) => a.title.localeCompare(b.title));
  return books;
};

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

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export default addremoveReducer;
