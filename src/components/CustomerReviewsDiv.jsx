function CustomerReviewsDiv({text, tag, loc, time, img, name}) {
  return (
    <div className="max-w-[350px]  min-h-[max-content] bg-white w-[50%] min-w-[300px] flex-shrink-0 p-[15px] rounded-2xl border-gray-200 relative    ">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote w-8 h-8 text-green-200 mb-4" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
      <div className="text-[#]">
        <i className="fa-solid fa-star text-[#fdc700]"></i>
        <i className="fa-solid fa-star text-[#fdc700]"></i>
        <i className="fa-solid fa-star text-[#fdc700]"></i>
        <i className="fa-solid fa-star text-[#fdc700]"></i>
        <i className="fa-solid fa-star text-[#fdc700]"></i>
      </div>
      <h1 className='font-[300] mt-[10px]'>{text}</h1>
      <p className='border rounded-[100px] px-[10px] w-[max-content] border-gray-200 font-[500] mt-[10px] text-[12px]'>{tag}</p>
      <div className='flex items-center gap-[20px] mt-[20px] relative bottom-[20px]'>
        <img src={img} react-lazyload className='w-[50px] h-[50px] rounded-[50%]' alt="name" loading="lazy" />
        <div>
          <div className='flex items-center gap-[10px]'>
            <h1>{name}</h1>
            <p className="bg-[#dbfce7] text-[#4e6f30] font-[500] px-[12px] py-[1px]">
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

export default CustomerReviewsDiv
