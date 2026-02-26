
import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import hotelsData from './newHotelObj'





/* =========================
   HOTEL MODAL COMPONENT
========================= */

function HotelModal({ hotel, onClose }) {
  const [selectedImage, setSelectedImage] = useState(hotel.images[0]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-50 w-[95%] max-w-6xl bg-gray-900 rounded-2xl p-6 overflow-y-auto max-h-[90vh] text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6">{hotel.name}</h2>

        {/* Big Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
          <img
            src={selectedImage}
            alt=""
            className="w-full h-104 object-cover transition"
          />
        </div>

        {/* Small Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {hotel.images.map((img, index) => (
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

/* =========================
   MAIN COMPONENT
========================= */

export default function NewHotel() {
  const [maxPrice, setMaxPrice] = useState(500);
  const [selectedStars, setSelectedStars] = useState(0);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const filteredHotels = hotelsData.filter(
    (hotel) =>
      hotel.price <= maxPrice &&
      (selectedStars === 0 || hotel.rating === selectedStars)
  );

  return (
    <div className="flex py-40 flex-col md:flex-row gap-6 p-6 bg-gray-900 text-white min-h-screen font-sans">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-800 p-5 rounded-xl h-fit sticky top-6">
        <h2 className="text-xl font-bold mb-6">Filters</h2>

        {/* Stars */}
        <div className="mb-8">
          <label className="block text-sm text-gray-400 mb-3">
            Star Rating
          </label>
          <div className="flex flex-col gap-2">
            {[5, 4, 3].map((star) => (
              <button
                key={star}
                onClick={() =>
                  setSelectedStars(selectedStars === star ? 0 : star)
                }
                className={`text-left px-3 py-2 rounded transition ${
                  selectedStars === star
                    ? "bg-blue-600"
                    : "hover:bg-gray-700"
                }`}
              >
                {"⭐".repeat(star)} {star} Stars
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm text-gray-400 mb-3">
            Max Price: GEL {maxPrice}
          </label>
          <input
            type="range"
            min="100"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

        <hr className="my-4" />

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <IoLocationOutline />
          Georgia. Gudauri
        </div>
      </aside>

      {/* Hotel Cards */}
      <main className="flex-1 flex flex-col gap-4">
        {filteredHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="flex flex-col sm:flex-row bg-[#1a1c1e] rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors"
          >
            <div className="sm:w-1/3 h-48">
              <img
                src={hotel.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 flex flex-1 flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-blue-400">
                  {hotel.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  📍 {hotel.location}
                </p>
                <div className="text-yellow-500 text-xs mt-1">
                  {"★".repeat(hotel.rating)}
                </div>
                <p className="text-sm text-gray-300 mt-3">
                  {hotel.description}
                </p>
              </div>

              <div className="flex justify-between items-end mt-4">
                <button
                  onClick={() => setSelectedHotel(hotel)}
                  className="text-blue-400 text-sm font-semibold hover:underline"
                >
                  Show more
                </button>

                <div className="text-right">
                  <p className="text-2xl font-bold text-green-400">
                    GEL {hotel.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Modal */}
      {selectedHotel && (
        <HotelModal
          hotel={selectedHotel}
          onClose={() => setSelectedHotel(null)}
        />
      )}
    </div>
  );
}