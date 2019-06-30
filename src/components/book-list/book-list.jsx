import React, { Component } from 'react';
import { connect } from 'react-redux';

import './book-list.css';

import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

class BookList extends Component {
  async componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    const data = await bookstoreService.getBooks();

    booksLoaded(data);
  }

  render() {
    const { books } = this.props;
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

const mapStateToProps = ({ books }) => ({ books });

const mapDispatchToProps = ({
  booksLoaded,
});

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookList);
