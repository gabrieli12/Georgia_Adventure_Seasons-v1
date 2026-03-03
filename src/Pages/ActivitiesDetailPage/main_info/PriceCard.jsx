import React from 'react'

function PriceCard({ chosenActivity, service, i }) {
    return (
        <div
            key={i}
            className="relative group bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
        >
            {/* პოპულარულობის თეგისთვის (სურვილისამებრ) */}
            {i === 2 && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                    Most Popular
                </span>
            )}

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-orange-600">{service.price}</span>
                    <span className="text-gray-400 font-medium  ">USD</span>
                </div>
                <p className="text-gray-400 font-medium">Per Person</p>
            </div>

            {/* სერვისის დეტალები - შეგიძლია აქ სტატიკური პუნქტები დაამატო ან ობიექტში ჩაწერო */}
            <ul className="space-y-4 mb-8 grow">
                {
                    service.serviceDetails.map((item, index) => {
                        return (
                            <li key={index} className="flex items-center gap-3 text-gray-600">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {item}
                            </li>

                        )
                    })
                }
                {/* <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Professional Guide
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Safety Insurance
                </li> */}
            </ul>

            <a href={`https://wa.me/995595706585?text=Hello,%20I%20would%20like%20to%20book%20an%20activity.`} target='__blank'>
                <button className="w-full py-4 rounded-2xl bg-gray-900 text-white font-bold transition-all duration-300 group-hover:bg-orange-600 group-hover:shadow-lg active:scale-95 cursor-pointer">
                    Book This Package
                </button>

            </a>
        </div>
    )
}

export default PriceCard