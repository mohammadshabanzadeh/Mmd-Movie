import React from "react";
import { FaStar } from "react-icons/fa";

function MovieCard({img,rate,title}) {
  return (
    <div className=" aspect-[2/3] relative  rounded-lg hover:scale-102 transition-all cursor-pointer">
        <img src={img} className="object-cover rounded-lg w-full h-full"/>
      <div className=" flex flex-col justify-end   absolute bottom-0 left-0 p-8 w-full h-full bg-linear-to-t from-[#000000e8] to-[#00000000] rounded-lg">
        <h3>{title}</h3>
        <div className="flex gap-2 items-center">
        <FaStar className="text-yellow-300" />
        <span>{rate} / 10 </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
