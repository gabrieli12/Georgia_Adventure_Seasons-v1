// Nav menu
import Nav from './Nav';

// burger menu
import BurgerMenu from './BurgerMenu';

function Header() {

    return (
        <header className=" flex justify-around items-center text-[16px] max-lg:w-full max-lg:px-10 max-lg:justify-between">
            
            {/* Georgia Adventures logo */}
            <div className="flex justify-center items-center">
                <img src="src/assets/logo_1-removebg-preview 3.png" alt="logo" />
                <div className="cursor-pointer p-2 flex justify-start items-start flex-col">
                    <h2 className="text-[#106f3cb3] font-bold">Georgia Adventures</h2>
                    <p className="text-[#7DD0A4]">Seasons</p>
                </div>
            </div>

            {/* navigation */}
            <Nav />


            {/* number, language, btn*/}
            <div className="flex justify-center items-center gap-6 max-lg:hidden">
                <a
                    href="tel:+995 592 43 66 51"
                    className="flex justify-center items-center gap-1 cursor-pointer"
                >
                    <img src="src/assets/number 3.png" alt="icon" />
                    <p>+995 592 43 66 51</p>
                </a>
                <div
                    className="flex justify-center items-center gap-2 rounded-lg outline-3 outline-offset-2 outline-double
                                p-0.5 cursor-pointer"
                >
                    <img src="src/assets/lang 3.png" alt="leng icon" />
                    <p>EN</p>
                </div>
                <button className="bg-[#FF6900] px-5 py-2 rounded-lg text-sm font-semibold text-white cursor-pointer duration-300 hover:bg-[#ff8a05dd] hover:text-black">
                    Book Now
                </button>
            </div>

            {/* burger menu */}
            <BurgerMenu />
            
        </header>)
}

export default Header