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
import Faq from './HOME/FAQ/Faq'

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
import StringRunner from './HOME/Hero/StringRunner/StringRunner'
import LegalConsent from './Pages/important/LegalConsent'

function FullPage() {

    return (
        <>


            <Header />
            <LegalConsent />
            <main>
                <Hero />
                <AdventureActivities />
                <Cottagescard />
                <Gridimgs />
                <Reviews />
                <GridandCarSevices />
                <Faq />
                <div className="relative bg-[#0B1220] py-7">
                    <img className="absolute w-48 z-10 -rotate-20 top-[50%] -translate-y-[50%] left-20 rounded-2xl max-md:hidden" src="https://flyingmag1.b-cdn.net/wp-content/uploads/sites/2/2025/05/dji-avata-featured.jpg" alt="" />
                    <StringRunner animationName={'marquee'} />
                    <StringRunner animationName={'marquee2'} />
                </div>

                <Map />
            </main>
            <Footer />


        </>
    )
}

export default FullPage

