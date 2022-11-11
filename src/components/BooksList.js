import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import AddBook from './AddBook';
import BookItem from './BookItem';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.addremove);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

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
    <div className="bg-[#fafafa]  py-9 ">
      <div className="books-container bg-[#fafafa] w-5/6 h-[70vh] overflow-scroll  mx-auto ">
        <ul>{booksElements}</ul>
      </div>
      <div className="w-5/6 mx-auto">
        <AddBook />
      </div>
    </div>
  );
};

export default BooksList;
