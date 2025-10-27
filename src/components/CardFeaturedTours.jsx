import { useState } from 'react'

function CardFeaturedTours(props) {
    return (
        <>
            <div className='bg-card flex flex-col rounded-xl border group hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white border-none relative items-center'>
                <div className='overflow-hidden h-84 w-full'>
                    <div className='absolute z-[2] top-[20px] flex items-start justify-between px-[20px] w-full'>
                        <div className='flex items-center gap-[10px]'>
                            <h1 className='bg-[#ff6900] px-[10px] py-[3px] text-xs font-[600] rounded-[10px] text-white'>⭐ Featured</h1>
                            <h1 className='z-[2] px-[10px] py-[3px] text-xs font-[600] rounded-[10px] bg-[#00a63e] text-white'>{props.type}</h1>
                        </div>
                        <div className='bg-[#fdfcf9] p-2 rounded-[10px]'>
                            {props.price.split(' ').length == 1 ?
                                <h1 className='text-[#00a63e] font-[#]'>
                                    {props.price.split(' ')[0]}
                                </h1>
                                : <div className='flex flex-col items-center'>
                                    <h1 className='text-gray-500 text-[12px] line-through'>
                                        {props.price.split(' ')[0]}
                                    </h1>
                                    <h1 className='text-[#00a63e] text-[18px]'>
                                        {props.price.split(' ')[1]}
                                    </h1>
                                </div>
                            }
                        </div>
                    </div>
                    <img src={props.src} react-lazyload alt="name" loading="lazy" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-[15px] group-hover:scale-[110%] z-[-1]' />
                </div>
                <div className='flex flex-col gap-4 px-5 mt-2 bg-white h-full justify-center'>
                    <div>
                        <section className='flex gap-1 items-center'>
                            <i className="fa-solid fa-star text-[#fdc700]"></i>
                            <p className='ml-1 text-sm'>{props.rating}</p>
                            <p className='text-sm text-gray-500'>({props.reviews} reviews)</p>
                        </section>
                        <h2 className='text-xl mb-3 text-gray-900 group-hover:text-green-700 transition-colors'>{props.name}</h2>
                        <p className='text-gray-600 mb-4 text-sm leading-relaxed'>{props.desc}</p>
                        <section className='flex flex-col gap-2'>
                            <p className='flex gap-1 items-center text-gray-400 '>
                                <i className="fa-solid fa-clock"></i>  {props.hours}
                                hours
                            </p>
                            <p className='flex gap-1 items-center text-gray-400 '>
                                <i className="fa-solid fa-user-group"></i>
                                people
                            </p>
                            <p className='flex gap-1 items-center text-gray-400'>
                                <i className="fa-solid fa-location-dot"></i>
                                {props.location}
                            </p>
                        </section>
                    </div>
                    <h3 className='text-sm text-gray-700 mb-2'>Highlights</h3>
                    <section className='flex flex-wrap gap-2'>
                        {
                           props.highlights.map((item, index) => {
                                return <button  className='flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit gap-1 text-xs border-gray-200'>{item}</button>
                            }) 
                        }
                    </section>
                    <section className='flex items-start justify-between gap-[20px] '>
                        <button className='hover:bg-[#1447e6] text-white rounded-[5px] px-[15px] duration-300 cursor-pointer py-[4px] bg-[#155dfc]  max-w-[350px] w-[50%] max-md:w-full max-md:max-w-full font-[600]'>Book now</button>
                        <button className='border p-1 px-2 border-gray-300 rounded-[7px] duration-400 hover:bg-gray-200 cursor-pointer font-[600]'>Details</button>
                    </section>
                </div>
            </div>
        </>
    )
}

export default CardFeaturedTours