import React from 'react'
import { HashLink } from 'react-router-hash-link';


function Carcard({ img, heading, description, tall }) {

  return (
    <div className={`w-75 bg-white pb-5 flex flex-col justify-start items-start gap-3`}>
      <img
        src={img}
        alt={heading}
        loading="lazy"
        decoding="async"
        className='w-full h-50 object-cover object-bottom'
      />
      <div className='w-full h-full flex flex-col justify-start items-start gap-3 px-5 py-3'>
        <p className='text-2xl'>{heading}</p>
        <p>{description}</p>

        {/* HashLink თავად იქცევა ღილაკად */}
        <HashLink
          to="/transport#"
          className='flex items-center justify-center gap-2 w-64 min-h-[48px] border border-[#09ad27] mt-5 bg-green-50 px-4 py-3 hover:bg-amber-100 duration-300 text-center'
        >
          Read more
        </HashLink>
      </div>
    </div>)
}

export default React.memo(Carcard)