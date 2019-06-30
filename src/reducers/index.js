import * as actionTypes from '../action-types';

const initialState = {
  books: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOOKS_LOADED:
      return {
        books: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
