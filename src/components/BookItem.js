import React from 'react';

const BookItem = ({ title, author, category }) => (
  <div className="bg-[#fff] text-[#0290ff] border mb-4 border-[#e8e8e8] text-2xl py-8  w-full">
    <li>
      <h3 className="text-sm text-zinc-400">{category}</h3>
      <h2 className="text-4xl text-black ">{title}</h2>
      <h4 className="text-md text-[#0290ff]">{author}</h4>
      <button
        type="button"
        className="text-[#0290ff] px-4  bg-slate-300 text-[14px]"
      >
        Remove
      </button>
    </li>
  </div>
);

export default BookItem;
