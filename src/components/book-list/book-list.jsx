import React, { Component } from 'react';
import { connect } from 'react-redux';

import './book-list.css';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookstoreService } from '../hoc';
import {
  booksRequested,
  booksLoaded,
  booksError,
} from '../../actions';
import { compose } from '../../utils';

class BookList extends Component {
  async componentDidMount() {
    const {
      bookstoreService,
      booksRequested,
      booksLoaded,
      booksError,
    } = this.props;

    booksRequested();

    try {
      const data = await bookstoreService.getBooks();
      booksLoaded(data);
    } catch (error) {
      booksError(error);
    }
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="list-unstyled">
        {
          books.map(book => (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          ))
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error });

const mapDispatchToProps = ({
  booksRequested,
  booksLoaded,
  booksError,
});

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookList);
