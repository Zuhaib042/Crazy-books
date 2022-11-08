import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.checkstatus);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex w-full flex-col justify-center items-center">
        <button
          className="mx-auto mt-12 px-2 rounded bg-slate-200 text-zinc-500"
          type="button"
          onClick={() => dispatch(checkStatus(status))}
        >
          Check Status
        </button>
        <p className="text-black">{status}</p>
      </div>
    </div>
  );
};

export default Categories;
