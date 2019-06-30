import React from 'react';

import './shop-header.css';

const ShopHeader = ({ numItems, total}) => (
  <header>
    <a href="./"> ReStore</a>
    <a href="./">
      <i className="fa fa-shopping-cart" />
      {numItems} items (${total})
    </a>
  </header>
);

export default ShopHeader;
