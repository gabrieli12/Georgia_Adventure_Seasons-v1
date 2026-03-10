import React from 'react'
import { useState, useRef, useEffect } from 'react';

function Slider() {

    const heroImages = [
        "activities_images/skiSnowboard_lessons/ski1.png",
        "activities_images/paragliding/paragliding1.png",
        "activities_images/snowMobile/snowmobile.png",
        "activities_images/atv/atv2.png",
        "activities_images/skiSnowboard_rental/rent1.png",
        "activities_images/rafting/rafting1.png",
        "activities_images/jetski/jetski1.png",
        "activities_images/ცხენოსნობა.png",
        "activities_images/motorBoat/motorboat1.png",

        "activities_images/skiSnowboard_lessons/ski1.png",
        "activities_images/paragliding/paragliding1.png",
        "activities_images/snowMobile/snowmobile.png",
        "activities_images/atv/atv2.png",
        "activities_images/skiSnowboard_rental/rent1.png",
        "activities_images/rafting/rafting1.png",
        "activities_images/jetski/jetski1.png",
        "activities_images/ცხენოსნობა.png",
        "activities_images/motorBoat/motorboat1.png",

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(12); //img quantitli




    // hero slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === heroImages.length - 6 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    //hero slider responsiv
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleSlides(2); // mobile
            } else if (window.innerWidth < 1024) {
                setVisibleSlides(4); // tablet
            } else {
                setVisibleSlides(6); // desktop
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    return (
        <div className="absolute -bottom-5 left-[50%] -translate-x-[50%]  w-full max-w-7xl pb-5 mx-auto overflow-hidden">
            {/* hero slider*/}
            <div
                className="flex transition-transform duration-800 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * (150 / visibleSlides)
                        }%)`,
                }}
            >
                {heroImages.map((src, index) => (
                    <div
                        key={index}
                        className="shrink-0 px-2"
                        style={{ width: `${130 / visibleSlides}%` }}
                    >
                        <img
                            src={src}
                            alt={`Hero slide ${index + 1}`}
                            className="w-full h-28 md:h-44 object-cover object-center rounded-t-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>


        </div>

    )
}

export default Slider


















