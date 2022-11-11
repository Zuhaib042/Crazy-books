import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = ({ title, author, category, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#fff] grid grid-cols-1 md:grid-cols-5 gap-y-2  pl-6 border mb-4 border-[#e8e8e8] py-3 md:py-6  w-full">
      <div className="col-span-2 ">
        <li>
          <h3 className="text-sm bold text-[#8a8a8a]">{category}</h3>
          <h2 className="text-[1.375rem] roboto bold text-[#121212]">
            {title}
          </h2>
          <h4 className="text-sm roboto light text-[#4386bf]">{author}</h4>
          <div className="flex mt-3 divide-x-2 divide-[#e8e8e8]">
            <button
              type="button"
              className="text-[#4386bf] pr-2 light roboto text-sm"
            >
              Comment
            </button>
            <button
              type="button"
              className="text-[#4386bf] px-2 light roboto text-sm"
              onClick={() => dispatch(removeBook(id))}
            >
              Remove
            </button>
            <button
              type="button"
              className="text-[#4386bf] pl-2 light roboto text-sm"
            >
              Edit
            </button>
          </div>
        </li>
      </div>
      <div className="col-span-3 divide-x-2  flex justify-evenly items-center">
        <div className="flex ">
          <div className="w-[4.25rem] progress-container h-[4.25rem] " />
          <div className="ml-2">
            <p className="text-[2rem] value mb-[-8px] text-[#121212] mont reg">
              56%
            </p>
            <p className="text-sm mont reg  text-[#888888]  ">Completed</p>
          </div>
        </div>
        <div className="pl-12">
          <p className="text-[#888888] roboto light text-[0.813rem]">
            CURRENT CHAPTER
          </p>
          <p className="text-sm roboto text-[1rem] tracking-tight light text-[#121212]">
            Chapter 17
          </p>
          <button
            type="button"
            className="bg-[#0290ff] roboto light mt-6 py-2 px-6 text-[0.813rem] rounded"
          >
            Update Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
