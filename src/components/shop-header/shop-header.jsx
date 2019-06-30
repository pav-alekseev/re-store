/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './shop-header.css';

const ShopHeader = ({ numItems, total}) => (
  <header className="shop-header row">
    <Link to="/">
      <div className="logo text-dark"> ReStore</div>
    </Link>
    <Link to="/cart">
      <div className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </div>
    </Link>
  </header>
);

const mapStateToProps = ({ shoppingCart: { cartItems } }) => ({
  numItems: cartItems.reduce(
    (acc, { count }) => acc + count,
    0,
  ),
  total: cartItems.reduce(
    (acc, { total }) => acc + total,
    0,
  ),
});

export default connect(mapStateToProps)(ShopHeader);
