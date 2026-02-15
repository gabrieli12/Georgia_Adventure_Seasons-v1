import React from 'react'

function Cottagescard({ img, cottage }) {
    return (
        <div className='w-80  h-120 border-2 relative flex flex-col  items-center'>
            <img src={img} alt="cottage image" />
            <div className='w-60 h-30 border-2 absolute bottom-0 flex - flex-col items-center justify-center gap-3'>
                <p className='text-3xl'>{cottage}</p>
                <button className='bg-[#08523e] px-5 py-1 rounded-[5px]  text-white'>Learn more</button>
            </div>
        </div>
    )
}

export default Cottagescard