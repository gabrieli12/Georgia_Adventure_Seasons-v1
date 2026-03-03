import React from 'react'
import { HashLink } from 'react-router-hash-link';


function Carcard({img , heading , description , tall }) {

  return (
    <div  className={`w-75 bg-white pb-5  flex flex-col justify-start items-start gap-3`}>
      <img src={img} alt="Car image" className='w-full h-50 object-cover' />
      <div className='w-full h-full flex flex-col justify-start items-start gap-3 px-5 py-3'>
        <p className='text-2xl'>{heading}</p>
        <p>{description}</p>
          <HashLink to="/transport#">
            <div className='flex items-center justify-center gap-2 cursor-pointer w-64 border border-[#09ad27] mt-5 bg-green-50 p-2 hover:bg-amber-100 duration-300 '>
                <p className='text-[#08523e] font-medium'>Read more</p>
              {/* <img src="public\arrow_forward_24dp_08523E_FILL0_wght400_GRAD0_opsz24.png" alt="arrow" className='w-5 '/> */}
            </div>
          </HashLink>
      </div>
    </div>
  )
}

export default Carcard