import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function SearchBox() {
  return (
    <section className=" mt-12 text-slate-100 flex justify-center items-center ">
      <input
        type="text"
        className=" relative w-full bg-slate-600 text-xl rounded-full 
      py-2 px-4  border-slate-900 border-4 outline-0 placehoder:text-slate-400 "
        placeholder="Search For Movies"
      />
      <IoSearchOutline className="absolute  text-2xl " />
    </section>
  );
}

export default SearchBox;
