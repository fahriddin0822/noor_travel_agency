// src/components/Carousel.jsx
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ places, translate }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] mb-8 overflow-hidden">
      <Slider {...settings}>
        {places.map((place) => (
          <div key={place.id} className="relative w-full">
            <img
              className="w-full h-full object-cover"
              src={place.image}
              alt={translate(place.name)}
            />
            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-2xl font-bold">
                {translate(place.name)}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;