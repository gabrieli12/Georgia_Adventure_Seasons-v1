import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChosenActivity } from '../../App'

function Card({ index, img, title, description, evaluation,  rightText, price, rating, reviews, additionalServices}) {
  const {chosenActivity, setChosenActivity} = useContext(ChosenActivity);
  return (
    <>
      <div
        key={index}
        className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
      >
        <img
          src={img}
          alt="activity"
          className="h-48 w-full object-cover"
        />
        <div className="p-5">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-600 mt-2">
            {description}
          </p>
          <div className="pt-3">
            <p className="flex items-center font-semibold">
              <img
                className="w-7 h-7"
                src="src/assets/bold star.png"
                alt="star"
              />
              {evaluation}
            </p>
            <p className="flex gap-1 items-center">
            </p>
          </div>
          <div className="flex items-end justify-end flex-col gap-2">
            <p className="text-[12px] h-14 w-[65%] text-end">
              {rightText}
            </p>
            <div className="w-full flex items-center justify-between">
              <span className="text-green-600 font-bold">
                {price}
              </span>
              <Link to={'/details'} onClick={()  => {
                setChosenActivity({
                  mainImage: img,
                  imagesGallery: [img, img, img],
                  title: title,
                  description: description,
                  rating: rating,
                  reviews: reviews,
                  additionalServices: additionalServices
                })
              }}><button className="bg-green-600 text-white px-4 py-2 evaluation-300 rounded-lg text-sm hover:bg-green-700 cursor-pointer">
                View Details
              </button></Link>
            </div>
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