import React from 'react'
import { HashLink } from 'react-router-hash-link';


function Carcard({img , heading , description , tall }) {

  return (
    <div  className={`w-75 bg-white ${tall ? 'h-130' : 'h-110'} flex flex-col justify-start items-start gap-3`}>
      <img src={img} alt="Car image" className='w-full h-50 object-cover' />
      <div className='w-full h-full flex flex-col justify-start items-start gap-3 px-5 py-3'>
        <p className='text-2xl'>{heading}</p>
        <p>{description}</p>
        <div className='flex items-center justify-center gap-2 cursor-pointer'>
          <HashLink to="/transport#">
            <p className='text-[#08523e] font-medium'>Read more</p>
          </HashLink>
          <img src="public\arrow_forward_24dp_08523E_FILL0_wght400_GRAD0_opsz24.png" alt="arrow" className='w-5 '/>
        </div>
      </div>
    </div>
  )
}

export default Carcard