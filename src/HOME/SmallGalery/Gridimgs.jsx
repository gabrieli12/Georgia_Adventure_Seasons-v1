import React from 'react'

function Gridimgs() {
    return (
        <>
            {/* <div className="w-full grid gap-5 p-20 mt-96  grid-cols-[repeat(auto-fit,minmax(320px,1fr))] relative">
                <div className='absolute -top-96 flex flex-col justify-center items-center left-[50%] -translate-x-[50%] z-10'>
                    <img src="paraglider/paraglider.png" className='-rotate-20' alt="" />
                    <img src="paraglider/paraglider-pilot.png" className='relative bottom-28 left-24 -rotate-20 w-80' alt="" />
                </div>
                <img src="cuadro.jpg" className="w-full h-full object-cover row-span-2 rounded-[5px]" />
                <img src="hiking.png" className="w-full h-full object-cover col-span-2  rounded-[5px]" />
                <img src="kater.png" className="w-full h-full object-cover row-span-2 rounded-[5px]" />
                <img src="skiing.jpg" className="w-full h-full object-cover col-start-1 rounded-[5px]" />
                <img src="parashuti.jpg" className="w-full h-full object-cover row-span-2 row-start-2 col-start-2 rounded-[5px]" />
                <img src="jomardoba.png" className="w-full  h-full object-cover row-start-2 col-start-3 rounded-[5px]" />
                <img src="horse.jpg" className="w-full h-full object-cover rounded-[5px]" />
                <img src="lakewalk.png" className="w-full h-full object-cover rounded-[5px]" />
            </div> */}
            <div className="relative mt-96 px-4 md:px-20 mb-20">
                {/* პარაპლანის გაფორმება - აბსოლუტური პოზიციონირება უფრო სტაბილურია */}
                <div className='absolute -top-72 flex flex-col justify-center items-center left-1/2 -translate-x-1/2 z-10 pointer-events-none'>
                    <img src="paraglider/paraglider.png" className='-rotate-12 w-48 md:w-64' alt="paraglider" />
                    <img src="paraglider/paraglider-pilot.png" className='relative -top-16 left-12 -rotate-12 w-40 md:w-60 transition-transform duration-500 hover:scale-110' alt="pilot" />
                </div>

                {/* მთავარი გრიდი */}
                <div className="grid gap-4 grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px]">

                    {/* Cuadro - გრძელი ვერტიკალური */}
                    <div className="row-span-2 overflow-hidden rounded-2xl shadow-lg">
                        <img src="cuadro.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="cuadro" />
                    </div>

                    {/* Hiking - განიერი ჰორიზონტალური */}
                    <div className="col-span-2 overflow-hidden rounded-2xl shadow-lg">
                        <img src="hiking.png" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="hiking" />
                    </div>

                    {/* Kater - გრძელი ვერტიკალური */}
                    <div className="row-span-2 overflow-hidden rounded-2xl shadow-lg">
                        <img src="kater.png" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="kater" />
                    </div>

                    {/* Skiing */}
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                        <img src="skiing.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="skiing" />
                    </div>

                    {/* Parashuti - ცენტრალური აქცენტი */}
                    <div className="row-span-2 overflow-hidden rounded-2xl shadow-lg">
                        <img src="parashuti.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="parashuti" />
                    </div>

                    {/* Jomardoba */}
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                        <img src="jomardoba.png" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="jomardoba" />
                    </div>

                    {/* Horse */}
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                        <img src="horse.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="horse" />
                    </div>

                    {/* Lakewalk */}
                    <div className="col-span-2 md:col-span-1 overflow-hidden rounded-2xl shadow-lg">
                        <img src="lakewalk.png" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="lakewalk" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gridimgs