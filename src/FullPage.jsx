import { useState, cre } from 'react'

// header
import Header from './components/Header/Header'

// hero section 
import Hero from './HOME/Hero/Hero'

// adventure activities
import AdventureActivities from './HOME/AdventureActivities/AdventureActivities'

// Reviews
import Reviews from './HOME/Reviews/Reviews'
// import Reviews from './aleksandre/Reviews/Reviews'

// Faqs, Question / answers
import Faq from './HOME/FAQ/FAQ'

// Grid and car services
import GridandCarSevices from './HOME/Carservices/GridandCarSevices'

//cottage card
import Cottagescard from './HOME/Hotels&cotages/Cottagescard'

//map
import Map from './HOME/MAP/Map'

// Footer
import Footer from './components/Footer/Footer'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

//contact page
import ContactPage from './HOME/contact us/ContactPage'





import Gridimgs from './HOME/SmallGalery/Gridimgs'

function FullPage() {

    return (
        <>
         <Header /> 
        <main>
            <Hero />
            <AdventureActivities />
            <Cottagescard />
            <Gridimgs />
            <Reviews />
            <GridandCarSevices />
            <Faq />
            <Map/>
        </main>
        <Footer /> 
        
        
        </>
    )
}

export default FullPage

