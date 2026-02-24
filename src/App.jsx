import { useState, createContext } from 'react'

// header
import Header from './components/Header/Header'

// Footer
import Footer from './components/Footer/Footer'


// contact page 
import ContactPage from './HOME/contact us/ContactPage'


import Transport from './Pages/Transport/Transport'


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import ActivitiesDetail from './Pages/ActivitiesDetailPage/ActivitiesDetail'
import FullPage from './FullPage'

export const ChosenActivity = createContext()

function App() {
  const [chosenActivity, setChosenActivity] = useState([])
  return (
    <>
      <ChosenActivity.Provider value={{ chosenActivity, setChosenActivity }}>
        <BrowserRouter>
          <Routes>
            {/* მთავარი გვერდი */}
            <Route path="/" element={<FullPage />} />

            {/* დეტალების გვერდი */}
            <Route
              path="/details"
              element={
                <>
                  <Header />
                  <ActivitiesDetail />
                  {/* ალბათ აქაც გინდა Footer? თუ არა, ასე დარჩეს */}
                </>
              }
            />

            {/* კონტაქტის გვერდი */}
            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <ContactPage />
                  <Footer />
                </>
              }
            />

            <Route
              path="/transport"
              element={
                <>
                  <Header />
                  <Transport />
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </ChosenActivity.Provider>
    </>
  )
}

export default App

{/* <ActivitiesDetail mainImage={"/hero.png"} imagesGallery={['/thumb-1.png', '/thumb-2.png', '/thumb-3.png']} title={"პარაგლაიდინგი"} description={"ზანგი ზანგიზანგიზანგიზანგიზანგიზანგიზანგი"} rating={5.0} reviews={[
  {
    userName: 'Gabriel molodini',
    rating: 5,
    review: 'პარაგლაიდინგი ჩემთვის ერთ-ერთი ყველაზე ძლიერი და დაუვიწყარი გამოცდილება იყო. თავიდან ცოტა ვნერვიულობდი, მაგრამ როგორც კი მიწას მოვწყდით, შიში მთლიანად გაქრა'
  }
]} additionalServices={[{
  price: 350,
  title: "დრონით გადაღება"
}]} location={"გუდაური"} time={"10-20 წუთი"}/> */}