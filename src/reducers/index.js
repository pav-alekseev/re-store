import * as actionTypes from '../action-types';

const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOOKS_REQUEST:
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_BOOKS_FAILURE:
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case actionTypes.BOOK_ADDED_TO_CART:
      const bookId = action.payload;
      const book = state.books.find(book => book.id === bookId);
      const newItem = {
        id: bookId,
        name: book.title,
        count: 1,
        total: book.price,
      };

      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };
    default:
      return state;
  }
};

export default reducer;
