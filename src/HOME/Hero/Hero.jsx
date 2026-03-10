
// slider
import { HashLink } from "react-router-hash-link";
import Slider from "./Slider/Slider";

// StringRunner
import StringRunner from "./StringRunner/StringRunner";

function Hero() {

  return (
    <>
      {/* HERO */}


      {/* hero bg and text */}
      <section
        className=" h-[90vh] bg-cover flex justify-center items-center relative "
        style={{
          backgroundImage:
            "url('photo-1709506530108-4951e792208f 4.png')",
        }}
      >
        <div className=" flex flex-col items-center justify-start text-center text-white px-4 gap-6 relative -mt-18 max-sm:-mt-18 ">

          {/* ზედა სამი მნიშვნელოვანი სიტყვა */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[12px] text-white  font-semibold  max-sm:hidden">
            <p className="bg-[#a79e9ec5] px-3 py-0.5 rounded-lg flex justify-center items-center gap-0.5  bg-white/15 backdrop-blur-md ">
              <img
                className="w-5"
                src="icons/sheild.png"
                alt="shild logo"
              />{" "}
              Safety Certified
            </p>
            <p className="bg-white/15 backdrop-blur-md px-3 py-0.5 rounded-lg flex justify-center items-center gap-0.5">
              <img className="w-5" src="icons/star.png" alt="star logo" />
              5-Star Rated
            </p>
            <p className="bg-white/15 backdrop-blur-md px-3 py-0.5 rounded-lg flex justify-center items-center gap-0.5">
              <img
                className="w-5"
                src="icons/person logo.png"
                alt="person logo"
              />
              10,000+ Adventures
            </p>
          </div>



          <h1 className="text-3xl md:text-4xl 2xl:text-5xl font- flex justify-center items-center flex-col max-sm:text-3xl">
            Embrace the <span className=" text-green-300 ">Adventure</span>

          </h1>
          <p className=" max-w-3xl font-medium text-sm md:text-xl text-gray-200 ">
            Four Seasons, Endless Adventures in <span className="text-[#ffc481]">Georgia Mountains</span> <br />
          </p>
          <p className="text-gray-200 flex justify-center items-center gap-1 relative bottom-4 text-lg">
            {" "}
            <img
              src="icons/location.png"
              alt="location logo"
              className="w-5 "
            />
            <span className="flex gap-2"><span className="text-[#ffc481] ">Mtiuleti</span>  Region, Georgia</span>
          </p>

          <div className="flex justify-center flex-wrap gap-7 mt-2 relative ">
            <span className="text-[#ff8a05] text-green-200  text-xl font-bold  text-shadow-[0_5px_15px_green] ">All-in-One / Full Service</span>
            <a href="https://wa.me/995595706585?text=Hello,%20I%20would%20like%20to%20book%20an%20activity." target="__blank">
              <button className="bg-[#ff8a05dd] px-6 py-1 rounded-lg shadow-2xl shadow-yellow-300 font-semibold cursor-pointer duration-300 hover:bg-[#ff8a0591] ">
                Book Now
              </button>
            </a>

            <HashLink to="/#activities">
              <button className="bg-[#0bff0b00] border border-green-400 text-green-200 px-6 py-1 shadow-2xl shadow-green-300 rounded-lg cursor-pointer duration-300 hover:bg-[#0bc15139]">
                Explore Tours
              </button>
            </HashLink>
          </div>
        </div>

        {/*   Slider   */}
        <Slider />

      </section>

      {/* two String Runner */}
      <div className="relative bg-[#0B1220] py-7">
        <img className="absolute w-48 z-10 -rotate-20 top-[50%] -translate-y-[50%] left-20 rounded-2xl max-sm:hidden max-md:hidden" src="https://flyingmag1.b-cdn.net/wp-content/uploads/sites/2/2025/05/dji-avata-featured.jpg" alt="A drone that films all activities" />
        <StringRunner animationName={'marquee'} />
        <StringRunner animationName={'marquee2'} />
      </div>


    </>
  );
}

export default Hero;
