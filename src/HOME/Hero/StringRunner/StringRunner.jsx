import React from "react"



const StringRunner = React.memo(function StringRunner({ animationName }) {
    const activities = [
        { icon: "🚙", text: "ATV & Quad Tours" },
        { icon: "🐎", text: "Horse Riding Experiences" },
        { icon: "🪂", text: "Paragliding Flights" },
        { icon: "🚣", text: "White Water Rafting" },
        { icon: "🎿", text: "Ski & Snowboard Lessons" },
        { icon: "🛥️", text: "MotorBoat" },
        { icon: "🛏️", text: "Hotels / Cottages" },
        { icon: "🎿", text: "Ski & Snowboard Rentals" },
        { icon: "🛻", text: "Transportation" },
        { icon: "❄️", text: "Snowmobile Tours" },
        { icon: "🌊", text: "Jetski" },
    ];
    return (
        <div className="w-full overflow-hidden py-3 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className={`${animationName} text-white font-semibold text-4xl flex gap-12 h-20 justify-center items-center max-sm:text-xl max-sm:gap-4 whitespace-nowrap`}>

                {/* ორიგინალი სია */}
                {activities.map((item, index) => (
                    <span key={index} className="flex items-center gap-3">
                        <span role="img" aria-label={item.text}>{item.icon}</span>
                        {item.text}
                    </span>
                ))}

                {/* დუბლიკატი ციკლისთვის (დაფარული მკითხველებისთვის) */}
                {activities.map((item, index) => (
                    <span key={`dup-${index}`} className="flex items-center gap-3" aria-hidden="true">
                        <span role="img">{item.icon}</span>
                        {item.text}
                    </span>
                ))}

            </div>
        </div>

    )
})


export default StringRunner