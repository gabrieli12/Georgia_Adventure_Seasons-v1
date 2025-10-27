function AdventureActiviesDiv({type, season, img, title, p, time, people, tags, price }) {
  return (
    <div className='bg-card flex flex-col gap-6 rounded-xl border group hover:shadow-xl transition-all duration-300 overflow-hidden border-gray-200 group bg-white'>
      <div className='h-48 w-full overflow-hidden relative'>
        <h1 className={`${type === 'Easy' ?  'text-[#016630] bg-[#dbfce7]' : type === 'Medium' ? 'bg-[#fef9c2] text-[#a34b00]' : 'bg-[#f4f7f8] text-[#1e2939]'} absolute top-[15px] left-[20px] z-[2] px-[10px] py-[3px] text-xs font-[600] rounded-[10px]`}>{type}</h1>
        <h1 className={`bg-[#f4f7f8] text-[#1e2939] absolute top-[15px] right-[20px] z-[2] px-[10px] py-[3px] text-xs font-[600] rounded-[10px]`}>{season}</h1>
        <img src={img} alt="image" react-lazyload className='object-cover duration-400 group-hover:scale-[1.05] min-h-48 absolute top-[50%] translate-y-[-50%] 'loading="lazy" />
      </div>
      <div className='px-[20px] pt-[20px] pb-[20px] flex flex-col gap-[5px]'>
        <h1 className='text-xl mb-3 text-gray-900'>{title}</h1>
        <p className='text-gray-600 mb-4 text-sm'>{p}</p>
        <ul>
            <li className='flex items-center gap-[10px] text-sm text-gray-500'><i className="fa-solid fa-clock"></i> {time}</li>
            <li className='flex items-center gap-[6px] text-sm text-gray-500'><i className="fa-solid fa-user-group"></i> {people}</li>
        </ul>
        <div className='flex items-center gap-[5px] justify-start flex-wrap my-[15px]'>
            {
                tags.map((item, index) => {
                    return <button className='border rounded-[10px] border-gray-200 text-[13px] px-[10px] font-[500] py-[1px] w-[max-content]' >{item}</button>
                })
            }
        </div>
        <div className='flex items-center justify-between'>
            <h1 className='text-[#00a63e] text-[20px]'>From {price}</h1>
            <button className='hover:bg-[#1447e6] text-white rounded-[5px] px-[15px] duration-300 cursor-pointer py-[4px] bg-[#155dfc]'>Book Now</button>
        </div>
      </div>
    </div>
  ) 
}

export default AdventureActiviesDiv
