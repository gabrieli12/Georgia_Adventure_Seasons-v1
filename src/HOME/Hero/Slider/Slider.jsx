import React, { useState, useEffect, useRef } from "react";

function Slider() {

  const images = [
    "activities_images/skiSnowboard_lessons/ski-lessons-gudauri-sm.webp",
    "activities_images/paragliding/Paragliding-Gudauri-summer-sm.webp",
    "activities_images/snowMobile/Snowmobile-adventure-gudauri-sm.webp",
    "activities_images/atv/ATV-mountain-adventure-georgia-sm.webp",
    "activities_images/skiSnowboard_rental/ski&snowboard-rental-gudauri-sm.webp",
    "activities_images/rafting/Rafting-Pasanauri-sm.webp",
    "activities_images/jetski/Jetski-adventure-ananuri-sm.webp",
    "activities_images/horseriding-adventure-gudamakari-sm.webp",
    "activities_images/motorBoat/MotorBoat-adventure-ananuri-sm.webp",
  ];

  // infinite loop
  const heroImages = [...images, ...images];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(6);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);

  // responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleSlides(2);
      else if (window.innerWidth < 1024) setVisibleSlides(4);
      else setVisibleSlides(6);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // autoplay
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [visibleSlides]);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  // reset for infinite
  useEffect(() => {
    if (currentIndex >= images.length) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 600);
    }
  }, [currentIndex]);

  // touch swipe
  let startX = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = startX - e.changedTouches[0].clientX;

    if (diff > 50) setCurrentIndex((prev) => prev + 1);
    if (diff < -50) setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div
      ref={sliderRef}
      className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-full max-w-7xl pb-5 mx-auto overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      <div
        className="flex transition-transform duration-500 ease-out will-change-transform"
        style={{
          transform: `translate3d(-${currentIndex * (150 / visibleSlides)}%,0,0)`
        }}
      >
        {heroImages.map((src, index) => (
          <div
            key={index}
            className="shrink-0 px-2"
            style={{ width: `${130 / visibleSlides}%` }}
          >
            <img
              src={src}
              loading="lazy"
              alt={`Hero slide ${index}`}
              className="w-full h-28 md:h-44 object-cover rounded-t-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default React.memo(Slider);