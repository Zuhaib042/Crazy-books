import React, { useState } from 'react';

const AddBook = ({ addABook }) => {
  const [input, setInput] = useState({
    title: '',
    author: '',
    category: '',
  });

  const onChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addABook(input.title, input.author, input.category);
    setInput({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <div className="">
      <h2>Add a Book</h2>
      <div className="">
        <form
          className=" grid items-center mx-auto md:mx-0 grid-cols-11 gap-x-4 gap-y-4 border"
          onSubmit={handleSubmit}
        >
          <input
            className="py-2 px-2 h-12 rounded-md text-gray-500 col-span-5 md:col-span-3 border"
            type="text"
            name="title"
            value={input.title}
            onChange={onChange}
            placeholder="write Title"
          />
          <input
            className="py-2 px-2 h-12 rounded-md text-gray-500 col-span-5 md:col-span-3  border"
            type="text"
            name="author"
            value={input.author}
            onChange={onChange}
            placeholder="write Author"
          />
          <input
            className="py-2 px-2 h-12 rounded-md text-gray-500 col-span-5 md:col-span-3  border"
            type="text"
            name="category"
            value={input.category}
            onChange={onChange}
            placeholder="write Category"
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
