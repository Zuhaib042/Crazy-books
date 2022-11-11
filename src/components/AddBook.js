import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [input, setInput] = useState({
    title: '',
    author: '',
    category: '',
  });
  const dispatch = useDispatch();
  const onChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({
      title: '',
      author: '',
      category: '',
    });
    dispatch(
      addBook({
        id: uuidv4(),
        title: input.title,
        author: input.author,
        category: input.category,
      }),
    );
  };

  return (
    <div className="border-t-[1px] mt-[2.5rem] b-4">
      <h2 className="mont bold text-[1.25rem] mt-7 text-[#888]">Add a Book</h2>
      <div className="">
        <form
          className=" grid items-center mx-auto md:mx-0 grid-cols-11 gap-x-4 gap-y-4 mt-4"
          onSubmit={handleSubmit}
        >
          <input
            className="py-2 px-2 h-12 rounded-md text-gray-500 col-span-5 md:col-span-3 border"
            type="text"
            name="title"
            value={input.title}
            onChange={onChange}
            placeholder="write Title"
            required
          />
          <input
            className="py-2 px-2 h-12 rounded-md text-gray-500 col-span-5 md:col-span-3  border"
            type="text"
            name="author"
            value={input.author}
            onChange={onChange}
            placeholder="write Author"
            required
          />
          <input
            className="py-2 px-2 h-12 rounded-md text-gray-500 col-span-5 md:col-span-3  border"
            type="text"
            name="category"
            value={input.category}
            onChange={onChange}
            placeholder="write Category"
            required
          />
          <button
            type="submit"
            className="py-2 px-4 h-12 rounded-md col-span-3 md:col-span-2 bg-slate-500"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
