import { useContext, useState } from "react";
import { ChosenActivity } from "../../App";

function ActivitiesDetail() {
  const { chosenActivity } = useContext(ChosenActivity);
console.log(chosenActivity.features);



  const [mainImage, setMainImage] = useState(chosenActivity.mainImage);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-2 font-merienda">
      {/* Hero Section */}
      <div className="flex justify-between max-lg:flex-wrap ">
        <div className="bg-black pt-16 w-full h-24 absolute top-0 left-0"></div>
        <img
          src={mainImage} 
          alt="Paragliding"
          className="w-full h-full object-cover mr-3.75 rounded-2xl pt-20 "
        />

        <div className="grid grid-rows-3 gap-4 pt-20">
          {chosenActivity.imagesGallery
            ? chosenActivity.imagesGallery.map((i, ind) => (
                <img
                  key={ind}
                  src={i}
                  alt="Preview"
                  className="rounded-2xl object-cover h-full shadow-md cursor-pointer "
                  onClick={() => setMainImage(i)} // change images
                />
              ))
            : null}
        </div>
       
      </div>

      {/* Description + Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold">{chosenActivity.title}</h2>
          <p className="text-gray-600 leading-relaxed">
            {chosenActivity.fullDescription}
          </p>

          <footer className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
              {/* Contacts */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Contact: </h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center gap-3">
                    📞 <span>+995 592 43 66 51</span>
                  </div>
                  <div className="flex items-center gap-3">
                    ✉️ <span>geoas@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    📞 <span>+995 535 23 75 13</span>
                  </div>
                  <div className="flex items-center gap-3">
                    📞 <span>+995 575 31 53 34</span>
                  </div>
                </div>
              </div>

              {/* Rules */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Recommendations: </h4>
                <ul className="space-y-2 text-gray-600 leading-relaxed">
                    {chosenActivity.recommendations.map((item, index) =>(
                         <li>{item}</li> 
                    ))}
                  
                </ul>
              </div>

              {/* Important */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">features:</h4>
                <ul className="space-y-2 text-gray-600">
                    {chosenActivity.features.map((item, index) =>(
                         <li>{item}</li> 
                    ))}
                  {/* recommendations */}
                </ul>
              </div>
            </div>
          </footer>
        </div>

        {/* Reviews Box */}
        <div className="rounded-2xl border border-gray-200 shadow-lg p-6 space-y-2 w-100">
          <h3 className="text-xl font-semibold">Reviews</h3>
          <div className="space-y-3 text-sm">
            {chosenActivity.reviews
              ? chosenActivity.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="w-full min-w-67.5 h-auto border rounded-[10px] px-2.5 py-3.75 flex flex-col gap-2.5"
                  >
                    <section className="flex justify-between items-center">
                      <div className="flex items-center gap-1.25">
                        <div className="w-10 h-10 bg-red-400 rounded-[50%] flex justify-center items-center text-white text-2xl">
                          {review.username[0]}
                        </div>
                        <p className="text-[15px]">{review.userName}</p>
                      </div>
                      <div>
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <i
                            key={i}
                            className="fa-solid fa-star text-[#fdc700]"
                          ></i>
                        ))}
                      </div>
                    </section>
                    <section>
                      <p className="text-[12px]">{review.review}</p>
                    </section>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Rates</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chosenActivity.additionalServices
            ? chosenActivity.additionalServices.map((service, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 shadow-md p-6 text-center space-y-4"
                >
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <div className="text-3xl font-bold">{service.price}</div>
                  <button className="w-full py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition">
                    Reservation
                  </button>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default ActivitiesDetail;


