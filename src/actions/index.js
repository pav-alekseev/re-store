import * as actionTypes from '../action-types';

const booksRequested = () => ({
  type: actionTypes.BOOKS_REQUESTED,
});

const booksLoaded = newBooks => ({
  type: actionTypes.BOOKS_LOADED,
  payload: newBooks,
});

const booksError = error => ({
  type: actionTypes.BOOKS_ERROR,
  payload: error,
});

const fetchBooks = (bookstoreService, dispatch) => async () => {
  dispatch(booksRequested());

  try {
    const data = await bookstoreService.getBooks();
    dispatch(booksLoaded(data));
  } catch (error) {
    dispatch(booksError(error));
  }
};

export {
  fetchBooks,
};
