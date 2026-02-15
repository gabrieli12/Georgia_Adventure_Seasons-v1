import { useEffect, useState } from "react";

// Nav menu
import Nav from './Nav';

// burger menu
import BurgerMenu from './BurgerMenu';

function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // bg-[#08523e]


    return (

        <header className={` flex justify-around fixed items-center text-[16px] w-full text-white  max-lg:px-10 max-lg:justify-between z-50 transition-all duration-500 ease-out ${scrolled ? "bg-[#0B1220]/80 backdrop-blur-lg shadow-lg py-1" : "bg-transparent "} px-10 max-2xl:px-5 `}>

            {/* // <header className={` flex justify-around fixed items-center text-[16px] w-full text-white  max-lg:px-10 max-lg:justify-between z-50 transition-all duration-500 ease-out ${scrolled ? 'bg-[#08523e]' : 'bg-transparent'} `}> */}







            {/* Georgia Adventures logo */}
            <div className="flex justify-center items-center">
                <img className='flex w-24 relative top-2 max-2xl:w-20 max-xl:hidden max-lg:flex' src="main_logo/Georgia Adventure Logo for images.png" alt="logo" />
                <div className="cursor-pointer p-2 flex justify-start items-start flex-col relative top-2">
                    <h2 className="font-bebas text-[1.7rem] tracking-wider max-2xl:text-[1.5rem] max-xl:text-[1.3rem] ">Georgia <span className='text-green-200 '>Adventure</span> </h2>
                    <p className="font-bebas text-[1.5rem] tracking-wider bottom-2 relative max-2xl:text-[1.4rem] max-xl:text-[1.2rem]">Seasons</p>
                </div>
                
            </div>

            {/* navigation */}
            <Nav />
                <a
                    href="tel:+995 592 43 66 51"
                    className="flex flex-row-reverse justify-center items-center gap-1 cursor-pointer"
                >
                    {/* <img src="src/assets/number 3.png" alt="icon" /> */}
                    <i className="fa-brands fa-whatsapp text-green-400 text-2xl relative bottom-5 "></i>
                    <p className="max-2xl:text-sm">+995 595 706 585</p>
                </a>


            {/* number, language, btn*/}
            <div className="flex justify-center items-center gap-2  ">
                <div
                    className="flex justify-center items-center gap-2 rounded-lg   "
                >
                    <img className='w-6' src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/3840px-Flag_of_the_United_Kingdom.svg.png" alt="leng icon" />
                    <p>EN</p>
                </div>
                <button className="bg-[#74ff743f] bg-transparent border shadow-2xl shadow-green-300 border-green-400  px-5 py-2 rounded-lg text-sm font-semibold text-[#adffb4] cursor-pointer duration-300 hover:bg-[#ff8a05dd] hover:border-[#ff8a05dd] hover:shadow-orange-300 hover:text-white ">
                    Book Now
                </button>

                {/* burger menu */}
                <BurgerMenu />

            </div>


        </header>)
}

export default Header