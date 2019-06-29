import React from 'react';

import './app.css';

import ErrorBoundry from '../error-boundry';
import Spinner from '../spinner';

const App = () => (
  <ErrorBoundry>
    <Spinner />
  </ErrorBoundry>
);

export default App;
