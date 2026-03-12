import React, { useState, useMemo } from "react";

// Card data
import AdventureCards from "./AdventureCards";
import Card from "./Card";

const seasons = ["All", "Spring", "Summer", "Autumn", "Winter"];

function AdventureActivities() {
  const [activeSeason, setActiveSeason] = useState("Winter");

  // filter cards only when activeSeason changes
  const filteredCards = useMemo(() => {
    if (activeSeason === "All") return AdventureCards;
    return AdventureCards.filter(
      (card) => card.season && card.season.includes(activeSeason)
    );
  }, [activeSeason]);

  return (
    <section id="activities" className="flex flex-col items-center p-6">
      <div className="flex flex-col items-center text-center gap-3 bg-gray-50 w-[50%] relative pt-3 max-md:w-full">
        <h2 className="text-4xl max-md:text-2xl">Adventure Activities</h2>
        <p className="text-gray-600 w-[80%] pb-9 max-md:text-1xl">
          Experience the thrill of Georgian mountains through our diverse
          range of seasonal adventures. From adrenaline-pumping quad rides to
          peaceful horseback tours, we have something for every adventurer.
        </p>

        {/* seasons filter */}
        <div className="flex justify-center items-center absolute -bottom-5">
          <div className="flex gap-4 bg-white rounded-lg p-2 shadow-lg font-semibold max-md:text-[12px] max-sm:gap-2">
            {seasons.map((season) => (
              <button
                key={season}
                onClick={() => setActiveSeason(season)}
                className={`rounded-lg px-3 py-1 cursor-pointer ${
                  activeSeason === season
                    ? "bg-[#00a63e] text-white"
                    : "text-gray-700"
                }`}
              >
                {season}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative top-7 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <i
            key={i}
            className="fa-solid fa-star bg-linear-to-r from-[#FF6900] to-[#fdc700] bg-clip-text text-transparent"
          ></i>
        ))}
      </div>

      {/* cards */}
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredCards.length > 0 ? (
          filteredCards.map((item, index) => (
            <Card
              key={index}
              {...item} // spreading props to keep it clean
              index={index}
            />
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg mt-10">
            No activities available for {activeSeason} season.
          </p>
        )}
      </div>
    </section>
  );
}

export default React.memo(AdventureActivities);