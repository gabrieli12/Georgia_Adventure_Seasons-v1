import React from 'react'

function Card({ index, img, title, description, evaluation,  rightText, price}) {
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
              <button className="bg-green-600 text-white px-4 py-2 evaluation-300 rounded-lg text-sm hover:bg-green-700 cursor-pointer">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card