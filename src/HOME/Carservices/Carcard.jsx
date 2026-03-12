import React from 'react'
import { HashLink } from 'react-router-hash-link';


function Carcard({ img, heading, description, tall }) {

  return (
    <div className={`w-75 bg-white pb-5  flex flex-col justify-start items-start gap-3`}>
      <img src={img} alt={heading}
        loading="lazy"
        decoding="async" className='w-full h-50 object-cover' />
      <div className='w-full h-full flex flex-col justify-start items-start gap-3 px-5 py-3'>
        <p className='text-2xl'>{heading}</p>
        <p>{description}</p>
        <HashLink to="/transport#">
          <button className='flex items-center justify-center gap-2 w-64 border border-[#09ad27] mt-5 bg-green-50 p-2 hover:bg-amber-100 duration-300'>
            Read more
            {/* <img src="public\arrow_forward_24dp_08523E_FILL0_wght400_GRAD0_opsz24.png" alt="arrow" className='w-5 '/> */}
          </button>
        </HashLink>
      </div>
    </div>
  )
}

export default React.memo(Carcard)