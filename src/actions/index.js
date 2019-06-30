import * as actionTypes from '../action-types';

const booksRequested = () => ({
  type: actionTypes.FETCH_BOOKS_REQUEST,
});

const booksLoaded = newBooks => ({
  type: actionTypes.FETCH_BOOKS_SUCCESS,
  payload: newBooks,
});

const booksError = error => ({
  type: actionTypes.FETCH_BOOKS_FAILURE,
  payload: error,
});

export const bookAddedToCart = bookId => ({
  type: actionTypes.BOOK_ADDED_TO_CART,
  payload: bookId,
});

export const bookRemovedFromCart = bookId => ({
  type: actionTypes.BOOK_REMOVED_FROM_CART,
  payload: bookId,
});

export const allBooksRemovedFromCart = bookId => ({
  type: actionTypes.ALL_BOOKS_REMOVED_FROM_CART,
  payload: bookId,
});

export const fetchBooks = (bookstoreService, dispatch) => async () => {
  dispatch(booksRequested());

  try {
    const data = await bookstoreService.getBooks();
    dispatch(booksLoaded(data));
  } catch (error) {
    dispatch(booksError(error));
  }
};
