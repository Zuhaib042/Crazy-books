import React from 'react';
import AddBook from './AddBook';
import BookItem from './BookItem';

const BooksList = () => {
  const [books, setBooks] = useState([]);

  const addABook = (title,author,category)=>{
    const book = {
       id: ,
       title: title,
       author: author,
       category: category
    }
  }
  return (
    <div className="books-container w-5/6 h-[70vh] overflow-scroll mt-8 mx-auto border border-red-200">
      <BookItem />
      <AddBook addABook={addABook} />
    </div>
  );
};

export default BooksList;
