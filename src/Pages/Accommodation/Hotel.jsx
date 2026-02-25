import { useState } from "react";
import hotels from "./hotelObj";

function Hotel() {
  const [activeHotel, setActiveHotel] = useState(hotels[0]);
  const [selectedImage, setSelectedImage] = useState(hotels[0].images[0]);


  return (
    <div className="w-full h-screen">
      <h1 className="text-center mt-6 text-3xl font-merienda">
        Our Contractor Hotels
      </h1>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* 🖼 დიდი სურათი */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
          <img
            src={selectedImage}
            alt="Hotel"
            className="w-full h-75 sm:h-100 lg:h-125 object-cover transition"
          />
        </div>

        {/* 🖼 პატარა სურათები */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols- gap-4">
          {activeHotel.images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`cursor-pointer rounded-xl overflow-hidden transition ${
                selectedImage === img
                  ? "ring-4 ring-blue-500 scale-105"
                  : "hover:scale-105"
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-28 object-cover"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Hotel;


