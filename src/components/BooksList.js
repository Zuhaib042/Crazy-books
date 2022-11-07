import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './AddBook';
import BookItem from './BookItem';

const BooksList = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Narnia',
      author: 'Zuhaib',
      category: 'Action',
    },
  ]);

  const addABook = (title, author, category) => {
    const book = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    setBooks([...books, book]);
  };
  const booksElements = books.map((book) => (
    <BookItem
      title={book.title}
      category={book.category}
      author={book.author}
      key={book.id}
    />
  ));
  return (
    <>
      <div className="books-container w-5/6 h-[70vh] overflow-scroll mt-8 mx-auto border border-red-200">
        <ul>{booksElements}</ul>
      </div>
      <div className="w-5/6 mx-auto">
        <AddBook addABook={addABook} />
      </div>
    </>
  );
};

export default BooksList;
