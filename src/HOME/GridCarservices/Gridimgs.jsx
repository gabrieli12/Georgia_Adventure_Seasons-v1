import React from 'react'

function Gridimgs() {
    return (
        <>
            <div className="w-full grid gap-5 p-20  grid-cols-[repeat(auto-fit,minmax(320px,1fr))]   ">
                <img src="cuadro.jpg" className="w-full h-full object-cover row-span-2 rounded-[5px]" />
                <img src="hiking.png" className="w-full h-full object-cover col-span-2  rounded-[5px]" />
                <img src="kater.png" className="w-full h-full object-cover row-span-2 rounded-[5px]" />
                <img src="skiing.jpg" className="w-full h-full object-cover col-start-1 rounded-[5px]" />
                <img src="parashuti.jpg" className="w-full h-full object-cover row-span-2 row-start-2 col-start-2 rounded-[5px]" />
                <img src="jomardoba.png" className="w-full  h-full object-cover row-start-2 col-start-3 rounded-[5px]" />
                <img src="horse.jpg" className="w-full h-full object-cover rounded-[5px]" />
                <img src="lakewalk.png" className="w-full h-full object-cover rounded-[5px]" />
            </div>
        </>
    )
}

export default Gridimgs