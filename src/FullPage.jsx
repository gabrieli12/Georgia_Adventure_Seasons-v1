import { useState, cre } from 'react'

// header
import Header from './components/Header/Header'

// hero section 
import Hero from './HOME/Hero/Hero'

// adventure activities
import AdventureActivities from './HOME/AdventureActivities/AdventureActivities'

// Reviews
import Reviews from './HOME/Hero/Reviews/Reviews'
// import Reviews from './aleksandre/Reviews/Reviews'

// Faqs, Question / answers
import Faq from './HOME/FAQ/FAQ'

// Grid and car services
import GridandCarSevices from './HOME/GridCarservices/GridandCarSevices'

// Footer
import Footer from './components/Footer/Footer'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import ActivitiesDetail from './HOME/ActivitiesDetailPage/ActivitiesDetail'

function FullPage() {

    return (
        <>
        <Header />
        <main>
            <Hero />
            <AdventureActivities />
            <GridandCarSevices />
            <Reviews />
            <Faq />
        </main>
        <Footer />
        </>
    )
}

export default FullPage

