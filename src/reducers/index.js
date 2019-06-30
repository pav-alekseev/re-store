/* eslint-disable no-case-declarations */
import * as actionTypes from '../action-types';

const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0,
};

const updateCardItems = (cartItems, item, idx) => (idx === -1
  ? [
    ...cartItems,
    item,
  ]
  : [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1),
  ]
);

const updateCardItem = (book, item = {}) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0,
  } = item;

  return {
    id,
    title,
    count: count + 1,
    total: total + book.price,
  };
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
      const { books, cartItems } = state;

      const bookId = action.payload;
      const book = books.find(({ id }) => id === bookId);
      const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
      const item = cartItems[itemIndex];

      const newItem = updateCardItem(book, item);

      return {
        ...state,
        cartItems: updateCardItems(cartItems, newItem, itemIndex),
      };
    default:
      return state;
  }
};

export default reducer;
