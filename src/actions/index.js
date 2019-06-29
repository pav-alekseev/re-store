import * as actionTypes from '../action-types';

const booksLoaded = newBooks => ({
  type: actionTypes.booksLoaded,
  payload: newBooks,
});

export {
  booksLoaded,
};
