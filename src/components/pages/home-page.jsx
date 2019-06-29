import React from 'react';
import { withRouter } from 'react-router-dom';

import BookList from '../book-list';

const HomePage = () => (
  <BookList />
);

export default withRouter(HomePage);
