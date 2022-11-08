import { configureStore } from '@reduxjs/toolkit';
import addremoveReducer from './books/books';
import checkstatusReducer from './categories/categories';

const store = configureStore({
  reducer: {
    addremove: addremoveReducer,
    checkstatus: checkstatusReducer,
  },
});

export default store;
