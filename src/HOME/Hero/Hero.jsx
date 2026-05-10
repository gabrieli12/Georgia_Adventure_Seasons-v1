import { lazy, memo, Suspense } from "react";
import { HashLink } from "react-router-hash-link";

// slider
const Slider = lazy(() => import("./Slider/Slider"));

// StringRunner
import StringRunner from "./StringRunner/StringRunner";

function Hero() {

  return (
    <>
      {/* HERO */}


      {/* hero bg and text */}
      <section
        className=" h-[90vh] flex justify-center items-center relative bg-black "
      >
        {/* <img className="absolute inset-0 w-full h-full object-cover " loading="eager" src="main-page-hero-bg-md.webp"
          srcSet="
          main-page-hero-bg-sm.webp 600w,
          main-page-hero-bg-md.webp 1000w,
        "
          sizes="(max-width: 640px) 600px, 1000px"
        /> */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          src="main-page-hero-bg-md.webp"
          srcSet="
                main-page-hero-bg-sm.webp 600w,
                main-page-hero-bg-md.webp 1200w
          "
          sizes="(max-width: 640px) 40vw, 1200px"
          alt="Hero Background"
          width="1000"
          height="600"
        />


        <div className=" flex flex-col items-center justify-start text-center text-white px-4 gap-6 relative sm:-mt-18 ">

          {/* ზედა სამი მნიშვნელოვანი სიტყვა */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[12px] text-white  font-semibold  max-sm:hidden">

            <p className="bg-[#a79e9ec5] px-3 py-0.5 rounded-lg flex justify-center items-center gap-1  bg-white/15 backdrop-blur-md ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>              Safety Certified
            </p>

            <p className="bg-white/15 backdrop-blur-md px-3 py-0.5 rounded-lg flex justify-center items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" /></svg>              5-Star Rated
            </p>
            <p className="bg-white/15 backdrop-blur-md px-3 py-0.5 rounded-lg flex justify-center items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>              10,000+ Adventures
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>            <span className="flex gap-2"><span className="text-[#ffc481] ">Mtiuleti</span>  Region, Georgia</span>
          </p>

          <div className="flex justify-center flex-wrap gap-7 mt-2 relative ">
            <span className="text-green-200  text-xl font-bold  text-shadow-[0_5px_15px_green] ">All-in-One / Full Service</span>

            <a href="https://wa.me/995595706585?text=Hello,%20I%20would%20like%20to%20book%20an%20activity." target="_blank" rel="noopener noreferrer" className="bg-[#ff8a05dd] px-6 py-1 rounded-lg shadow-2xl shadow-yellow-300 font-semibold cursor-pointer duration-300 hover:bg-[#ff8a0591] ">
              Book Now
            </a>

            <HashLink to="/#activities" className="bg-[#0bff0b00] border border-green-400 text-green-200 px-6 py-1 shadow-2xl shadow-green-300 rounded-lg cursor-pointer duration-300 hover:bg-[#0bc15139]">
              Explore Tours
            </HashLink>
          </div>
        </div>

        {/*   Slider   */}
        <Suspense fallback={<div className="text-center py-5">Loading Slider...</div>}>
          <Slider />
        </Suspense>

      </section>

      {/* two String Runner */}
      <div className="relative bg-[#0B1220] py-7">
        <img width={250} height={200} className="absolute w-48 z-10 -rotate-20 top-[50%] -translate-y-[50%] left-20 rounded-2xl max-sm:hidden max-md:hidden" src="https://flyingmag1.b-cdn.net/wp-content/uploads/sites/2/2025/05/dji-avata-featured.jpg" alt="A drone that films all activities" />
        <StringRunner animationName={'marquee'} />
        <StringRunner animationName={'marquee2'} />
      </div>


    </>
  );
}

export default memo(Hero);