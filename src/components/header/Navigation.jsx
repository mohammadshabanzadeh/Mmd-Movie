import React from "react";
import { FiMenu } from "react-icons/fi";

function Navigation() {
  return (
    <nav className="flex  md:rounded-full p-3 px-5  backdrop-blur-md lg:px-10 items-center text-slate-300">
      <div className="flex items-center ">
        <h1 className="text-2xl mr-4 lg:mr-12 ">
          Mmd<span className="text-red-500">Movies</span>
          <p className="text-xs text-center text-slate-500 font-thin">
            Film Review
          </p>
        </h1>
        <ul className="hidden md:flex  text-sm lg:text-base gap-2 lg:gap-4 uppercase">
          <li>
            <a href="#" />
            Movies
          </li>
          <li>
            <a href="#" />
            Tv Shows
          </li>
          <li>
            <a href="#" />
            People
          </li>
          <li>
            <a href="#" />
            More
          </li>
        </ul>
      </div>

      <div className="hidden md:block ml-auto">
        <ul className="flex gap-4 items-center uppercase ">
          <li className="cursor-pointer">
            <a href="#" />
            Login
          </li>
          <li className="cursor-pointer text-sm lg:text-base bg-red-500 hover:bg-red-600 rounded-full px-4 py-1 items-center text-white">
            <a href="#" />
            Sign Up
          </li>
        </ul>
      </div>

      <div className="md:hidden  ml-auto justify-center items-center">
        <button>
          <FiMenu className="text-4xl "/>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
