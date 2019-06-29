import * as actionTypes from '../action-types';

const booksLoaded = newBooks => ({
  type: actionTypes.BOOKS_LOADED,
  payload: newBooks,
});

export {
  booksLoaded,
};
