import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import Home from "./Home";

function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <nav className="flex  md:rounded-b-4xl p-3 px-5 bg-black/70 lg:px-10 items-center text-slate-300">
        <div className="flex items-baseline ">
          <Link to="/">
            <h1 className="text-2xl mr-4 lg:mr-12 ">
              Mmd<span className="text-red-500">Movies</span>
              <p className="text-xs text-center text-slate-500 font-thin">
                Film Review
              </p>
            </h1>
          </Link>
          <ul className="hidden md:flex  text-sm lg:text-base gap-2 lg:gap-4 uppercase">
            <li className="cursor-pointer hover:text-white transition-all">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="cursor-pointer hover:text-white transition-all">
              <Link to="/tvShows">Tv Shows</Link>
            </li>
            <li className="cursor-pointer hover:text-white transition-all">
              <Link to="/people">People</Link>
              
            </li>
            <li className="cursor-pointer hover:text-white transition-all">
              <a href="#" />
              More
            </li>
          </ul>
        </div>

        <div className="hidden md:block ml-auto">
          <ul className="flex gap-4 items-baseline uppercase ">
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
          <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <FiMenu className="text-4xl " />
          </button>
        </div>
      </nav>
      <div
        className={` md:hidden backdrop-blur-2xl transition-all duration-200 w-full mx-auto absolute right-0 z-10 rounded-t-none rounded-4xl ${
          isOpenMenu ? "h-58 p-4  " : " overflow-hidden h-0 "
        }`}
      >
        <ul className="flex flex-col justify-center items-center gap-4 ">
          <li>
            <Link to="/movies">MOVIES</Link>
          </li>
          <li>
            <Link to="/tvShows">TV SHOES</Link>
          </li>
          <li>
            <Link to="/people">PEOPLE</Link>
          </li>
          <li>
            <Link to="/">MORE</Link>
          </li>
        </ul>
        <div className="mt-4 pt-3 border-t-1 border-white/50 w-3/4 flex justify-center items-center gap-4 mx-auto ">
          <a href="" className="text-lg">
            LOGIN
          </a>
          <a href="" className="bg-red-600 py-1 px-3 rounded-full ">
            SIGN UP
          </a>
        </div>
      </div>
    </>
  );
}

export default Navigation;
