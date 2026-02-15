
function StringRunner({animationName}) {
    return (
        <div className="w-full overflow-hidden  py-3">
            <div className={`${animationName} text-white font-semibold text-4xl flex gap-12 h-20 justify-center items-center `}>
                <span>🏔️ Four Seasons Adventures in Georgia</span>
                <span>🚙 ATV & Quad Tours</span>
                <span>🐎 Horse Riding Experiences</span>
                <span>🪂 Paragliding Flights</span>
                <span>🚣 White Water Rafting</span>
                <span>🎿 Ski & Snowboard Tours</span>

                {/* duplicate for smooth loop */}
                <span>🏔️ Four Seasons Adventures in Georgia</span>
                <span>🚙 ATV & Quad Tours</span>
                <span>🐎 Horse Riding Experiences</span>
                <span>🪂 Paragliding Flights</span>
                <span>🚣 White Water Rafting</span>
                <span>🎿 Ski & Snowboard Tours</span>
            </div>
        </div>

    )
}

export default StringRunner