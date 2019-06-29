import React from 'react';
import { withRouter } from 'react-router-dom';

import BookList from '../book-list';

const HomePage = () => (
  <BookList books={[
    {
      id: 1,
      title: 'Production-Ready Microservies',
      author: 'Susan J. Fowler',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
    },
  ]}
  />
);

export default withRouter(HomePage);
