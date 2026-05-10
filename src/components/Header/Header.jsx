import { useEffect, useState, memo } from "react";

import { Link } from "react-router-dom"

// Nav menu
import Nav from './Nav';

// burger menu
import BurgerMenu from './BurgerMenu';



function Header() {
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const element = document.getElementById("scroll-anchor");

        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            setScrolled(prev => {
                const next = !entry.isIntersecting;
                return prev === next ? prev : next;
            });
        });

        observer.observe(element);

        return () => observer.disconnect();
    }, []);


    const handleWhatsAppClick = () => {
        if (window.fbq) {
            window.fbq('track', 'Contact');
        }
    };

    const whatsappLink = "https://wa.me/995595706585?text=Hello,%20I%20would%20like%20to%20book%20an%20activity.";


    return (
        <>
            <div id="scroll-anchor" className="absolute top-0 left-0 h-1 w-1 pointer-events-none opacity-0"></div>

            <header className={`flex justify-around fixed items-center text-[16px] w-full text-white  z-50 transition-all duration-500 ease-out flex-col ${scrolled ?
                "bg-[#0B1220]/80 backdrop-blur-lg shadow-lg "
                : "bg-transparent "}   
                `}>
                <section className="w-full bg-white py-3 flex  justify-around sm:hidden">

                    <div className="flex gap-10 relative">
                        <a href={whatsappLink} onClick={handleWhatsAppClick} className="flex flex-row-reverse justify-center items-center gap-1 cursor-pointer relative top-1.5" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-whatsapp text-green-400 text-2xl relative bottom-5 "></i>
                            <p className="max-2xl:text-sm text-black">+995 595 706 585</p>
                        </a>

                    </div>

                    <a href={whatsappLink} onClick={handleWhatsAppClick} target="_blank" rel="noopener noreferrer">
                        <button className="border shadow-2xl shadow-green-300  px-5 py-2 rounded-lg text-sm font-semibold text-[#adffb4] cursor-pointer duration-300 hover:bg-[#ff8a05dd] hover:border-[#ff8a05dd] hover:shadow-orange-300 hover:text-white max-xl:px-3 max-xl:py-1 bg-[#0B1220] max-sm:px-5 max-sm:py-2 ">
                            Book Now
                        </button>
                    </a>


                </section>

                {/* Georgia Adventures logo */}
                <section className={`w-full justify-around items-center flex max-lg:justify-between duration-500 ease-out max-2xl:px-5 px-10 ${scrolled ? 'py-1' : 'py-3'}`}>
                    <Link to="/">
                        <div className="flex justify-center items-center ">
                            <img width={100} height={80} className='flex w-24 relative top-2 max-2xl:w-20 max-xl:hidden max-lg:flex ' src="/main_logo/Georgia Adventure Logo for images.webp" alt="company main logo" />
                            <div className="cursor-pointer p-2 flex justify-start items-start flex-col relative top-2">
                                <h2 className="font-bebas text-[1.7rem] tracking-wider max-2xl:text-[1.5rem] max-xl:text-[1.3rem] ">
                                    Georgia <span className='text-green-200 '>Adventure</span>
                                </h2>
                                <p className="font-bebas text-[1.5rem] tracking-wider bottom-2 relative max-2xl:text-[1.4rem] max-xl:text-[1.2rem] ">Seasons</p>
                            </div>
                        </div>
                    </Link>

                    {/* navigation */}

                    <Nav />

                    <a href={whatsappLink} onClick={handleWhatsAppClick} className="flex flex-row-reverse justify-center items-center gap-1 cursor-pointer max-sm:hidden" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp at +995 595 706 585">
                        {/* <i className="fa-brands fa-whatsapp text-green-400 text-2xl relative bottom-5 "></i> */}
                        <svg className="text-green-400 text-sm relative bottom-5" width={21} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"/></svg>
                        <p className="max-2xl:text-sm ">+995 595 706 585</p>
                    </a>

                    {/* number, language, btn*/}
                    <div className="flex justify-center items-center gap-2 max-xl:flex-col-reverse max-lg:flex-row  relative">


                        <a href="https://wa.me/995595706585?text=Hello,%20I%20would%20like%20to%20book%20an%20activity." onClick={handleWhatsAppClick} target="__blank">
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

export default memo(Header);








// will add 


// const flagUrls = {
//     en: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/3840px-Flag_of_the_United_Kingdom.svg.png",
//     ka: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
//     ru: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
//     ar: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/320px-Flag_of_Saudi_Arabia.svg.png"

// };


{/* Language Selector */ }
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