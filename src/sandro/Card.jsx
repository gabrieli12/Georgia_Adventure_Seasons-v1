import React, { useState, useEffect } from "react";
import adventureCards from "./cardObj";

function Card() {
  const [activeSeason, setActiveSeason] = useState("All"); //cards filter state

  //cards filter
  const filteredCards = adventureCards.filter((card) => {
    if (activeSeason === "All") return true;
    return card.season && card.season.includes(activeSeason);
  });

  return (
    <div>
      {/* ACTIVITIES */}
      <section className="flex justify-center items-center flex-col p-6">
        <div className="flex justify-center items-center flex-col text-center gap-3 bg-gray-50 w-[50%] relative pt-3 max-md:w-full">
          <h2 className="text-4xl max-md:text-2xl">Adventure Activities</h2>
          <p className="text-gray-600 w-[80%] pb-9 max-md:text-1xl">
            Experience the thrill of Georgian mountains through our diverse
            range of seasonal adventures. From adrenaline-pumping quad rides to
            peaceful horseback tours, we have something for every adventurer.
          </p>
          {/* seasons */}
          <div className="flex justify-center items-center absolute -bottom-5">
            <div className=" list-none flex justify-around items-center gap-4 bg-white rounded-lg p-2 shadow-lg font-semibold max-md:text-[12px] max-sm:gap-2">
              <button
                onClick={() => setActiveSeason("All")}
                className={`rounded-lg px-3 py-1 cursor-pointer ${
                  activeSeason === "All"
                    ? "bg-[#00a63e] text-white"
                    : "text-gray-700"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveSeason("Spring")}
                className={`rounded-lg px-3 py-1 cursor-pointer ${
                  activeSeason === "Spring"
                    ? "bg-[#00a63e] text-white"
                    : "text-gray-700"
                }`}
              >
                Spring
              </button>
              <button
                onClick={() => setActiveSeason("Summer")}
                className={`rounded-lg px-3 py-1 cursor-pointer ${
                  activeSeason === "Summer"
                    ? "bg-[#00a63e] text-white"
                    : "text-gray-700"
                }`}
              >
                Summer
              </button>
              <button
                onClick={() => setActiveSeason("Autumn")}
                className={`rounded-lg px-3 py-1 cursor-pointer ${
                  activeSeason === "Autumn"
                    ? "bg-[#00a63e] text-white"
                    : "text-gray-700"
                }`}
              >
                Autumn
              </button>
              <button
                onClick={() => setActiveSeason("Winter")}
                className={`rounded-lg px-3 py-1 cursor-pointer ${
                  activeSeason === "Winter"
                    ? "bg-[#00a63e] text-white"
                    : "text-gray-700"
                }`}
              >
                Winter
              </button>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {filteredCards.length > 0 ? (
            filteredCards.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={item.img}
                  alt="activity"
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {item.description}
                  </p>
                  <div className="pt-3">
                    <p className="flex gap-1 items-center">
                      <img
                        className="w-5 h-5"
                        src="src/assets/image 79.png"
                        alt="clock.logo"
                      />
                      {item.duration}
                    </p>
                    <p className="flex gap-1 items-center">
                      <img
                        className="w-5 h-5"
                        src="src/assets/image 80.png"
                        alt="persons.logo"
                      />
                      {item.groupSize}
                    </p>
                  </div>
                  <div className="flex items-end justify-end flex-col gap-2">
                    <p className="text-[12px] h-14 w-[65%] text-end">
                      {item.rightText}
                    </p>
                    <div className="w-full flex items-center justify-between">
                      <span className="text-green-600 font-bold">
                        {item.price}
                      </span>
                      <button className="bg-green-600 text-white px-4 py-2 duration-300 rounded-lg text-sm hover:bg-green-700 cursor-pointer">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg mt-10">
              No activities available for {activeSeason} season.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Card;
