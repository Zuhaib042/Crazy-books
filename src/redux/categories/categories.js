// Actions
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Reducer
const checkstatusReducer = (state = [], action = {}) => {
  // do reducer stuff
  if (action.type === CHECK_STATUS) {
    return 'Under Construction';
  } else {
    return state;
  }
};

// Action Creators
export const checkStatus = (payload) => {
  return {
    type: CHECK_STATUS,
    payload,
  };
};

export default checkstatusReducer;
