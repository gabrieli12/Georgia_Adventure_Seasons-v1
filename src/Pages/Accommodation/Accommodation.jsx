import React from 'react'

import NewHotel from './NewHotel'
import LegalConsent from '../important/LegalConsent'

function Accommodation() {
  return (
    <div>
      <LegalConsent />

      <section className='w-full h-screen flex flex-col justify-center items-center bg-gray-900 text-white gap-10'>
        <h1 className='text-6xl'>Accommodation</h1>
        <p className='text-center text-lg'>
          Accommodation is currently available upon request only. <br />
          Please contact us via WhatsApp for personalized hotel recommendations and booking assistance.
        </p>
        <button className="bg-[#74ff743f] bg-transparent border shadow-2xl shadow-green-300 border-green-400 px-5 py-2 rounded-lg text-sm font-semibold text-[#adffb4] cursor-pointer duration-300 hover:bg-[#ff8a05dd] hover:border-[#ff8a05dd] hover:shadow-orange-300 hover:text-white max-xl:px-3 max-xl:py-1 ">
          Book Now
        </button>

      </section>

      {/* დროებით მიუწვდომელია */}
      {/* <NewHotel /> */}


      {/* <HotelListing /> */}
      {/* <Restplaces /> */}
    </div>
  )
}

export default Accommodation