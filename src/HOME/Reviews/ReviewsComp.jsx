import { use, useState } from 'react'

function ReviewsComp({text, tag, loc, time, img, name, rating}) {
    // let starsCount = []
    // for (let i = 0; i < rate; i++){
    //     starsCount.push(0)
    // }
    return (
        <div className="max-w-87.5  bg-white w-[100%] min-w-73 shrink-0 p-5 rounded-2xl border-gray-200 relative flex flex-col justify-between">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote w-8 h-8 text-green-200 " aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
          <div className="">
            {Array.from({ length: rating }).map((_, i) => <i  key={i} className="fa-solid fa-star text-[#fdc700]"></i>)}

          </div>
          <h2 className='font-light mt-2.5 max-sm:text-[14px]'>{text}</h2>
          <p className='border rounded-[100px] px-2.5 w-max border-gray-200 font-medium mt-2.5 text-[12px] max-sm:text-[10px]'>{tag}</p>
          <div className='flex items-center gap-5 mt-5'>
            <img src={img} className='w-12.5 h-12.5 rounded-[50%]' alt="name" loading="lazy" />
            <div className=''>
              <div className='flex items-center gap-2.5'>
                <h2>{name}</h2>
                <p className="bg-[#dbfce7] text-[#4e6f30] font-medium px-3 py-px max-sm:text-[12px]">
                  ✓ Verified
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                {loc} . {time}
              </div>
            </div>
          </div>
        </div>
    )
}

export default ReviewsComp