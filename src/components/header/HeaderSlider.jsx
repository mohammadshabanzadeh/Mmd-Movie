import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image1 from "../../assets/images/1.jpg";
import Image2 from "../../assets/images/2.jpg";
import Image3 from "../../assets/images/3.jpg";
import Image4 from "../../assets/images/4.jpg";
import "swiper/css";
import "swiper/css/autoplay";
import bg1 from "../../assets/images/movies.jpg"
const image = [
  {
    img: Image1,
  },
  {
    img: Image2,
  },
  {
    img: Image3,
  },
  {
    img: Image4,
  },
  {
    img: Image3,
  },
];

function HeaderSlider({setBg}) {
  
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
        {image.map((image, index) => (
          <SwiperSlide key={index} className="p-3">
            <img
            onMouseOver={(e) => setBg(image.img)}
            onMouseOut={(e) => setBg(bg1)}
            
              src={image.img}
              alt="error"
              className=" rounded-lg cursor-pointer hover:scale-105 transition-all "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeaderSlider;
