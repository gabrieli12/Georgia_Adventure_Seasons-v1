import React from 'react'
import StringRunner from '../../HOME/Hero/StringRunner/StringRunner'
import LegalConsent from '../important/LegalConsent'

function TransportCard({ img, heading, description, tall }) {
  return (
    // მობილურზე w-full, დესკტოპზე w-81. მოხსნილია -top-15 მობილურზე რომ არ აიჭრას.
    <div className={`w-full md:w-81 relative flex flex-col justify-start bg-orange-50 pb-5 items-start gap-3 ${tall ? 'md:-top-15' : ''}`}>
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
    <div className="overflow-x-hidden">
      <LegalConsent />
      <div className="bg-[#000000] py-15 w-full h-24 absolute top-0 left-0"></div>
      
      <section className="relative">
        <video className='w-full h-[50vh] md:h-auto object-cover' src="car_images/transport_video.mp4" autoPlay loop muted ></video>
        <div className='w-full bg-[#0b1220e9] p-5 md:p-7 absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-center gap-4 md:gap-7'>
          {/* ტექსტის ზომა მობილურზე შემცირებულია (text-4xl), დესკტოპზე იგივეა (md:text-8xl) */}
          <h1 className="text-white text-4xl md:text-8xl w-full text-center font-bebas tracking-widest font-bold">
            PRIVATE TRANSFERS
          </h1>
          <button className="bg-[#ff8a05dd] px-6 py-1.5 rounded-lg shadow-2xl shadow-yellow-300 font-semibold cursor-pointer duration-300 hover:bg-[#ff8a0591]">
            Book Now
          </button>
        </div>

        <div className="relative bg-[#0B1220] py-7 overflow-hidden">
          {/* სურათი მობილურზე იმალება (hidden), ჩნდება მხოლოდ საშუალო ეკრანებიდან (md:block) */}
          <img className="hidden md:block absolute w-48 z-10 -rotate-20 top-[50%] -translate-y-[50%] left-20 rounded-2xl" src="https://flyingmag1.b-cdn.net/wp-content/uploads/sites/2/2025/05/dji-avata-featured.jpg" alt="" />
          <StringRunner animationName={'marquee'} />
          <StringRunner animationName={'marquee2'} />
        </div>
      </section>

      {/* სექცია მობილურზე ხდება ვერტიკალური (flex-col) */}
      <section className='w-full h-auto py-10 md:py-20 flex flex-col md:flex-row justify-center items-center gap-10 px-5'>
        <div className='w-full md:w-147 p-0 md:p-10 flex flex-col gap-5'>
          <h2 className="text-3xl md:text-5xl font-bebas tracking-wider font-bold">
            Airport <span className='text-[#ea8512]'>Transfers & Private</span> Transportation
          </h2>
          <p className='text-base md:text-lg'>
            We provide comfortable and reliable transportation from the airport to your destination...
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 font-medium py-5 rounded-lg'>
            <p className="bg-[#ffa1354f] p-0.5 px-2 rounded-md py-1.5">🚗 Comfortable Vehicles</p>
            <p className="bg-[#ffa1354f] p-0.5 px-2 rounded-md py-1.5">🕒 24/7 Availability</p>
            <p className="bg-[#ffa1354f] p-0.5 px-2 rounded-md py-1.5">👨‍✈️ Professional Drivers</p>
            <p className="bg-[#ffa1354f] p-0.5 px-2 rounded-md py-1.5">🎁 Activity Discounts</p>
          </div>
        </div>
        <img className="w-full md:w-auto max-w-md" src="car_images/minivan-rent-for-private-trips-in-lithuania.png" alt="" />
      </section>

      {/* ბარათების სექცია */}
      <section className='w-full flex flex-col items-center my-10 p-5'>
        <div className='w-full flex flex-wrap justify-center gap-10 md:ml-10'>
          {/* მობილურზე -top-30 უქმდება */}
          <div className='relative md:-top-30 w-full md:w-auto'>
            <TransportCard img={'Rectangle 142.png'} heading={'SEDAN'} description={'Sedan (4 passengers) Perfect for couples.'} />
          </div>
          <TransportCard img={'image 110.png'} heading={'MINIVAN'} description={'Minivan (5–7 passengers) Ideal for families.'} tall={true} />
          <TransportCard img={'Rectangle 148.png'} heading={'MINIBUS'} description={'Minibus (15–17 passengers) Ideal for groups.'} />
        </div>
      </section>

      {/* სერვისების ჩამონათვალი */}
      <section className='w-full p-5 flex flex-col pb-20 bg-[#0B1220] justify-center items-center'>
        <div className='w-full p-5 flex justify-center gap-5 md:gap-15 text-yellow-500 flex-wrap text-sm md:text-lg font-medium '>
          <p>✔ Airport pickup & drop-off</p>
          <p>✔ Hotel transfers</p>
          <p>✔ Point-to-point</p>
          <p>✔ Private tours</p>
          <p>✔ Return transfers</p>
        </div>
        <hr className='w-full border-t border-yellow-500 my-5' />
        <p className='text-white text-center text-base md:text-lg font-medium'>
          Use our transportation service and get <span className='text-yellow-500 font-bold'>special discounts</span>!
        </p>
        <div className='flex flex-col justify-center items-center gap-5 mt-5'>
          <button className="bg-[#ff8a05dd] px-6 py-1.5 rounded-lg shadow-2xl shadow-yellow-300 font-semibold">
            Book Now
          </button>
        </div>
      </section>

      {/* რუკის სექცია */}
      <section>
        <div className="relative w-full justify-center p-5 md:p-15 bg-[#032003] items-center flex overflow-hidden">
          <img className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50" src="car_images/tbilisi_gudauri_map.png" alt="" />
          <img className='relative object-contain max-w-full h-auto' src="car_images/tbilisi_gudauri_map.png" alt="" />
        </div>
      </section>

      <section>
        <div className="relative bg-[#0B1220] py-7 overflow-hidden">
          <img className="hidden md:block absolute w-48 z-10 -rotate-20 top-[50%] -translate-y-[50%] left-20 rounded-2xl" src="https://flyingmag1.b-cdn.net/wp-content/uploads/sites/2/2025/05/dji-avata-featured.jpg" alt="" />
          <StringRunner animationName={'marquee'} />
          <StringRunner animationName={'marquee2'} />
        </div>
      </section>
    </div>
  )
}

export default Transport