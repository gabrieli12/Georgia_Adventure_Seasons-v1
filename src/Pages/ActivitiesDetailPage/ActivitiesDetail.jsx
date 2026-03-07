// import { useContext, useState } from "react";
// import { ChosenActivity } from "../../App";

// function ActivitiesDetail() {






//   const { chosenActivity } = useContext(ChosenActivity);
//   console.log(chosenActivity.features);



//   const [mainImage, setMainImage] = useState(chosenActivity.mainImage);

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10 space-y-2 font-merienda">
//       {/* Hero Section */}
//       <div className="flex max-lg:flex-wrap flex-col mt-30 overflow-hidden ">
//         <div className="bg-black py-16 w-full h-24 absolute top-0 left-0"></div>
//         <img
//           src={mainImage}
//           alt="Paragliding"
//           className="w-full h-140 object-cover mr-3.75 rounded-2xl  "
//         />

//         {/* <div className="flex gap-4 py-5 w-full">
//           <video className="h-32 w-80 relative object-cover" src="videos/2025-11-18-131947470.mp4" controls></video>
//           <div className="flex gap-4 w-full">
//             {chosenActivity.imagesGallery
//               ? chosenActivity.imagesGallery.map((i, ind) => (
//                 <img
//                   key={ind}
//                   src={i}
//                   alt="Preview"
//                   className="rounded-2xl object-cover w-[16%] h-32 shadow-md cursor-pointer "
//                   onClick={() => setMainImage(i)} // change images
//                 />
//               ))
//               : null}

//           </div>
//         </div> */}

//       </div>

//       {/* Description + Reviews */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//         <div className="lg:col-span-2 space-y-4">
//           <h2 className="text-3xl font-bold">{chosenActivity.title}</h2>
//           <p className="text-gray-600 leading-relaxed">
//             {chosenActivity.fullDescription}
//           </p>

//           <footer className="max-w-7xl mx-auto px-6 py-12">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
//               {/* Contacts */}
//               <div className="space-y-4">
//                 <h4 className="text-lg font-semibold">Contact: </h4>
//                 <div className="space-y-2 text-gray-700">
//                   <div className="flex items-center gap-3">
//                     📞 <span>+995 592 43 66 51</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     ✉️ <span>geoas@gmail.com</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     📞 <span>+995 535 23 75 13</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     📞 <span>+995 575 31 53 34</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Rules */}
//               <div className="space-y-4">
//                 <h4 className="text-lg font-semibold">Recommendations: </h4>
//                 <ul className="space-y-2 text-gray-600 leading-relaxed">
//                   {chosenActivity.recommendations.map((item, index) => (
//                     <li>{item}</li>
//                   ))}

//                 </ul>
//               </div>

//               {/* Important */}
//               <div className="space-y-4">
//                 <h4 className="text-lg font-semibold">features:</h4>
//                 <ul className="space-y-2 text-gray-600">
//                   {chosenActivity.features.map((item, index) => (
//                     <li>{item}</li>
//                   ))}
//                   {/* recommendations */}
//                 </ul>
//               </div>
//             </div>
//           </footer>
//         </div>

//         {/* Reviews Box */}
//         <div className="rounded-2xl border border-gray-200 shadow-lg p-6 space-y-2 w-100">
//           <h3 className="text-xl font-semibold">Reviews</h3>
//           <div className="space-y-3 text-sm">
//             {chosenActivity.reviews
//               ? chosenActivity.reviews.map((review, index) => (
//                 <div
//                   key={index}
//                   className="w-full min-w-67.5 h-auto border rounded-[10px] px-2.5 py-3.75 flex flex-col gap-2.5"
//                 >
//                   <section className="flex justify-between items-center">
//                     <div className="flex items-center gap-1.25">
//                       <div className="w-10 h-10 bg-red-400 rounded-[50%] flex justify-center items-center text-white text-2xl">
//                         {review.username[0]}
//                       </div>
//                       <p className="text-[15px]">{review.userName}</p>
//                     </div>
//                     <div>
//                       {Array.from({ length: review.rating }).map((_, i) => (
//                         <i
//                           key={i}
//                           className="fa-solid fa-star text-[#fdc700]"
//                         ></i>
//                       ))}
//                     </div>
//                   </section>
//                   <section>
//                     <p className="text-[12px]">{review.review}</p>
//                   </section>
//                 </div>
//               ))
//               : null}
//           </div>
//         </div>
//       </div>

//       {/* Pricing */}
//       <div className="space-y-6">
//         <h2 className="text-3xl font-bold text-center">Rates</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {chosenActivity.additionalServices
//             ? chosenActivity.additionalServices.map((service, i) => (
//               <div
//                 key={i}
//                 className="rounded-2xl border border-gray-200 shadow-md p-6 text-center space-y-4"
//               >
//                 <h3 className="text-xl font-semibold">{service.name}</h3>
//                 <div className="text-3xl font-bold">{service.price}</div>
//                 <button className="w-full py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition">
//                   Reservation
//                 </button>
//               </div>
//             ))
//             : null}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ActivitiesDetail;





import { useContext, useRef, useState, useEffect } from "react";
import { ChosenActivity } from "../../App";
import Rates_Services from "./comps/Rates_Services";
import Reviews from "./comps/Reviews";
import Reco from "./comps/Reco";
import Hero from "./comps/Hero";
import PriceCard from "./main_info/PriceCard";
import ImportantInfo from "./main_info/ImportantInfo";

function ActivitiesDetail() {
  const { chosenActivity, setChosenActivity } = useContext(ChosenActivity);



  return (
    <div>
      <section className="max-w-7xl w-full mx-auto px-6 max-sm:px-4  space-y-12 font-merienda mb-20 ">

        {/* black background for header */}
        <div className="bg-black py-16 w-full h-24 absolute top-0 left-0 max-xl:py-13 max-sm:py-21 "></div>

        {/* Hero Section */}
        <Hero chosenActivity={chosenActivity} setChosenActivity={setChosenActivity} />

        

        {/* Main Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">{chosenActivity?.title}</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-poppins ">
                {chosenActivity?.detail?.fullDescription}
              </p>
            </div>

            <div className="pt-16 border-t flex flex-col gap-10 border-gray-100">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Pricing & Packages</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Choose the best option that fits your needs. No hidden fees, just pure adventure.
                </p>
              </div>


              <h2 className={`text-center text-5xl font-bebas tracking-widest ${chosenActivity?.id === 5 ? "block" : "hidden"}`}>ski</h2>
              <div className="grid grid-cols-2 max-md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2   gap-8">

                {chosenActivity?.detail?.priceDetails?.slice(0, 4).map((service, i) => (
                  <PriceCard className="bg-white p-6 rounded-xl shadow-md" key={i} chosenActivity={chosenActivity} service={service} i={i} />
                ))}
              </div>

              <ImportantInfo chosenActivity={chosenActivity} setChosenActivity={setChosenActivity}  />

              <div className={`flex flex-col gap-2 border-l-0 pb-10 md:border-l md:pl-6 border-orange-200 ${chosenActivity?.id === 5 ? "block" : "hidden"}`}>
                <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Multi-Day Offer</span>
                <p className="text-gray-600 leading-relaxed">
                  Plan ahead! Book for multiple days and enjoy <span className="font-bold text-red-900 text-base">exclusive lower rates</span> on consecutive sessions.
                </p>
              </div>
              



              <div className={`flex flex-col gap-5 ${chosenActivity?.id === 5 ? "block" : "hidden"}`}>
                <h2 className="text-center text-5xl font-bebas tracking-widest">snowboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                  {chosenActivity?.detail?.priceDetails?.slice(4, 8).map((service, i) => (
                    <PriceCard key={i} service={service} i={i} />
                  ))}
                </div>

              </div>



            </div>



            {/* Contact & Recommendations & Features */}
            <Reco chosenActivity={chosenActivity} />
          </div>

          {/* Reviews */}
          <Reviews chosenActivity={chosenActivity} />

        </div>

        {/* Pricing */}
        <Rates_Services chosenActivity={chosenActivity} />

      </section>
    </div>
  );
}


export default ActivitiesDetail;