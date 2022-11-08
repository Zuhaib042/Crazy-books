// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// state data

const data = [
  {
    id: 1,
    title: 'Prince of Persia',
    author: 'K.L Ceasar',
    category: 'History',
  },
  {
    id: 2,
    title: 'Optimus Prime',
    author: 'Luca King',
    category: 'Sci-fi',
  },
  {
    id: 3,
    title: 'Rings of Power',
    author: 'Tolkien',
    category: 'Fantasy',
  },
];

// Reducer
const addremoveReducer = (state = data, action = {}) => {
  switch (action.type) {
    // do reducer stuff
    case ADD_BOOK: {
      return [...state, action.payload];
    }
    case REMOVE_BOOK: {
      return [...state.filter((book) => book.id !== action.payload)];
    }
    default:
      return state;
  }
};

// Action Creators
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export default addremoveReducer;
