import React from 'react'

import ContactMail from './ContactMail'

import ContactCards from './ContactPhone'

import Map from"../MAP/Map"


function ContactPage() {
    return(
        
        <div className='flex justify-cent flex-col bg-[#052811] '>
            <div className='bg-black h-28'></div>
            <div className='flex justify-center items-center flex-col pt-12'>
                <h1 className='text-white text-2xl text-center'>Contact <span className='text-blue-700'>Us</span></h1>
                <p className='text-[#9f9c9c] text-center text-[12px] w-96'>Our team is at your disposal to answer all your questions and organize your tailor-made transfer.</p>
            </div>
            <div className='flex justify-center items-center'>
               <ContactCards />
                <ContactMail /> 
            </div>
            
            <Map />
        </div>
      
    )
}

export default ContactPage
  