import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import MovieCard from "../movies/MovieCard";

function MoviesListSlider({ movies }) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 2,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      }}
    >
      {movies.map((img) => (
        <SwiperSlide className="p-3 px-15 py-5 md:px-0 md:py0">
          <MovieCard img={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MoviesListSlider;
