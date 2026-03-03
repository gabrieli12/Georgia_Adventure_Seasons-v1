import React from 'react'
import StringRunner from '../../HOME/Hero/StringRunner/StringRunner'
import Carcard from '../../HOME/Carservices/Carcard'


function TransportCard({ img, heading, description, tall }) {
  return (
    <div className={`w-81 relative  flex flex-col justify-start bg-orange-50 pb-5 items-start gap-3 ${tall ? ' -top-15' : ''}`}>
      <img src={img} alt="Car image" className='w-full h-50 object-cover' />
      <div className='w-full h-full flex flex-col justify-start items-start gap-3 px-5 py-3'>
        <p className='text-2xl'>{heading}</p>
        <p>{description}</p>
        <div className='flex items-center justify-center gap-2 cursor-pointer mt-7 '>
          <button className='text-[#08523e] font-medium cursor-pointer'>Book Now</button>
        </div>
      </div>
    </div>
  )
}

function Transport() {
  return (
    <div>
      <LegalConsent />
      <div className="bg-[#000000] py-15 w-full h-24 absolute top-0 left-0"></div>
      <section >
        <video className='w-full ' src="car_images/transport_video.mp4" autoPlay loop muted ></video>
        <div className='w-full bg-[#0b1220e9] p-7 absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-center gap-7'>
          <h1 className="text-white text-8xl w-full text-center font-bebas  tracking-widest font-bold ">PRIVATE TRANSFERS
          </h1>
          <button className="bg-[#ff8a05dd] px-6 py-1.5 rounded-lg shadow-2xl shadow-yellow-300 font-semibold cursor-pointer duration-300 hover:bg-[#ff8a0591] ">
            Book Now
          </button>

        </div>
        <div className="relative bg-[#0B1220] py-7">
          <img className="absolute w-48 z-10 -rotate-20 top-[50%] -translate-y-[50%] left-20 rounded-2xl" src="https://flyingmag1.b-cdn.net/wp-content/uploads/sites/2/2025/05/dji-avata-featured.jpg" alt="" />
          <StringRunner animationName={'marquee'} />
          <StringRunner animationName={'marquee2'} />
        </div>

      </section>

      <section className='w-full h-auto py-20 flex justify-center gap-10'>
        <div className='w-147 p-10 flex flex-col gap-5'>
          <h2 className="text-5xl font-bebas  tracking-wider font-bold ">
            Airport <span className='text-[#ea8512]'>Transfers & Private</span> Transportation <br />
            {/* Comfortable • Reliable • Available 24/7 */}
          </h2>
          <p className='text-lg  ' >We provide comfortable and reliable transportation from the airport to your destination, hotel, or any location you need. Our service is available at any time of the day, ensuring a smooth and stress-free travel experience from arrival to departure.</p>

          <div className='grid grid-cols-2 gap-3  font-medium py-5 rounded-lg'>
            <p className="bg-[#ffa1354f] p-0.5 px-2 rounded-md py-1.5">🚗 Comfortable Vehicles</p>
            <p className="bg-[#ffa1354f] p-0.5 px-2 rounded-md py-1.5">🕒 24/7 Availability</p>
            <p className="bg-[#ffa1354f] p-0.5 px-2 rounded-md py-1.5">👨‍✈️ Professional Drivers</p>
            <p className="bg-[#ffa1354f] p-0.5 px-2 rounded-md py-1.5">🎁 Activity Discounts</p>
          </div>
        </div>

        <img src="car_images/minivan-rent-for-private-trips-in-lithuania.png" alt="" />
      </section>

      <section className='w-full flex justify-center gap-10 my-10 flex-wrap p-5'>

        <div className='w-full flex flex-wrap justify-center gap-10 ml-10'>
          <div className='relative -top-30'>

            <TransportCard img={'Rectangle 142.png'} heading={'SEDAN'} description={'Sedan (4 passengers)Perfect for couples or solo travelers.'} />
          </div>


          <TransportCard img={'image 110.png'} heading={'MINIVAN'} description={'Minivan (5–7 passengers)Ideal for families & small groups.'} tall={true} />


          <TransportCard img={'Rectangle 148.png'} heading={'MINIBUS'} description={'Minibus (15–17 passengers)Ideal for large groups.'} />

        </div>



        {/* <Carcard
          img={"public/Rectangle 142.png"}
          heading="SEDAN"
          description="Experience a smooth and comfortable ride with our stylish sedans. Perfect for city driving and daily commutes, offering both economy and elegance." /> */}


      </section>

      <section className='w-full p-5 flex flex-col pb-20 bg-[#0B1220] justify-center items-center  '>
        <div className='w-full p-5 flex justify-center gap-15 text-yellow-500 flex-wrap text-lg font-medium '>
          <p className="">✔ Airport pickup & drop-off</p>
          <p className="">✔ Hotel transfers</p>
          <p className="">✔ Point-to-point transportation</p>
          <p className="">✔ Private tours</p>
          <p className="">✔ Return airport transfers</p>
        </div>

        <hr className='w-full border-t border-yellow-500 my-5' />

        <p className='text-white text-lg font-medium'>Use our transportation service and get
          <span className='text-yellow-500 font-bold'> special discounts</span> on our activities!</p>

        <div className='flex flex-col justify-center items-center gap-5 mt-5'>
          <p className='text-white text-lg font-medium'>Ready to Travel?</p>
          <button className="bg-[#ff8a05dd] px-6 py-1.5 rounded-lg shadow-2xl shadow-yellow-300 font-semibold cursor-pointer duration-300 hover:bg-[#ff8a0591]  ">
            Book Now
          </button>
        </div>
      </section>


      <section >
        {/* <video src="videos/2025-11-18-131947470.mp4" controls className="w-full h-170 rounded-xl "></video> */}
        <div className="relative w-full justify-center p-15 bg-[#032003] items-center flex ">

          {/* <video src='videos/2025-11-18-131947470.mp4'
            class="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
            autoplay muted loop 
          ></video> */}

          <img className="absolute inset-0 w-full h-full object-cover  blur-xl scale-100 -top-5 left-0" src="car_images/tbilisi_gudauri_map.png" alt="" />

          {/* <video src='videos/2025-11-18-131947470.mp4'
            class="relative mx-auto h-full object-contain"
            autoplay muted loop controls
          ></video> */}

          {/* <img className='relative  w-150 rotate-90 object-cover' src="car_images/kutaisi_gudauri_map.png" alt="" /> */}
          <img className='relative  object-cover' src="car_images/tbilisi_gudauri_map.png" alt="" />
          {/* <img className='relative  w-150 h-screen rotate-90 object-cover' src="car_images/batumi_gudauri_map.png" alt="" /> */}


        </div>
      </section>


      <section>
        <div className="relative bg-[#0B1220] py-7 ">
          <img className="absolute w-48 z-10 -rotate-20 top-[50%] -translate-y-[50%] left-20 rounded-2xl" src="https://flyingmag1.b-cdn.net/wp-content/uploads/sites/2/2025/05/dji-avata-featured.jpg" alt="" />
          <StringRunner animationName={'marquee'} />
          <StringRunner animationName={'marquee2'} />
        </div>
      </section>



    </div>
  )
}

export default Transport