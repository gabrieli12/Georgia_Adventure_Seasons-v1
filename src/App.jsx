import { useState, createContext } from 'react'

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
import FullPage from './FullPage'
export const ChosenActivity = createContext()
function App() {
  const [chosenActivity, setChosenActivity] = useState([])
  return (
    <>
      <ChosenActivity.Provider value={{chosenActivity, setChosenActivity}}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} index element={<FullPage/>}/>
            <Route path={'/details'} index element={<>
            <Header/>
            <ActivitiesDetail/>

            </>}/>
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