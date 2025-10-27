import { useState } from "react"

function Menu() {
    const [menu, setMenu] = useState(false)
    return (
        
        <div className="h-[100px] flex items-center justify-evenly fixed bg-transparent w-full bg-white top-0 z-50 ">

            <div className='flex items-center justify-center' >
                <div>
                    <h1 className='text-4xl'>🏔️</h1>
                </div>

                <div className='flex items-start flex-col'>
                    <p className='text-green-700 text-lg font-[500] leading-[5px] mt-[15px]'>Georgia Adventure</p>
                    <h2 className='text-green-700'>Seasons</h2>
                </div>

            </div>

            <div className='flex gap-[50px] text-[18px] text-gray-600 max-lg:hidden '>
                <h3 className=' hover:text-green-700 cursor-pointer '>Home</h3>
                <h3 className=' hover:text-green-700 cursor-pointer '>Tours</h3>
                <h3 className=' hover:text-green-700 cursor-pointer '>Activites</h3>bb
                <h3 className=' hover:text-green-700 cursor-pointer '>Gallery</h3>
                <h3 className=' hover:text-green-700 cursor-pointer '>About</h3>
                <h3 className=' hover:text-green-700 cursor-pointer '>Contact</h3>
            </div>

            <div className='flex gap-[10px] items-center max-lg:hidden '>
                <h3><i class="fa-solid fa-phone"></i> +995 555 123 456</h3>

                <div></div>

                <div className='w-[100px] h-9 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold hover:bg-orange-600'>Book Now</div>
            </div>
            <div className="hidden max-lg:block  rounded-[10px] hover:bg-[#e9ebef] active:bg-[#e9ebef] p-2 transition" onClick={(e)=>{
                setMenu(true)
            }}>
                <img src="/menu.png" loading="lazy" alt="name" react-lazyload/>
            </div>

            <div className={`h-full fixed w-[300px] bg-white  border right-0 top-0 ${menu ? 'translate-x-[0px]' : 'translate-x-[300px]'} transition `}>
                <img src="/close.png" react-lazyload className="absolute right-3 top-3 w-4" loading="lazy" alt="name" onClick={(e)=>{
                    setMenu(false)
                }}/>
                <div className="flex flex-col gap-5 mt-6  border-b py-1 border-gray-300 px-[20px]">
                    <h3 className='cursor-pointer text-lg text-gray-700 hover:text-green-700 transition-colors '>dcdsc</h3>
                    <h3 className='cursor-pointer text-lg text-gray-700 hover:text-green-700 transition-colors '>Tours</h3>
                    <h3 className='cursor-pointer text-lg text-gray-700 hover:text-green-700 transition-colors '>Activites</h3>
                    <h3 className='cursor-pointer text-lg text-gray-700 hover:text-green-700 transition-colors'>Gallery</h3>
                    <h3 className='cursor-pointer text-lg text-gray-700 hover:text-green-700 transition-colors '>About</h3>
                    <h3 className='cursor-pointer text-lg text-gray-700 hover:text-green-700 transition-colors '>Contact</h3>
                </div>
                <section className="flex gap-1 mt-2 items-center px-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-sm text-gray-600 mb-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-4 h-4 mr-2" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> 
                    <p className=" text-sm text-gray-600 mb-4">+995 555 123 456</p>
                </section>
                <section className="flex items-center  gap-1 border p-1 w-13 border-gray-300 rounded  hover:bg-[#e9ebef] active:bg-[#e9ebef] transition px-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe w-4 h-4" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                    <p>EN</p>
                </section><br />
                <button className="w-full rounded-[10px] bg-[#ff6900] text-white h-8 mx-[20px]">Book now</button>
            </div>

        </div>
        
    )
}

export default Menu




