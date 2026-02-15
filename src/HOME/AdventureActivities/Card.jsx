import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChosenActivity } from '../../App'

function Card({ index, img, title, location, description, evaluation, rightText, price, rating, reviews, additionalServices }) {
  const { chosenActivity, setChosenActivity } = useContext(ChosenActivity);
  return (
    <>
      <div
        key={index}
        className="bg-white rounded-xl shadow hover:shadow-lg hover:shadow-[#ff6a0034] transition overflow-hidden"
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
              ({reviews.length} review)
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
              <Link to={'/details'} onClick={() => {
                setChosenActivity({
                  mainImage: img,
                  imagesGallery: [img, img, img],
                  title: title,
                  description: description,
                  rating: rating,
                  reviews: reviews,
                  additionalServices: additionalServices
                })
              }}><button className="bg-[#FF6900]  text-white px-4 py-2 evaluation-300 rounded-lg text-sm hover:bg-green-700 cursor-pointer">
                  View Details
                </button></Link>
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