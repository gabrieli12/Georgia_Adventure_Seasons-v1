import React from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChosenActivity } from '../../App'
import { HashLink } from 'react-router-hash-link';


import AdventureCards from './AdventureCards';

function Card({ index, img, detaleImg, title, location, description, evaluation, rightText, price, rating, reviews, additionalServices, fullDescription, features, recommendations, priceDetails }) {
  const { chosenActivity, setChosenActivity } = useContext(ChosenActivity);


  return (
    <>
      <div
        key={index}
        className="bg-white rounded-xl shadow hover:shadow-lg hover:shadow-[#ff6a0034] transition overflow-hidden "
      >
        <img
          src={img}
          alt="activity"
          className="h-48 w-full object-cover"
        />
        <div className="p-5">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className='text-md opacity-80 text-red-900'>{location}</p>
          <p className="text-sm text-gray-600 mt-2">
            {description}
          </p>

          <div className="pt-3">
            <p className="items-center font-semibold flex gap-1 ">
              <i className="fa-solid fa-star text-[#fdc700] relative"></i>

              {evaluation}
              {/* ({Math.floor(reviews.length * 2 / 1.5)} review) */}
            </p>
          </div>

          <ul className="text-[12px] h-14 flex flex-wrap items-start gap-2 my-2">
            {rightText.map((item) => {
              return <li key={item} className='bg-red-50 p-0.5 rounded-md pl-3'>{item}</li>
            })}

          </ul>

          <hr className='my-5 ' />

          <div className="w-full flex items-center justify-between ">
            <p className="text-red-900 opacity-80 font-bold flex flex-col">
              {price}
              <span className='opacity-60 text-black text-sm font-normal'>Price may vary</span>
            </p>
            <HashLink
              to={`/details/${title.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => {
                // const activityData = {
                //   mainImage: img,
                //   imagesGallery: detaleImg.slice(0, 6),
                //   title: title,
                //   description: description,
                //   rating: rating,
                //   reviews: reviews,
                //   additionalServices: additionalServices,

                //   fullDescription: fullDescription,
                //   features: features,
                //   recommendations: recommendations,
                //   priceDetails: priceDetails,
                // };
                

                setChosenActivity(AdventureCards.find(activity => activity.title === title));

                console.log(AdventureCards.find(activity => activity.title === title))
                // ვინახავთ ობიექტს ტექსტურ ფორმატში
                // localStorage.setItem('chosenActivity', JSON.stringify(AdventureCards.find(activity => activity.title === title)));
              }}
            >
              <button className="bg-[#FF6900] text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 cursor-pointer">
                View Details
              </button>
            </HashLink>
          </div>
        </div>
      </div>
    </>
  )
}
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
export default Card