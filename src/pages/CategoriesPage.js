import React from 'react';
import Header from '../components/Header';

const Categories = () => (
  <div>
    <Header />
    <div className="flex justify-center items-center">
      <button
        className="mx-auto mt-12 px-2 rounded bg-slate-200 text-zinc-500"
        type="button"
      >
        Check Status
      </button>
    </div>
  </div>
);

export default Categories;
