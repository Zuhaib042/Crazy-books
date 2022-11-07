import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => (
  <div className="border-b border-zinc-100">
    <div className="flex mx-auto w-5/6 justify-between items-center header ">
      <div className="flex items-center justify-center">
        <h2 className="text-3xl font-bold text-[#0290ff]">Crazy Books</h2>
        <ul className="flex pl-8 gap-x-4">
          <li className="text-sm font-extralight tracking-wides text-[#121212]">
            <Link to="/">BOOKS</Link>
          </li>
          <li className="text-sm font-extralight tracking-widest text-[#121212]">
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
      </div>
      <div className="border h-8 w-8 rounded-full flex justify-center items-center">
        <FaUser className="text-[#0290ff]" />
      </div>
    </div>
  </div>
);

export default Header;
