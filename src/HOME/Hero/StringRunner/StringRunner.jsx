import React from "react"



const StringRunner = React.memo(function StringRunner({ animationName }) {
    return (
        <div className="w-full overflow-hidden py-3 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className={`${animationName} text-white font-semibold text-4xl flex gap-12 h-20 justify-center items-center max-sm:text-xl max-sm:gap-4`}>
                {/* <span>🏔️ Four Seasons Adventures in Georgia</span> */}
                <span>🚙 ATV & Quad Tours</span>
                <span>🐎 Horse Riding Experiences</span>
                <span>🪂 Paragliding Flights</span>
                <span>🚣 White Water Rafting</span>
                <span>🎿 Ski & Snowboard lessons</span>
                <span>🛥️ MotorBoat</span>
                <span>🛏️ Hotels / Cottages</span>
                <span>🎿 Ski & Snowboard rentals</span>
                <span>🛻 Transportation</span>
                <span>❄️ Snowmobile tours</span>
                <span>🌊 Jetski</span>




                {/* duplicate for smooth loop */}
                {/* <span>🏔️ Four Seasons Adventures in Georgia</span> */}
                <span>🚙 ATV & Quad Tours</span>
                <span>🐎 Horse Riding Experiences</span>
                <span>🪂 Paragliding Flights</span>
                <span>🚣 White Water Rafting</span>
                <span>🎿 Ski & Snowboard lessons</span>
                <span>🛥️ MotorBoat</span>
                <span>🛏️ Hotels / Cottages</span>
                <span>🎿 Ski & Snowboard rentals</span>
                <span>🛻 Transportation</span>
                <span>❄️ Snowmobile tours</span>
                <span>🌊 Jetski</span>


            </div>
        </div>

    )
})


export default StringRunner