import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className=" py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg w-full h-16 flex flex-wrap items-center  justify-start px-6">
        <Link className="text-xl text-black  active:text-blue-600" to="/">
          Home
        </Link>
        <Link className="text-xl text-black pl-2 active:text-blue-600" to="/data">
          FormData
        </Link>
      </nav>
    </header>
  );
};

export default Header;
