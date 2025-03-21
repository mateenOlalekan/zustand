import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const HeroSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "New Summer Collection",
      description: "Discover the latest trends for the season with our exclusive summer collection.",
      buttonText: "Shop Now",
      imageUrl: "/api/placeholder/1200/500"
    },
    {
      id: 2,
      title: "Special Discount",
      description: "Up to 50% off on selected items. Limited time offer.",
      buttonText: "View Deals",
      imageUrl: "/api/placeholder/1200/500"
    },
    {
      id: 3,
      title: "Premium Quality",
      description: "Handcrafted items made with the finest materials for unmatched quality.",
      buttonText: "Explore",
      imageUrl: "/api/placeholder/1200/500"
    }
  ];

  return (
    <div className="relative w-full ">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect={'fade'}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-yellow-300 !w-3 !h-3 !opacity-50',
          bulletActiveClass: 'swiper-pagination-bullet-active !opacity-100 !bg-yellow-300',
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              
              {/* Slide content */}
              <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-white mb-8 max-w-lg mx-auto drop-shadow-md">
                  {slide.description}
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 hover:-translate-y-1 hover:shadow-lg uppercase tracking-wide">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons at center bottom */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-6 z-20">
        <button 
          ref={navigationPrevRef}
          className="w-12 h-12 rounded-full bg-black bg-opacity-50 text-yellow-300 border-2 border-yellow-300 flex items-center justify-center transition duration-300 hover:bg-opacity-70"
        >
          ❮
        </button>
        <button 
          ref={navigationNextRef}
          className="w-12 h-12 rounded-full bg-black bg-opacity-50 text-yellow-300 border-2 border-yellow-300 flex items-center justify-center transition duration-300 hover:bg-opacity-70"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;