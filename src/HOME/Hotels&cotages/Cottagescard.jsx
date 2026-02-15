
import React from "react";

function Cottagescard() {


  function card(img, cottage) {
    return (
      <>
        <div className="group relative w-full h-full">
          <img className="border-2 shadow-2xl h-full border-[#0B1220] rounded-lg" src={img} alt="" />
          <div className="absolute w-full transition-transform duration-300  justify-center items-center gap-10 top-0 bg-[#00000082]  py-1 rounded-lg h-full hidden group-hover:flex flex-col text-center text-white font-bold text-lg   " >
            <p className="font-bold text-4xl tracking-widest font-bold font-inspiration">COTTAGE</p>
            <p className="font-bold text-4xl tracking-widest font-bold font-inspiration">HOTEL</p>

          </div>

        </div>
        <div className=" flex flex-col justify-center items-center w-48 p-7 h-32 gap-3 absolute bottom-24 bg-[#0B1220] rounded-lg">
          <h2 className="font-bold text-2xl  text-white p-2 font-merienda">{cottage}</h2>
          <button className="bg-transparent border-[2px] rounded-2xl text-lg border-blue-400 text-blue-300 px-4 py-2">
            learn more
          </button>
        </div>
      </>
    );
  }




  return (
    <div className="bg-[#e1dbbabc] w-full ">

      <div className="flex flex-col md:flex-row md:flex-wrap gap-10 md:gap-20 justify-center items-center p-6 md:p-12 lg:p-24">

        <div className="flex justify-center items-center w-full md:w-[45%] lg:w-[20%] pb-40 relative ">
          {card("Accommodation_images/mount_hotel.jpg", "KAZBEGI")}
        </div>

        <div className="flex justify-center items-center w-full md:w-[45%] top-16 lg:w-[20%] pb-40 relative ">
          {card("Accommodation_images/cotteg.jpg", "ANANURI")}
        </div>

        <div className="flex justify-center items-center w-full md:w-[45%] lg:w-[20%] pb-40 relative ">
          {card("Accommodation_images/big_hotel.jpg", "GUDAURI")}
        </div>

        <div className="flex justify-center items-center w-full md:w-[45%] top-16 lg:w-[20%] pb-40 relative ">
          {card("Accommodation_images/small_hotel.jpg", "PASANAURI")}
        </div>

        {/* Card 1 */}
        {/* <div className="flex justify-center items-center w-full md:w-[45%] lg:w-[20%] pb-40 relative group">

          <img className="border-2 shadow-2xl h-full border-[#0B1220] rounded-lg" src="Accommodation_images/mount_hotel.jpg" alt="" />
          <div className="absolute w-full transition-transform duration-300  justify-center items-center gap-10 top-0 bg-[#00000042] backdrop-blur-md py-1 rounded-lg h-1/2 hidden group-hover:flex flex-col text-center text-white font-bold text-lg   " >
            <p className="font-bold text-lg ">HOTEL</p>
            <p className="font-bold text-lg ">COTTAGE</p>
          </div>
          <div className=" flex flex-col justify-center items-center w-48 p-7 h-32 gap-3 absolute bottom-24 bg-[#0B1220] rounded-lg">
            <h2 className="font-bold text-2xl  text-white p-2 font-merienda">KAZBEGI</h2>
            <button className="bg-transparent border-[2px] rounded-2xl text-lg border-blue-400 text-blue-300 px-4 py-2">
              learn more
            </button>
          </div>
        </div> */}

        {/* Card 2 */}
        {/* <div className="flex justify-center items-center w-full md:w-[45%] lg:w-[20%] relative">
          <img src="Accommodation_images/cotteg.jpg" alt="" />

          <div className="bg-[#0B1220] flex flex-col justify-center items-center w-44 p-7 h-28 gap-5 absolute -bottom-14">
            <h2 className="font-bold text-2xl text-white font-merienda">ANANURI</h2>
            <button className="bg-blue-400 text-white px-4 py-2">
              learn more
            </button>
          </div>
        </div> */}

        {/* Card 3 */}
        {/* <div className="flex justify-center items-center w-full md:w-[45%] lg:w-[20%] pb-40 relative">
          <img src="Accommodation_images/big_hotel.jpg" alt="" />

          <div className="bg-[#0B1220] flex flex-col justify-center items-center w-44 p-7 h-28 gap-5 absolute bottom-24">
            <h2 className=" text-2xl text-white font-merienda">GUDAURI</h2>
            <button className="bg-blue-400 text-white px-4 py-2">
              learn more
            </button>
          </div>
        </div> */}

        {/* Card 4 */}
        {/* <div className="flex justify-center items-center w-full md:w-[45%] lg:w-[20%] relative">
          <img src="Accommodation_images/small_hotel.jpg" alt="" />

          <div className="bg-[#0B1220] flex flex-col justify-center items-center w-44 p-7 h-28 gap-5 absolute -bottom-14">
            <h2 className="font-normal text-2xl text-white font-merienda">PASANAURI</h2>
            <button className="bg-blue-400 text-white px-4 py-2">
              learn more
            </button>
          </div>
        </div> */}

      </div>
    </div>
  );
}

export default Cottagescard;
