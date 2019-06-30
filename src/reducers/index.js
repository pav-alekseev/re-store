import * as actionTypes from '../action-types';

const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOOKS_LOADED:
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
