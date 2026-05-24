import React, { useState, useEffect, useRef } from "react";

  const images = [
  {
    src: "activities_images/skiSnowboard_lessons/ski-lessons-gudauri-sm.webp",
    alt: "Professional ski lessons in Gudauri with certified instructors",
  },
  {
    src: "activities_images/paragliding/Paragliding-Gudauri-summer-sm.webp",
    alt: "Tandem paragliding flight over Gudauri mountains in summer",
  },
  {
    src: "activities_images/snowMobile/Snowmobile-adventure-gudauri-sm.webp",
    alt: "Thrilling snowmobile adventure tour in the highlands of Gudauri",
  },
  {
    src: "activities_images/atv/ATV-mountain-adventure-georgia-sm.webp",
    alt: "Off-road ATV mountain adventure tour in the Georgian Caucasus",
  },
  {
    src: "activities_images/skiSnowboard_rental/ski&snowboard-rental-gudauri-sm.webp",
    alt: "Premium ski and snowboard equipment rental service in Gudauri",
  },
  {
    src: "activities_images/rafting/Rafting-Pasanauri-sm.webp",
    alt: "Whitewater rafting adventure on the Aragvi river in Pasanauri",
  },
  {
    src: "activities_images/jetski/Jetski-adventure-ananuri-sm.webp",
    alt: "Jet ski adventure on the turquoise waters of Ananuri (Zhinvali reservoir)",
  },
  {
    src: "activities_images/horseriding-adventure-gudamakari-sm.webp",
    alt: "Scenic horse riding tour through the Gudamakari valley",
  },
  {
    src: "activities_images/motorBoat/MotorBoat-adventure-ananuri-sm.webp",
    alt: "Sightseeing motor boat tour on Zhinvali reservoir near Ananuri",
  },
];

  // infinite loop
  const heroImages = [...images, ...images];   //ეს და ზემოთ ობიექტი გავიტანე ფუნქციის გარეთ რადგან ბევრ რენდერებს აკეთებდა


function Slider() {

  // const images = [
  //   "activities_images/skiSnowboard_lessons/ski-lessons-gudauri-sm.webp",
  //   "activities_images/paragliding/Paragliding-Gudauri-summer-sm.webp",
  //   "activities_images/snowMobile/Snowmobile-adventure-gudauri-sm.webp",
  //   "activities_images/atv/ATV-mountain-adventure-georgia-sm.webp",
  //   "activities_images/skiSnowboard_rental/ski&snowboard-rental-gudauri-sm.webp",
  //   "activities_images/rafting/Rafting-Pasanauri-sm.webp",
  //   "activities_images/jetski/Jetski-adventure-ananuri-sm.webp",
  //   "activities_images/horseriding-adventure-gudamakari-sm.webp",
  //   "activities_images/motorBoat/MotorBoat-adventure-ananuri-sm.webp",
  // ];



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
  //useref ად გადავაკეთე ეხლა რჩება render-ებს შორის
  let startX = useRef(0); 

  const handleTouchStart = (e) => {
    //current ჩავუმატე
    startX.current = e.touches[0].clientX 
  };

  const handleTouchEnd = (e) => {
    //current ჩავუმატე
    const diff = startX.current - e.changedTouches[0].clientX; 

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
        {heroImages.map((item, index) => (
          <div
            key={index}
            className="shrink-0 px-2"
            style={{ width: `${130 / visibleSlides}%` }}
          >
            <img
              width={300}
              height={180}
              src={item.src}
              // შევცვალე
              loading={index < visibleSlides ? "eager" : "lazy"} 
              // დავამატე
              decoding="async"  
              alt={`${item.alt}`}
              className="w-full h-28 md:h-44 object-cover rounded-t-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default React.memo(Slider);