import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function SearchBox() {
  return (
    <section className=" mt-12 text-slate-100 flex justify-center items-center ">
      <input
        type="text"
        className=" relative w-2/3 md:w-4/5  backdrop-blur-xs text-xl rounded-full 
      py-2 px-4  border-white/50 border-1 outline-0 placehoder:text-slate-400 hover:border-white transition-all"
        placeholder="Search For Movies"
      />
      {/* <IoSearchOutline className="absolute  text-2xl " /> */}
    </section>
  );
}

export default SearchBox;
