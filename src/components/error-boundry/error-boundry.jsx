import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './error-boundry.css';

import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    return children;
  }
}

ErrorBoundry.propTypes = {
  children: PropTypes.node.isRequired,
};
