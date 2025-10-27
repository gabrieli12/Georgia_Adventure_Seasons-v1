
import './App.css'
import Footer from "./components/Footer.jsx"
import AdventureActivities from './components/AdventureActivities.jsx'
import FeaturedTours from './components/FeaturedTours'
import AdventureMoments from './components/AdventureMoments'
import Menu from './components/menu.jsx'
import CustomerReviews from './components/CustomerReviews'
import Embrance from './components/Embrance.jsx'

function App() {

  return (
    <>
      <Menu />
      <Embrance id="Embrance"/>
      <AdventureActivities  id="AdventureActivities" />
      <FeaturedTours id="FeaturedTours"/>
      <CustomerReviews id="CustomerReviews"/>
      <AdventureMoments id="AdventureMoments"/>
      <Footer id="Footer"/>
      <div className='bg-[#ff6900] fixed z-[2] bottom-[25px] right-[30px] flex px-[20px] py-[10px] items-center gap-[10px] rounded-[50px]'>
        <i className="fa-solid fa-calendar text-white"></i>
        <p className='text-white text-[15px] font-[500]'>Quick Book</p>
      </div>
    </>
  )
}

export default App
