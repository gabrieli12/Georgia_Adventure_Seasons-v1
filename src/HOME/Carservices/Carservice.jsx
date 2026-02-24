import React from 'react'
import Carcard from './Carcard'


const Modal = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-lg w-full overflow-hidden relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-2xl">×</button>

                <img src={data.image} alt={data.title} className="w-full h-48 object-cover" />

                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
                    <ul className="space-y-2 mb-6 text-gray-600">
                        {data.features.map(f => <li key={f}>✅ {f}</li>)}
                    </ul>

                    <div className="flex gap-4">
                        <button className="flex-1 bg-green-600 text-white py-2 rounded font-bold">Book via WhatsApp</button>
                        <button className="flex-1 border border-gray-300 py-2 rounded">Price List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
function Carservice() {
    return (
        <>
        
            <div id='transportation' className='w-full bg-[#08523e] py-25 px-15 flex justify-center items-center flex-wrap    '>
                <div className='flex gap-10 flex-wrap justify-center items-start scroll-mt-32'>
                    <div className='flex flex-col gap-8'>
                        <div className='w-20 h-1 bg-[#34ccff] rounded-xs'></div>

                        <p className='text-6xl/18 text-white w-65'>SPECIAL SERVICES</p>

                        <p className='w-90 text-white opacity-50'>Our experienced and professional drivers are dedicated to providing you with maximum comfort and safety throughout your journey. We offer modern, well-maintained, and comfortable vehicles to ensure every trip is smooth, reliable, and enjoyable</p>
                    </div>


                    <Carcard
                        img={"public/Rectangle 142.png"}
                        heading="SEDAN"
                        description="Experience a smooth and comfortable ride with our stylish sedans. Perfect for city driving and daily commutes, offering both economy and elegance." />

                    <Carcard
                        img={"public/image 110.png"}
                        heading="MINIVAN"
                        description="ravel together in our spacious and practical minivans. Ideal for family trips, group travel, or carrying extra luggage without compromising comfort. Equipped with modern features, these vehicles ensure a safe and convenient."
                        tall={true} />


                    <Carcard
                        img={"public/Rectangle 148.png"}
                        heading="4X4"
                        description="Conquer any terrain with our powerful 4x4 vehicles. Perfect for off-road adventures, outdoor activities, and exploring nature with confidence." />
                    {/* <Carcard 
                    img={"car_images/image.png"} 
                    heading="4X4" 
                    description="Conquer any terrain with our powerful 4x4 vehicles. Perfect for off-road adventures, outdoor activities, and exploring nature with confidence."/> */}
                </div>
            </div>
        </>
    )
}

export default Carservice