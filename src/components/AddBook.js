import React, { useState } from 'react';

const AddBook = () => {
  const [input, setInput] = useState({
    title: '',
    author: '',
    category: '',
  });

  const onChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={input.title}
          onChange={onChange}
        />
        <input
          type="text"
          name="author"
          value={input.author}
          onChange={onChange}
        />
        <input
          type="text"
          name="category"
          value={input.category}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default AddBook;
