import React from 'react'
import Carcard from './Carcard'



function Carservice() {
    return (
        <>
        
            <section id='transportation' className='w-full bg-[#08523e] py-24 px-16 flex justify-center items-center flex-wrap    '>
                <div className='flex gap-10 flex-wrap justify-center items-start scroll-mt-32'>
                    <div className='flex flex-col gap-8'>
                        <div className='w-20 h-1 bg-[#34ccff] rounded-xs'></div>

                        <p className='text-6xl/18 text-white w-65'>SPECIAL SERVICES</p>

                        <p className='w-90 text-white opacity-50'>Our experienced and professional drivers are dedicated to providing you with maximum comfort and safety throughout your journey. We offer modern, well-maintained, and comfortable vehicles to ensure every trip is smooth, reliable, and enjoyable</p>
                    </div>


                    <Carcard
                        img={"car_images/sedan-for-georgia-transfers.webp"}
                        heading="SEDAN"
                        description="Experience a smooth and comfortable ride with our stylish sedans. Perfect for city driving and daily commutes, offering both economy and elegance." />

                    <Carcard
                        img={"car_images/minivan-for-georgia-transfers.webp"}
                        heading="MINIVAN"
                        description="ravel together in our spacious and practical minivans. Ideal for family trips, group travel, or carrying extra luggage without compromising comfort. Equipped with modern features, these vehicles ensure a safe and convenient."
                        tall={true} />


                    <Carcard
                        img={"car_images/minibus-for-georgia-transfers.webp"}
                        heading="MINIBUS"
                        description="Minibus (15–17 passengers) Ideal for groups" />
                    {/* <Carcard 
                    img={"car_images/image.png"} 
                    heading="4X4" 
                    description="Conquer any terrain with our powerful 4x4 vehicles. Perfect for off-road adventures, outdoor activities, and exploring nature with confidence."/> */}
                </div>
            </section>
        </>
    )
}

export default React.memo(Carservice)