import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image1 from "../../assets/images/1.jpg";
import Image2 from "../../assets/images/2.jpg";
import Image3 from "../../assets/images/3.jpg";
import Image4 from "../../assets/images/4.jpg";
import "swiper/css";
import "swiper/css/autoplay";
import bg1 from "../../assets/images/movies1.jpg";
import MovieCard from "../movies/MovieCard";
import axios from "axios";
// const image = [
//   {
//     img: Image1,
//   },
//   {
//     img: Image2,
//   },
//   {
//     img: Image3,
//   },
//   {
//     img: Image4,
//   },
//   {
//     img: Image3,
//   },
// ];

function HeaderSlider({ setBg }) {
  const [movies, setMovies] = useState([]);

  async function loadMovies() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=01512253cf8d33a446922d611c9fb5ed"
    );
    setMovies(data.results);
  }
  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className=" mt-12 ">
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
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className="p-3">
            <div
              onMouseOver={(e) => setBg(`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`)}
              onMouseOut={(e) => setBg(bg1)}
              className=" rounded-2xl px-15 py-5 md:px-0 md:py-0"
            >
              <MovieCard
                img={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                title={movie.title}
                rate={movie.vote_average}
              />
            </div>
            <img />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeaderSlider;
