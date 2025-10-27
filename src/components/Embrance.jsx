import React from 'react'

function Embrance() {
  return (
    
   <div className='h-screen bg-[url("https://images.unsplash.com/photo-1709506530108-4951e792208f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZW9yZ2lhbiUyMG1vdW50YWlucyUyMGFkdmVudHVyZSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTg3MzAxODB8MA&ixlib=rb-4.1.0&q=80&w=1080")] bg-no-repeat bg-center bg-cover bg-black/300 flex text-center items-cenbter justify-center flex-col pt-10' >
        <div className='w-[100%] h-screen bg-black/30 flex items-center flex-col justify-center'>
        <br />
        <br />
          

          <h1 className='text-7xl text-white'>Embrace the
            <br />
            <span className='text-orange-400'>Adventure</span></h1>
          <br />

          <p className='text-white text-3xl'>Four Seasons, Endless Adventures in Georgia / Mtiuleti!</p>

          <br />
          <br />

          <p className='text-white text-2xl'><i className="fa-solid fa-location-dot"></i>  Mtiuleti Region, Georgia</p>

          <br />
          <br />

          <div className='flex items-center justify-center gap-[10px]'>
            <button className='w-[150px] h-10 bg-orange-500 rounded-[10px] text-white font-bold text-lg hover:bg-orange-600'>Book Now</button>

            <div className='h-10 w-[150px]  bg-transparent backdrop-blur-2xl text-white flex  items-center justify-center border rounded-md  hover:bg-white hover:text-black hover:font-[200px]'>Explore Tours</div>
          </div>


          <br />
          <br />
          <br />

          <div className='flex justify-center items-center gap-[80px] text-white flex-wrap'>

            <div>
              <p className='text-[30px]'>15+</p>
              <p className='text-gray-300'>Adventure Types</p>
            </div>

            <div>
              <p className='text-[30px]'>50+</p>
              <p className='text-gray-300'> Monthly Tours</p>
            </div>

            <div>
              <p className='text-[30px]'>24/7</p>
              <p className='text-gray-300'>Support</p>
            </div>

            <div>
              <p className='text-[30px]'>99%</p>
              <p className='text-gray-300'>Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Embrance
