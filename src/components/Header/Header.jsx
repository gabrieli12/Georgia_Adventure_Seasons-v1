// import { useEffect, useState } from "react";

// // Nav menu
// import Nav from './Nav';

// // burger menu
// import BurgerMenu from './BurgerMenu';

// function Header() {

//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     // bg-[#08523e]


//     return (

//         <header className={` flex justify-around fixed items-center text-[16px] w-full text-white  max-lg:px-10 max-lg:justify-between z-50 transition-all duration-500 ease-out ${scrolled ? "bg-[#0B1220]/80 backdrop-blur-lg shadow-lg py-1" : "bg-transparent "} px-10 max-2xl:px-5 `}>

//             {/* // <header className={` flex justify-around fixed items-center text-[16px] w-full text-white  max-lg:px-10 max-lg:justify-between z-50 transition-all duration-500 ease-out ${scrolled ? 'bg-[#08523e]' : 'bg-transparent'} `}> */}







//             {/* Georgia Adventures logo */}
//             <div className="flex justify-center items-center">
//                 <img className='flex w-24 relative top-2 max-2xl:w-20 max-xl:hidden max-lg:flex' src="main_logo/Georgia Adventure Logo for images.png" alt="logo" />
//                 <div className="cursor-pointer p-2 flex justify-start items-start flex-col relative top-2">
//                     <h2 className="font-bebas text-[1.7rem] tracking-wider max-2xl:text-[1.5rem] max-xl:text-[1.3rem] ">Georgia <span className='text-green-200 '>Adventure</span> </h2>
//                     <p className="font-bebas text-[1.5rem] tracking-wider bottom-2 relative max-2xl:text-[1.4rem] max-xl:text-[1.2rem]">Seasons</p>
//                 </div>

//             </div>

//             {/* navigation */}
//             <Nav />
//                 <a
//                     href="tel:+995 592 43 66 51"
//                     className="flex flex-row-reverse justify-center items-center gap-1 cursor-pointer"
//                 >
//                     {/* <img src="src/assets/number 3.png" alt="icon" /> */}
//                     <i className="fa-brands fa-whatsapp text-green-400 text-2xl relative bottom-5 "></i>
//                     <p className="max-2xl:text-sm">+995 595 706 585</p>
//                 </a>


//             {/* number, language, btn*/}
//             <div className="flex justify-center items-center gap-2  ">
//                 <div
//                     className="flex justify-center items-center gap-2 rounded-lg   "
//                 >
//                     <img className='w-6' src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/3840px-Flag_of_the_United_Kingdom.svg.png" alt="leng icon" />
//                     <p>EN</p>
//                 </div>
//                 <button className="bg-[#74ff743f] bg-transparent border shadow-2xl shadow-green-300 border-green-400  px-5 py-2 rounded-lg text-sm font-semibold text-[#adffb4] cursor-pointer duration-300 hover:bg-[#ff8a05dd] hover:border-[#ff8a05dd] hover:shadow-orange-300 hover:text-white ">
//                     Book Now
//                 </button>

//                 {/* burger menu */}
//                 <BurgerMenu />

//             </div>


//         </header>)
// }

// export default Header

import { useEffect, useState } from "react";

// Nav menu
import Nav from './Nav';

// burger menu
import BurgerMenu from './BurgerMenu';

import { HashLink } from 'react-router-hash-link';


function Header() {
    const [scrolled, setScrolled] = useState(false);

    // ახალი: ენები
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        // ვქმნით დამკვირვებელს
        const observer = new IntersectionObserver(
            ([entry]) => {
                // entry.isIntersecting იქნება true, როცა ეს ელემენტი ჩანს
                // ჩვენ გვინდა setScrolled(true), როცა ის გაქრება (ანუ ჩავსქროლავთ)
                setScrolled(!entry.isIntersecting);
            },
            { threshold: 0.1 } // რამდენად უნდა გამოჩნდეს, რომ რეაქცია ჰქონდეს
        );

        // ვაკვირდებით რაიმე ელემენტს გვერდის თავში (მაგალითად ლოგოს ან უხილავ დამხმარეს)
        const topElement = document.getElementById("scroll-anchor");
        if (topElement) observer.observe(topElement);

        return () => observer.disconnect();
    }, []);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrolled(window.scrollY > 50);
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    const flagUrls = {
        en: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/3840px-Flag_of_the_United_Kingdom.svg.png",
        ka: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
        ru: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
        ar: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/320px-Flag_of_Saudi_Arabia.svg.png"

    };

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div id="scroll-anchor" className="absolute top-0 left-0 h-1 w-1 pointer-events-none opacity-0"></div>

            <header className={`flex justify-around fixed items-center text-[16px] w-full text-white  z-50 transition-all duration-500 ease-out ${scrolled ? "bg-[#0B1220]/80 backdrop-blur-lg shadow-lg " : "bg-transparent "}   flex-col`}>
                <section className="w-full bg-white py-3 flex  justify-around sm:hidden">

                    <div className="flex gap-10 relative">
                        <a href="https://wa.me/995595706585?text=Hello,%20I%20would%20like%20to%20book%20an%20activity." className="flex flex-row-reverse justify-center items-center gap-1 cursor-pointer relative top-1.5" target="__blank">
                            <i className="fa-brands fa-whatsapp text-green-400 text-2xl relative bottom-5 "></i>
                            <p className="max-2xl:text-sm text-black">+995 595 706 585</p>
                        </a>

                    </div>

                    <a href="https://wa.me/995595706585?text=Hello,%20I%20would%20like%20to%20book%20an%20activity.">
                        <button className="border shadow-2xl shadow-green-300  px-5 py-2 rounded-lg text-sm font-semibold text-[#adffb4] cursor-pointer duration-300 hover:bg-[#ff8a05dd] hover:border-[#ff8a05dd] hover:shadow-orange-300 hover:text-white max-xl:px-3 max-xl:py-1 bg-[#0B1220] max-sm:px-5 max-sm:py-2 ">
                            Book Now
                        </button>
                    </a>


                </section>

                {/* Georgia Adventures logo */}
                <section className={`w-full justify-around items-center flex max-lg:justify-between duration-500 ease-out max-2xl:px-5 px-10 ${scrolled ? 'py-1' : 'py-3'}`}>
                    <a href="/">
                        <div className="flex justify-center items-center ">
                            <img className='flex w-24 relative top-2 max-2xl:w-20 max-xl:hidden max-lg:flex ' src="main_logo/Georgia Adventure Logo for images.png" alt="logo" />
                            <div className="cursor-pointer p-2 flex justify-start items-start flex-col relative top-2">
                                <h2 className="font-bebas text-[1.7rem] tracking-wider max-2xl:text-[1.5rem] max-xl:text-[1.3rem] ">
                                    Georgia <span className='text-green-200 '>Adventure</span>
                                </h2>
                                <p className="font-bebas text-[1.5rem] tracking-wider bottom-2 relative max-2xl:text-[1.4rem] max-xl:text-[1.2rem] ">Seasons</p>
                            </div>
                        </div>
                    </a>

                    {/* navigation */}

                    <Nav />

                    <a href="https://wa.me/995595706585?text=Hello,%20I%20would%20like%20to%20book%20an%20activity." className="flex flex-row-reverse justify-center items-center gap-1 cursor-pointer max-sm:hidden" target="__blank">
                        <i className="fa-brands fa-whatsapp text-green-400 text-2xl relative bottom-5 "></i>
                        <p className="max-2xl:text-sm ">+995 595 706 585</p>
                    </a>

                    {/* number, language, btn*/}
                    <div className="flex justify-center items-center gap-2 max-xl:flex-col-reverse max-lg:flex-row  relative">

                        {/* Language Selector */}
                        {/* <div
                            className="relative py-3 group"
                            onMouseEnter={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}
                        >
                            <button className="flex items-center gap-1.5 outline-none font-medium text-[15px] tracking-wide uppercase transition-all group-hover:opacity-70">
                                <img className='w-6' src={flagUrls[language]} alt="flag" />
                                {language}
                                <svg
                                    className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            Dropdown Menu - მინიმალისტური და სუფთა
                            <div className={`
                    absolute right-0 mt-1 w-20 bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.15)] py-2 text-gray-800
                    transition-all duration-300 border border-gray-100 z-50
                    ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2 '}
                `}>
                                <p onClick={(e) => setLanguage('en')} className="text-black block px-6 py-2 hover:bg-gray-50 hover:text-blue-600 transition-colors text-[14px] font-medium cursor-pointer" value="en">EN</p>
                                <p onClick={(e) => setLanguage('ka')} className="text-black block px-6 py-2 hover:bg-gray-50 hover:text-blue-600 transition-colors text-[14px] font-medium cursor-pointer" value="ka">KA</p>
                                <p onClick={(e) => setLanguage('ru')} className="text-black block px-6 py-2 hover:bg-gray-50 hover:text-blue-600 transition-colors text-[14px] font-medium cursor-pointer" value="ru">RU</p>
                                <p onClick={(e) => setLanguage('ar')} className="text-black block px-6 py-2 hover:bg-gray-50 hover:text-blue-600 transition-colors text-[14px] font-medium cursor-pointer" value="ar">AR</p>

                            </div>
                        </div>
 */}




                        <a href="https://wa.me/995595706585?text=Hello,%20I%20would%20like%20to%20book%20an%20activity." target="__blank">
                            <button className="bg-transparent border shadow-2xl shadow-green-300 border-green-400 px-5 py-2 rounded-lg text-sm font-semibold text-[#adffb4] cursor-pointer duration-300 hover:bg-[#ff8a05dd] hover:border-[#ff8a05dd] hover:shadow-orange-300 hover:text-white max-xl:px-3 max-xl:py-1 max-sm:hidden ">
                                Book Now
                            </button>
                        </a>

                        {/* burger menu */}
                        <BurgerMenu />
                    </div>

                </section>

            </header>
        </>
    )
}

export default Header;
