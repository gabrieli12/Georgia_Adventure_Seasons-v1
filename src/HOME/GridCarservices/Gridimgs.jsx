import React from 'react'

function Gridimgs() {
    return (
        <>
            <div className="w-full grid gap-5 p-5  grid-cols-[repeat(auto-fit,minmax(320px,1fr))]  ">
                <img src="cuadro.png" className="w-full h-full object-cover row-span-2" />
                <img src="coolview.png" className="w-full h-full object-cover col-span-2" />
                <img src="kater.png" className="w-full h-full object-cover row-span-2" />
                <img src="skiing.png" className="w-full h-full object-cover col-start-1" />
                <img src="parashuti.png" className="w-full h-full object-cover row-span-2 row-start-2 col-start-2" />
                <img src="jomardoba.png" className="w-full h-full object-cover row-start-2 col-start-3" />
                <img src="horse.png" className="w-full h-full object-cover" />
                <img src="lakewalk.png" className="w-full h-full object-cover" />
            </div>
        </>
    )
}

export default Gridimgs