import React from 'react'

function Reviews({ chosenActivity }) {
  return (
    <div className="rounded-3xl border border-gray-200 shadow-xl p-6 bg-white sticky top-34">
            <h3 className="text-2xl font-semibold border-b pb-3 mb-4">Reviews</h3>
            <div className="space-y-4 max-h-100 overflow-y-auto pr-2 no-scrollbar">
              {chosenActivity.reviews?.map((review, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-1.25">
                      <div className="w-10 h-10 bg-red-400 rounded-[50%] flex justify-center items-center text-white text-2xl">
                        {review.username[0]}
                      </div>
                      <p className="text-[15px] font-medium text-orange-600 ">{review.username}</p>
                    </div>

                    <span className="font-medium text-orange-600">{review.userName}</span>
                    <div className="flex text-yellow-400 text-[10px]">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm italic">"{review.review}"</p>
                </div>
              ))}
            </div>
          </div>
  )
}

export default Reviews