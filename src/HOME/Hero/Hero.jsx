
// slider
import Slider from "./Slider/Slider";

// StringRunner
import StringRunner from "./StringRunner/StringRunner";

function Hero() {

  return (
    <>
      {/* HERO */}


      {/* hero bg and text */}
      <section
        className=" h-[90vh] bg-cover  relative"
        style={{
          backgroundImage:
            "url('src/assets/photo-1709506530108-4951e792208f 4.png')",
        }}
      >
        <div className=" flex flex-col items-center justify-start text-center text-white px-4 gap-6 ">
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
        </div>

        {/*   Slider   */}
        <Slider />

      </section>

        {/* two String Runner */}
      <StringRunner animationName={'marquee'} />
      <StringRunner animationName={'marquee2'} />


    </>
  );
}

export default Hero;
