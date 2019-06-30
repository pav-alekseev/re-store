import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => ({
  bookList: updateBookList(state, action),
  shoppingCart: updateShoppingCart(state, action),
});

export default reducer;
