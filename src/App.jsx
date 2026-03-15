import { useState, createContext, useMemo, Suspense, lazy } from 'react'

import { Analytics } from "@vercel/analytics/react"


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'


// pages

const FullPage = lazy(() => import('./FullPage'))
const ActivitiesDetail = lazy(() => import('./Pages/ActivitiesDetailPage/ActivitiesDetail'))
const ContactPage = lazy(() => import('./HOME/contact us/ContactPage'))
const Transport = lazy(() => import('./Pages/Transport/Transport'))
const Accommodation = lazy(() => import('./Pages/Accommodation/Accommodation'))
const AboutUs = lazy(() => import('./Pages/AboutUs/AboutUs'))
const PrivacyPolicy = lazy(() => import('./Pages/important/PrivacyPolicy'))
const Terms = lazy(() => import('./Pages/important/Terms'))
const Cancellation = lazy(() => import('./Pages/important/Cancellation'))
const Safety = lazy(() => import('./Pages/important/Safety'))
const LiabilityWaiver = lazy(() => import('./Pages/important/LiabilityWaiver'))


// import LegalConsent from './Pages/important/LegalConsent'

export const ChosenActivity = createContext(null)




function App() {

  const [chosenActivity, setChosenActivity] = useState([])

  const value = useMemo(() => ({
    chosenActivity,
    setChosenActivity
  }), [chosenActivity])


  return (
    <>
      <ChosenActivity.Provider value={value}>
        <BrowserRouter>

          <Suspense fallback={
            <div className="flex flex-col gap-10 justify-center items-center h-screen bg-[#0B1220]">

              <img src="main_logo/Georgia Adventure Logo for images.png" width="150" height="150" alt="" />
              <div className='flex text-white'>
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
                <span className="ml-3 text-xl font-merienda">Loading...</span>
              </div>

            </div>

          }>
            <Routes>

              <Route element={<Layout />}>

                <Route path="/" element={<FullPage />} />
                <Route path="/details" element={<ActivitiesDetail />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/transport" element={<Transport />} />
                <Route path="/accommodation" element={<Accommodation />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cancellation" element={<Cancellation />} />
                <Route path="/safety" element={<Safety />} />
                <Route path="/LiabilityWaiver" element={<LiabilityWaiver />} />

              </Route>

            </Routes>
          </Suspense>

        </BrowserRouter>
      </ChosenActivity.Provider>

      <Analytics />
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

