import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.css';

import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';
import { withBookstoreService } from '../hoc';

const App = () => (
  <main role="main" className="container">
    <ShopHeader numItems={5} total={210} />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />
    </Switch>
  </main>
);

export default withBookstoreService()(App);
