import { useState } from 'react'
import viteLogo from '/vite.svg'
import CardFeaturedTours from './CardFeaturedTours'
function FeaturedTours() {

    return (
        <>
        <div  className='w-full flex flex-col items-center px-[30px] py-[50px] gap-[15px] bg-[#f8f9fa]'>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <button className='flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium border-transparent mb-4 bg-orange-100 text-orange-800'>Featured Tours</button>
                <h1 className='text-4xl md:text-5xl mb-6 text-gray-900 text-center'>Most Popular Adventures</h1>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto text-center'>Discover our carefully crafted multi-activity tours that showcase the best of Georgian <br /> adventure tourism. Perfect combinations for the ultimate mountain experience.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] md:w-[80%] lg:w-[85%] mt-[40px]'>
                <CardFeaturedTours src="https://images.unsplash.com/photo-1652114068764-81abab2b83cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB0b3VyaXNtJTIwZ3JvdXAlMjBwZW9wbGV8ZW58MXx8fHwxNzU4NzMwMTg4fDA&ixlib=rb-4.1.0&q=80&w=1080" rating="4.9" reviews="127"  name="Ultimate Mtiuleti Adventure" desc="A full-day combination tour featuring quad biking, horse riding, and traditional Georgian lunch in a mountain village." hours="8" range="4-12" location="Mtiuleti Region" highlights={["Quad biking", "Horse riding", "Traditional lunch", '+1 more']} type='Medium' price='$150 $120'/>

                <CardFeaturedTours src="https://images.unsplash.com/photo-1616511384128-899bbf5ce275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhZ2xpZGluZyUyMG1vdW50YWluJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc1ODczMDE4NHww&ixlib=rb-4.1.0&q=80&w=1080" rating="4.8" reviews="89"  name="Sky & Mountain Explorer" desc="Experience Georgia from air and land with paragliding flights followed by scenic mountain hiking." hours="6" range="2-8" location="Mountain Peaks" highlights={["Paragliding flight", "Mountain hiking", "Scenic views", '+1 more']} type='Medium' price='$145'/>

                <CardFeaturedTours src="https://images.unsplash.com/photo-1586283060052-6ed3ee11a72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lpbmclMjBzbm93Ym9hcmQlMjB3aW50ZXIlMjBtb3VudGFpbnxlbnwxfHx8fDE3NTg3MzAxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080" rating="4.7" reviews="156"  name="Georgian Winter Wonderland" desc="Multi-activity winter package including skiing, snowmobiling, and cozy mountain cottage stay." hours="2" range="2-10" location="Winter Resort Area" highlights={["Skiing lessons", "Snowmobile tours", "Cottage stay", '+1 more']} type='Easy' price='$320 $280' />
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-5 mt-10'>
            <h3 className='text-gray-600'>Can't find what you're looking for? We create custom adventures too!</h3>
            <div className='flex gap-5 justify-between items-center'>
                <button className='bg-[#f56500] text-white font-[600] w-[180px]  py-[10px] duration-200 cursor-pointer rounded hover:bg-orange-600 mt-[30px]'>View All Tours</button>
                <button className='bg-white text-black border-gray-300 border-[1px] font-[600] w-[180px]  py-[10px] duration-200 cursor-pointer rounded-[8px] hover:bg-gray-300 mt-[30px]'>Custom Adventure</button>
            </div>
        </div>
        </>
    )
}

export default FeaturedTours