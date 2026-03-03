import React from 'react'

function Rates_Services({chosenActivity}) {
  return (
    <div className="pt-10 border-t border-gray-100">
          <h2 className="text-3xl font-bold text-center mb-10">Rates & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chosenActivity?.detail?.additionalServices?.map((service, i) => (
              <div key={i} className="group rounded-3xl border border-gray-200 shadow-md p-8 text-center space-y-5 hover:shadow-2xl transition-all flex flex-col justify-center items-center hover:-translate-y-2 bg-white">
                <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                <p className="text-4xl font-black text-orange-600 text-left">
                  <span className='text-sm text-gray-400'>From</span> <br />
                  {service.price} <span className="text-sm text-gray-400">GEL</span>
                </p>
                <a className='w-full' href={`https://wa.me/995595706585?text=Hello,%20I%20would%20like%20to%20book%20an%20activity.`} target='__blank'>
                <button className="w-full py-4 rounded-2xl bg-black text-white font-bold hover:bg-orange-600 transition-colors cursor-pointer">
                  Book Now
                </button></a>
                
              </div>
            ))}
          </div>
        </div>
  )
}

export default Rates_Services