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

export {
  booksRequested,
  booksLoaded,
  booksError,
};
