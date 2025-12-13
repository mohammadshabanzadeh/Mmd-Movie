import React from "react";
import MovieCard from "../movies/MovieCard";
import Image1 from "../../assets/images/1.jpg";
import Image2 from "../../assets/images/2.jpg";
import Image3 from "../../assets/images/3.jpg";
import Image4 from "../../assets/images/4.jpg";
import MoviesListSlider from "./MoviesListSlider";

const movies = [Image1, Image2, Image3, Image4, Image2, Image4,Image1];

function MoviesList() {
  return (
    <>
      <div className="m-container">
        <div className="pt-8">
          <div className="md:flex gap-8 items-center">
            <h2 className="text-2xl text-slate-300">What's Popular</h2>
            <ul className="my-6 flex flex-col gap-4 md:gap-8 text-rose-200 md:flex-row md:border-1 md:border-slate-500 md:py-1 md:px-4 md:rounded-full ">
              <li>Streaming</li>
              <li className="text-red-400">On Tv</li>
              <li>For Rent</li>
              <li>In Theaters</li>
            </ul>
          </div>
          <MoviesListSlider movies={movies} />
        </div>
      </div>
      <div className="mt-8 py-4 bg-slate-900 w-full">
        <div className="m-container">
          <div className="md:flex gap-8 items-center">
            <h2 className="text-2xl text-slate-300">Free to watch</h2>
            <ul className="my-6 flex flex-col gap-4 md:gap-8 text-rose-200 md:flex-row md:border-1 md:border-slate-500 md:py-1 md:px-4 md:rounded-full ">
              <li className="text-red-400">Movie</li>
              <li>TV</li>
            </ul>
          </div>
          <MoviesListSlider movies={movies} />
        </div>
      </div>
    </>
  );
}

export default MoviesList;
