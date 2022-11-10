import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import addremoveReducer from './books/books';
import checkstatusReducer from './categories/categories';

const reducer = combineReducers({
  addremove: addremoveReducer,
  checkstatus: checkstatusReducer,
});

const store = configureStore(
  {
    reducer,
  },
  applyMiddleware(thunk),
);

export default store;
