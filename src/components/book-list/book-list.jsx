import React, { Component } from 'react';
import { connect } from 'react-redux';

import './book-list.css';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart} from '../../actions';
import { compose } from '../../utils';

const BookList = ({ books, onAddedToCart }) => (
  <ul className="list-unstyled">
    {
      books.map(book => (
        <li key={book.id}>
          <BookListItem
            book={book}
            onAddedToCart={() => onAddedToCart(book.id)}
          />
        </li>
      ))
    }
  </ul>
);

class BookListContainer extends Component {
  async componentDidMount() {
    const { fetchBooks } = this.props;

    fetchBooks();
  }

  render() {
    const {
      books, loading, error, onAddedToCart,
    } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
  fetchBooks: fetchBooks(bookstoreService, dispatch),
  onAddedToCart: id => dispatch(bookAddedToCart(id)),
});

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
