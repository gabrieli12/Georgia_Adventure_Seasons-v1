import React, { useState, useEffect } from "react";

// card objects
import adventureCards from "./cardObj";

// Card
import Card from "./Card";


function AdventureActivities() {
    const [activeSeason, setActiveSeason] = useState("Winter"); //cards filter state

    //cards filter
    const filteredCards = adventureCards.filter((card) => {
        if (activeSeason === "All") return true;
        return card.season && card.season.includes(activeSeason);
    });

    return (
        <div>
            {/* ACTIVITIES */}
            <section id="activities" className="flex justify-center items-center flex-col p-6 ">
                <div className="flex justify-center items-center flex-col text-center gap-3 bg-gray-50 w-[50%] relative pt-3 max-md:w-full">
                    <h2 className="text-4xl max-md:text-2xl">Adventure Activities</h2>
                    <p className="text-gray-600 w-[80%] pb-9 max-md:text-1xl">
                        Experience the thrill of Georgian mountains through our diverse
                        range of seasonal adventures. From adrenaline-pumping quad rides to
                        peaceful horseback tours, we have something for every adventurer.
                    </p>

                    {/* seasons filter */}
                    <div className="flex justify-center items-center absolute -bottom-5">
                        <div className=" list-none flex justify-around items-center gap-4 bg-white rounded-lg p-2 shadow-lg font-semibold max-md:text-[12px] max-sm:gap-2">
                            <button
                                onClick={() => setActiveSeason("All")}
                                className={`rounded-lg px-3 py-1 cursor-pointer ${activeSeason === "All"
                                    ? "bg-[#00a63e] text-white"
                                    : "text-gray-700"
                                    }`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setActiveSeason("Spring")}
                                className={`rounded-lg px-3 py-1 cursor-pointer ${activeSeason === "Spring"
                                    ? "bg-[#00a63e] text-white"
                                    : "text-gray-700"
                                    }`}
                            >
                                Spring
                            </button>
                            <button
                                onClick={() => setActiveSeason("Summer")}
                                className={`rounded-lg px-3 py-1 cursor-pointer ${activeSeason === "Summer"
                                    ? "bg-[#00a63e] text-white"
                                    : "text-gray-700"
                                    }`}
                            >
                                Summer
                            </button>
                            <button
                                onClick={() => setActiveSeason("Autumn")}
                                className={`rounded-lg px-3 py-1 cursor-pointer ${activeSeason === "Autumn"
                                    ? "bg-[#00a63e] text-white"
                                    : "text-gray-700"
                                    }`}
                            >
                                Autumn
                            </button>
                            <button
                                onClick={() => setActiveSeason("Winter")}
                                className={`rounded-lg px-3 py-1 cursor-pointer ${activeSeason === "Winter"
                                    ? "bg-[#00a63e] text-white"
                                    : "text-gray-700"
                                    }`}
                            >
                                Winter
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative top-7 flex gap-0.5 ">
                    <i className="fa-solid fa-star bg-linear-to-r from-[#FF6900] to-[#fdc700] bg-clip-text text-transparent"></i>
                    <i className="fa-solid fa-star bg-linear-to-r from-[#FF6900] to-[#fdc700] bg-clip-text text-transparent"></i>
                    <i className="fa-solid fa-star bg-linear-to-r from-[#FF6900] to-[#fdc700] bg-clip-text text-transparent"></i>
                    <i className="fa-solid fa-star bg-linear-to-r from-[#FF6900] to-[#fdc700] bg-clip-text text-transparent"></i>
                    <i className="fa-solid fa-star  relative bg-linear-to-r from-[#FF6900] to-[#fdc700] bg-clip-text text-transparent"></i>
                </div>


                {/* cards */}
                <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    
                    {filteredCards.length > 0 ? (
                        filteredCards.map((item, index) => (
                            <Card key={index} index={index} img={item.img} fullDescription={item.fullDescription} detaleImg={item.images} title={item.title} description={item.description} evaluation={item.evaluation} rightText={item.rightText} price={item.price} rating={item.rating} reviews={item.reviews} additionalServices={item.additionalServices} location={item.location} features={item.features} recommendations={item.recommendations} />
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

export default AdventureActivities;
