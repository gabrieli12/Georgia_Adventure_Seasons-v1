import { useState } from 'react'

// header
import Header from './components/Header/Header'

// hero section 
import Hero from './HOME/Hero/Hero'

// adventure activities
import AdventureActivities from './HOME/AdventureActivities/AdventureActivities'

// Reviews
import Reviews from './HOME/Reviews/Reviews'

// Faqs, Question / answers
import Faq from './HOME/FAQ/FAQ'

// Grid and car services
import GridandCarSevices from './HOME/GridCarservices/GridandCarSevices'

// Footer
import Footer from './components/Footer/Footer'



function App() {

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* Main Section */}
      <main>
        <Hero />
        <AdventureActivities />

        {/* Reviews Section */}
        <Reviews />

        {/* Faqs, Question / answers */}
        <Faq />

        {/* Grid and Car services */}
        <GridandCarSevices/>

        {/* Footer */}
        <Footer />



      </main>
    </>
  )
}

export default App
