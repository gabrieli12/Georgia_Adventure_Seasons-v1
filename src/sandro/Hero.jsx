import React, { useState, useEffect, useRef } from "react";

function Hero() {
  const heroImages = [
    "src/assets/Frame 1984077871 (1).png",
    "src/assets/Frame 1984077871 (2).png",
    "src/assets/Frame 1984077871 (3).png",
    "src/assets/Frame 1984077871 (4).png",
    "src/assets/Frame 1984077871 (5).png",
    "src/assets/image 03.png",
    "src/assets/Frame 1984077871 (1).png",
    "src/assets/Frame 1984077871 (2).png",
    "src/assets/Frame 1984077871 (3).png",
    "src/assets/Frame 1984077871 (4).png",
    "src/assets/Frame 1984077871 (5).png",
    "src/assets/image 03.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(12); //img quantitli
  const [isOpen, setIsOpen] = useState(false); //burger menu <show />

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef(null);

  // hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === heroImages.length - 6 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  //hero slider responsiv
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(2); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(4); // tablet
      } else {
        setVisibleSlides(6); // desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //=============================

  // Drag handlers
  // const handleMouseDown = (e) => {
  //   setIsDragging(true);
  //   setStartX(e.clientX);
  // };

  // const handleMouseMove = (e) => {
  //   if (!isDragging) return;
  //   const move = e.clientX - startX;
  //   setDragOffset(move);
  // };

  // const handleMouseUp = () => {
  //   if (dragOffset > 50) {
  //     // drag right
  //     setCurrentIndex((prev) => Math.max(prev - 1, 0));
  //   } else if (dragOffset < -50) {
  //     // drag left
  //     setCurrentIndex((prev) =>
  //       Math.min(prev + 1, heroImages.length - visibleSlides)
  //     );
  //   }
  //   setDragOffset(0);
  //   setIsDragging(false);
  // };

  // const handleMouseLeave = () => {
  //   if (isDragging) handleMouseUp();
  // };

  // // Touch events
  // const handleTouchStart = (e) => {
  //   setIsDragging(true);
  //   setStartX(e.touches[0].clientX);
  // };

  // const handleTouchMove = (e) => {
  //   if (!isDragging) return;
  //   const move = e.touches[0].clientX - startX;
  //   setDragOffset(move);
  // };

  // const handleTouchEnd = () => {
  //   handleMouseUp();
  // };

  //=============================

  return (
    <div>
      {/* HERO */}

      <header className=" flex justify-around items-center text-[16px] max-lg:w-full max-lg:px-10 max-lg:justify-between">
        {/* Georgia Adventures logo */}
        <div className="flex justify-center items-center">
          <img src="src/assets/logo_1-removebg-preview 3.png" alt="logo" />
          <div className="cursor-pointer p-2 flex justify-start items-start flex-col">
            <h2 className="text-[#106f3cb3] font-bold">Georgia Adventures</h2>
            <p className="text-[#7DD0A4]">Seasons</p>
          </div>
        </div>
        {/* navigation */}
        <nav className="w-[30%] flex justify-between items-center text-[#707070] max-xl:w-[35%] max-lg:hidden">
          <a className="hover:underline " href="#">
            Home
          </a>
          <a className="hover:underline " href="#">
            Tours
          </a>
          <a className="hover:underline " href="#">
            Activities
          </a>
          <a className="hover:underline " href="#">
            Gallery
          </a>
          <a className="hover:underline " href="#">
            About
          </a>
          <a className="hover:underline " href="#">
            Contact
          </a>
        </nav>
        {/* number, language, btn*/}
        <div className="flex justify-center items-center gap-6 max-lg:hidden">
          <a
            href="tel:+995 592 43 66 51"
            className="flex justify-center items-center gap-1 cursor-pointer"
          >
            <img src="src/assets/number 3.png" alt="icon" />
            <p>+995 592 43 66 51</p>
          </a>
          <div
            className="flex justify-center items-center gap-2 rounded-lg outline-3 outline-offset-2 outline-double
                                p-0.5 cursor-pointer"
          >
            <img src="src/assets/lang 3.png" alt="leng icon" />
            <p>EN</p>
          </div>
          <button className="bg-[#FF6900] px-5 py-2 rounded-lg text-sm font-semibold text-white cursor-pointer duration-300 hover:bg-[#ff8a05dd] hover:text-black">
            Book Now
          </button>
        </div>
        {/* burger menu */}
        <div className="relative lg:hidden">
          <div
            className="cursor-pointer z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img className="w-8" src="src/assets/burger.png" alt="menu" />
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-4 px-6 flex flex-col gap-6 text-[#707070] border border-gray-200 z-40">
              <a
                className="hover:text-[#106f3cb3] hover:underline"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                className="hover:text-[#106f3cb3] hover:underline"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Tours
              </a>
              <a
                className="hover:text-[#106f3cb3] hover:underline"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Activities
              </a>
              <a
                className="hover:text-[#106f3cb3] hover:underline"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </a>
              <a
                className="hover:text-[#106f3cb3] hover:underline"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                className="hover:text-[#106f3cb3] hover:underline"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>

              {/* Mobile Number */}
              <a
                href="tel:+995 592 43 66 51"
                className="flex items-center gap-2 hover:text-[#106f3cb3]"
              >
                <img src="src/assets/number 3.png" alt="icon" className="w-6" />
                <p>+995 592 43 66 51</p>
              </a>

              {/* Language */}
              <div className="flex items-center gap-2 cursor-pointer hover:text-[#106f3cb3]">
                <img src="src/assets/lang 3.png" alt="lang" className="w-6" />
                <p>EN</p>
              </div>

              {/* Book Now */}
              <button className="bg-[#FF6900] px-6 py-3 rounded-lg text-white font-semibold hover:bg-[#ff8a05dd] hover:text-black">
                Book Now
              </button>
            </div>
          )}
        </div>
      </header>
      {/* hero bg and text */}
      <section
        className=" h-[90vh] bg-cover bg-center mt relative"
        style={{
          backgroundImage:
            "url('src/assets/photo-1709506530108-4951e792208f 4.png')",
        }}
      >
        <div className=" flex flex-col items-center justify-start h-full text-center text-white px-4 gap-6 ">
          <div className="flex items-center justify-center gap-4 text-[12px] text-white mt-20">
            <p className="bg-[#a79e9ec5] px-3 py-0.5 rounded-lg flex justify-center items-center gap-0.5">
              <img
                className="w-5"
                src="src/assets/sheild.png"
                alt="shild logo"
              />{" "}
              Safety Certified
            </p>
            <p className="bg-[#a79e9ec5] px-3 py-0.5 rounded-lg flex justify-center items-center gap-0.5">
              <img className="w-5" src="src/assets/star.png" alt="star logo" />
              5-Star Rated
            </p>
            <p className="bg-[#a79e9ec5] px-3 py-0.5 rounded-lg flex justify-center items-center gap-0.5">
              <img
                className="w-5"
                src="src/assets/person logo.png"
                alt="person logo"
              />
              10,000+ Adventures
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font- flex justify-center items-center flex-col">
            Embrace the <span className="text-[#ff8a05] ">Adventure</span>
          </h1>
          <p className=" max-w-xl text-sm md:text-base text-gray-200">
            Four Seasons, Endless Adventures in Georgia Mountains
          </p>
          <p className="text-gray-200 flex justify-center items-center gap-2">
            {" "}
            <img
              src="src/assets/location.png"
              alt="location logo"
              className="w-5"
            />
            Mtiuleti Region, Georgia
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-500 px-6 py-1 rounded-lg font-semibold cursor-pointer duration-300 hover:bg-[#ff8a0591]">
              Book Now
            </button>
            <button className="border border-white px-6 py-1 rounded-lg cursor-pointer duration-300 hover:bg-[#00000068]">
              Explore Tours
            </button>
          </div>
          <div className="w-full flex justify-around items-center absolute bottom-0">
            <div className="w-full absolute bottom-0 pb-6">
              <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
                {/* hero slider*/}
                <div
                  className="flex transition-transform duration-800 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      currentIndex * (100 / visibleSlides)
                    }%)`,
                  }}
                >
                  {heroImages.map((src, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 px-2"
                      style={{ width: `${100 / visibleSlides}%` }}
                    >
                      <img
                        src={src}
                        alt={`Hero slide ${index + 1}`}
                        className="w-full h-32 md:h-44 object-cover rounded-t-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                {/* ===================== */}
                {/* <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
                  <div
                    ref={sliderRef}
                    className={`flex transition-transform duration-1000 ease-in-out cursor-grab`}
                    style={{
                      transform: `translateX(calc(-${
                        (100 / visibleSlides) * currentIndex
                      }% + ${dragOffset}px))`,
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {heroImages.map((src, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 px-2"
                        style={{ width: `${100 / visibleSlides}%` }}
                      >
                        <img
                          src={src}
                          alt={`Hero slide ${index + 1}`}
                          className="w-full h-60 md:h-44 object-cover rounded-t-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div> */}
                {/* ======================= */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full overflow-hidden bg-[#191b1c] py-3">
        <div className="marquee text-white font-semibold text-4xl flex gap-12 h-20 justify-center items-center">
          <span>🏔️ Four Seasons Adventures in Georgia</span>
          <span>🚙 ATV & Quad Tours</span>
          <span>🐎 Horse Riding Experiences</span>
          <span>🪂 Paragliding Flights</span>
          <span>🚣 White Water Rafting</span>
          <span>🎿 Ski & Snowboard Tours</span>

          {/* duplicate for smooth loop */}
          <span>🏔️ Four Seasons Adventures in Georgia</span>
          <span>🚙 ATV & Quad Tours</span>
          <span>🐎 Horse Riding Experiences</span>
          <span>🪂 Paragliding Flights</span>
          <span>🚣 White Water Rafting</span>
          <span>🎿 Ski & Snowboard Tours</span>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-[#191b1c] py-3">
        <div className="marquee2 text-white font-semibold text-4xl flex gap-12 h-20 justify-center items-center">
          <span>🏔️ Four Seasons Adventures in Georgia</span>
          <span>🚙 ATV & Quad Tours</span>
          <span>🐎 Horse Riding Experiences</span>
          <span>🪂 Paragliding Flights</span>
          <span>🚣 White Water Rafting</span>
          <span>🎿 Ski & Snowboard Tours</span>

          {/* duplicate for smooth loop */}
          <span>🏔️ Four Seasons Adventures in Georgia</span>
          <span>🚙 ATV & Quad Tours</span>
          <span>🐎 Horse Riding Experiences</span>
          <span>🪂 Paragliding Flights</span>
          <span>🚣 White Water Rafting</span>
          <span>🎿 Ski & Snowboard Tours</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
