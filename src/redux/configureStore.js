import { configureStore, combineReducers } from '@reduxjs/toolkit';
import addremoveReducer from './books/books';
import checkstatusReducer from './categories/categories';

const rootReducer = combineReducers({
  reducer: {
    addremoveReducer,
    checkstatusReducer,
  },
});

const store = configureStore(rootReducer);

export default store;
