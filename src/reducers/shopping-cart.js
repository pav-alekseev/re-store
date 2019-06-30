import * as actionTypes from '../action-types';

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1),
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item,
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1),
  ];
};

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0,
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + (book.price * quantity),
  };
};

const updateOrder = (state, bookId, quantity) => {
  const { bookList: { books }, shoppingCart: { cartItems } } = state;

  const book = books.find(({ id }) => id === bookId);

  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  const updatedItem = updateCartItem(book, item, quantity);
  const updatedCartItems = updateCartItems(cartItems, updatedItem, itemIndex);

  return {
    cartItems: updatedCartItems,
    orderTotal: updatedCartItems.reduce(
      (acc, { total }) => acc + total,
      0,
    ),
  };
};

const updateShoppingCart = (state, action) => {
  if (!state) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);

  switch (action.type) {
    case actionTypes.BOOK_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);
    case actionTypes.BOOK_REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -1);
    case actionTypes.ALL_BOOKS_REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -item.count);
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
