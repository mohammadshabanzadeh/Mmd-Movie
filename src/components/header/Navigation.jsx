import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <nav className="flex  md:rounded-full p-3 px-5  backdrop-blur-2xl lg:px-10 items-center text-slate-300">
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
          <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <FiMenu className="text-4xl " />
          </button>
        </div>
      </nav>
      <div className={` md:hidden backdrop-blur-2xl transition-all duration-200 w-2/3 mx-auto absolute right-10 z-10 rounded-tr-none rounded-2xl ${isOpenMenu ? "h-58 p-4 scale-100 " : "scale-0 overflow-hidden h-0 " }`}> 
        <ul className="flex flex-col justify-center items-center gap-4 ">
          <li>
            <a href="">MOVIES</a>
          </li>
          <li>
            <a href="">TV SHOES</a>
          </li>
          <li>
            <a href="">PEOPLE</a>
          </li>
          <li>
            <a href="">MORE</a>
          </li>
        </ul>
        <div className="mt-4 pt-3 border-t-1 border-white/50 w-3/4 flex justify-center items-center gap-4 mx-auto ">
          <a href="" className="text-lg">LOGIN</a>
          <a href="" className="bg-red-600 py-1 px-3 rounded-full ">SIGN UP</a>
        </div>
      </div>
    </>
  );
}

export default Navigation;
