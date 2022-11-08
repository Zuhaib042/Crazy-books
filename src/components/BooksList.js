import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import BookItem from './BookItem';

const BooksList = () => {
  const books = useSelector((state) => state.addremove);

  const booksElements = books.map((book) => (
    <BookItem
      title={book.title}
      category={book.category}
      author={book.author}
      key={book.id}
      id={book.id}
    />
  ));
  return (
    <>
      <div className="books-container w-5/6 h-[70vh] overflow-scroll mt-8 mx-auto border border-red-200">
        <ul>{booksElements}</ul>
      </div>
      <div className="w-5/6 mx-auto">
        <AddBook />
      </div>
    </>
  );
};

export default BooksList;
