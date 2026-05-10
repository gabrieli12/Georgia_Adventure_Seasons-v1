import React from 'react'
import AdventureCards from '../../../HOME/AdventureActivities/AdventureCards';

function ImportantInfo({ chosenActivity, setChosenActivity }) {
    return (
        <div className="mt-12 bg-orange-50 rounded-3xl p-8 border border-orange-100">

            <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Important Information
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* პუნქტი 1 */}
                {/* {chosenActivity?.detail?.inportantInfo?.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <span className="text-orange-600 font-bold uppercase tracking-wider">{item.title}</span>
                        <p className="text-gray-600 leading-relaxed font-roboto">
                            {item.text}
                            <span className="font-bold ">{item.highlight}</span> 
                            {item.suffix}
                        </p>
                        {console.log(item)}
                    </div>
                ))} */}


                    {chosenActivity?.detail?.importantInfo?.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            {/* თითოეული პუნქტის სათაური (Note, Bundle Deal და ა.შ.) */}
                            <span className="text-orange-600 font-bold uppercase tracking-wider">
                                {item.label}
                            </span>

                            {/* ტექსტი, რომელიც შეიცავს გამუქებულ ნაწილებს */}
                            <p
                                className={`text-gray-600 leading-relaxed font-sans `}
                                onClick={item.isLink ? () => {
                                    // აქ შეგიძლია ჩაწერო გადამისამართების ლოგიკა
                                    console.log("Redirecting to Equipment Rental...");
                                } : null}
                                dangerouslySetInnerHTML={{ __html: item.value }}
                            />
                        </div>
                    ))}

                {/* <div className="flex flex-col gap-2">
                    <span className="text-orange-600 font-bold uppercase tracking-wider">Note</span>
                    <p className="text-gray-600 leading-relaxed font-roboto">
                        Lift tickets and Rental Equipment are <span className="font-bold ">not included</span> in the lesson price.
                    </p>
                </div> */}

                {/* პუნქტი 2 */}
                {/* <div className="flex flex-col gap-2">
                    <span className="text-orange-600 font-bold uppercase tracking-wider">Bundle Deal</span>
                    <p className="text-gray-600 leading-relaxed font-roboto">
                        Get a <span className="font-bold text-red-800">10% discount</span> on <span className="font-bold text-orange-500 cursor-pointer hover:underline" onClick={() => setChosenActivity("Full Ski & Snowboard Equipment Rental")}>equipment rental</span> when booked together with a lesson.
                    </p>
                </div> */}

                {/* პუნქტი 3 */}
                {/* <div className="flex flex-col gap-2">
                    <span className="text-orange-600 font-bold  uppercase tracking-wider">Group Savings</span>
                    <p className="text-gray-600 leading-relaxed font-roboto">
                        Groups of 2+ receive a progressive discount starting from <span className="font-bold text-red-800">10% up to 45%</span>, depending on the group size.
                    </p>
                </div> */}

            </div>

        </div>
    )
}

export default ImportantInfo