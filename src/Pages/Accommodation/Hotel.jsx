import { useState } from "react";
// import hotels from "./hotelObj";

const hotels = [
    {
      id: 1,
      name: "Ocean View Resort",
      images: [
        "https://www.ca.kayak.com/rimg/dimg/dynamic/186/2023/08/295ffd3a54bd51fc33810ce59382d1da.webp",
        "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKwpSeW3atSbkXZEXtp4Lqn4_WLucmW2bAA&s",
        "https://www.ahstatic.com/photos/c1n1_rodbch_00_p_1024x768.jpg",
        "https://www.ahstatic.com/photos/c1n1_ho_00_p_1024x768.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0X5E8dPyjI5sdaO1fH7b92f83UmC7Q0lew&s",
        "https://img1.10bestmedia.com/Images/Photos/392920/Kakslauttanen-glass-igloo-2_54_990x660.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHI2MinCYgH2hkbRNWV-39uhR8uNm-XQNJQ&s",
      ],
    },
    {
      id: 2,
      name: "Luxury Mountain Hotel",
      images: [
        "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        "https://www.ca.kayak.com/rimg/dimg/dynamic/186/2023/08/295ffd3a54bd51fc33810ce59382d1da.webp",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKwpSeW3atSbkXZEXtp4Lqn4_WLucmW2bAA&s",
        "https://www.ahstatic.com/photos/c1n1_rodbch_00_p_1024x768.jpg",
        "https://www.ahstatic.com/photos/c1n1_ho_00_p_1024x768.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0X5E8dPyjI5sdaO1fH7b92f83UmC7Q0lew&s",
        "https://img1.10bestmedia.com/Images/Photos/392920/Kakslauttanen-glass-igloo-2_54_990x660.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHI2MinCYgH2hkbRNWV-39uhR8uNm-XQNJQ&s",
      ],
    },
    {
      id: 3,
      name: "City Business Hotel",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKwpSeW3atSbkXZEXtp4Lqn4_WLucmW2bAA&s",
        "https://www.ca.kayak.com/rimg/dimg/dynamic/186/2023/08/295ffd3a54bd51fc33810ce59382d1da.webp",
        "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        "https://www.ahstatic.com/photos/c1n1_rodbch_00_p_1024x768.jpg",
        "https://www.ahstatic.com/photos/c1n1_ho_00_p_1024x768.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0X5E8dPyjI5sdaO1fH7b92f83UmC7Q0lew&s",
        "https://img1.10bestmedia.com/Images/Photos/392920/Kakslauttanen-glass-igloo-2_54_990x660.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHI2MinCYgH2hkbRNWV-39uhR8uNm-XQNJQ&s",
      ],
    },
    {
      id: 4,
      name: "Tropical Resort",
      images: [
        "https://www.ahstatic.com/photos/c1n1_ho_00_p_1024x768.jpg",
        "https://www.ca.kayak.com/rimg/dimg/dynamic/186/2023/08/295ffd3a54bd51fc33810ce59382d1da.webp",
        "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKwpSeW3atSbkXZEXtp4Lqn4_WLucmW2bAA&s",
        "https://www.ahstatic.com/photos/c1n1_rodbch_00_p_1024x768.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0X5E8dPyjI5sdaO1fH7b92f83UmC7Q0lew&s",
        "https://img1.10bestmedia.com/Images/Photos/392920/Kakslauttanen-glass-igloo-2_54_990x660.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHI2MinCYgH2hkbRNWV-39uhR8uNm-XQNJQ&s",
      ],
    },
  ];

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


