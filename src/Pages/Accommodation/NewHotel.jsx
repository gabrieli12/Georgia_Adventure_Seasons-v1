import { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import hotelsData from './newHotelObj';

const NewHotel = () => {
  const [maxPrice, setMaxPrice] = useState(500);
  const [selectedStars, setSelectedStars] = useState(0);

  // Filter Logic
  const filteredHotels = hotelsData.filter(hotel => 
    hotel.price <= maxPrice && (selectedStars === 0 || hotel.rating === selectedStars)
  );

  return (
    <div className="flex py-40 flex-col md:flex-row gap-6 p-6 bg-gray-900 text-white min-h-screen font-sans">
      
      {/* Left Filter Sidebar */}
      <aside className="w-full md:w-64 bg-gray-800 p-5 rounded-xl h-fit sticky top-6">
        <h2 className="text-xl font-bold mb-6">Filters</h2>
        
        {/* Star Rating Filter */}
        <div className="mb-8">
          <label className="block text-sm text-gray-400 mb-3">Star Rating</label>
          <div className="flex flex-col gap-2">
            {[5, 4, 3].map(star => (
              <button 
                key={star}
                onClick={() => setSelectedStars(selectedStars === star ? 0 : star)}
                className={`text-left px-3 py-2 rounded transition ${selectedStars === star ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              >
                {"⭐".repeat(star)} {star} Stars
              </button>
            ))}
          </div>
          
        </div>
          
        {/* Price Filter */}
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-3">Max Price: GEL {maxPrice}</label>
          <input 
            type="range" 
            min="100" 
            max="1000" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-xs mt-2 text-gray-500">
            <span>100 GEL</span>
            <span>1000 GEL</span>
          </div>
        </div>
        <hr />
        <div className='flex justify-start items-center gap-2 -mb-2 mt-2'>
            <IoLocationOutline />
            <p className='text-[12px]'> Georgia. Gudauri</p>
        </div>
      </aside>

      {/* Hotel Listings */}
      <main className="flex-1 flex flex-col gap-4">
        {filteredHotels.length > 0 ? filteredHotels.map(hotel => (
          <div key={hotel.id} className="flex flex-col sm:flex-row bg-[#1a1c1e] rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
            {/* Image */}
            <div className="sm:w-1/3 h-48 sm:h-auto">
              <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
            </div>

            {/* Information */}
            <div className="p-4 flex flex-1 flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-blue-400 cursor-pointer hover:underline">{hotel.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col items-end">
                      <span className="font-semibold leading-none">Wonderful</span>
                      <span className="text-xs text-gray-400">{hotel.reviews} reviews</span>
                    </div>
                    <div className="bg-blue-600 text-white p-2 rounded-lg font-bold">
                      {hotel.score}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-1">📍 {hotel.location}</p>
                <div className="flex text-yellow-500 text-xs mt-1">
                  {"★".repeat(hotel.rating)}
                </div>
                <p className="text-sm text-gray-300 mt-3 line-clamp-2">
                  {hotel.description}
                </p>
              </div>

              <div className="flex justify-between items-end mt-4">
                <button className="text-blue-400 text-sm font-semibold hover:underline">Show more</button>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Price from</p>
                  <p className="text-2xl font-bold text-green-400">GEL {hotel.price}</p>
                  <p className="text-xs text-gray-500">1 night, 2 adults</p>
                  <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-bold transition">
                    Check availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        )) : (
          <div className="text-center py-20 text-gray-500 text-xl">No matching hotels found</div>
        )}
      </main>

    </div>
  );
};

export default NewHotel;