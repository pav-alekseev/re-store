import React from 'react';

import './shop-header.css';

const ShopHeader = ({ numItems, total}) => (
  <header className="shop-header row">
    <a className="logo text-dark" href="./"> ReStore</a>
    <a className="shopping-cart" href="./">
      <i className="cart-icon fa fa-shopping-cart" />
      {numItems} items (${total})
    </a>
  </header>
);

export default ShopHeader;
