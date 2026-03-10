import { useState } from "react";
import { HashLink } from "react-router-hash-link";


function DropDownMenu({ isOpen, setIsOpen }) {

    // const [isOpen, setIsOpen] = useState(false); //burger menu <show />

    return (
        <>
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-4 px-6 flex flex-col gap-6 text-[#707070] border border-gray-200 z-40">

                    <HashLink to="/#" className="hover:text-[#106f3cb3] hover:underline" onClick={() => setIsOpen(false)}>
                        Home
                    </HashLink>

                    <HashLink to="/#activities" className="hover:text-[#106f3cb3] hover:underline" onClick={() => setIsOpen(false)}>
                        Tours & Activities
                    </HashLink>

                    <HashLink to="/accommodation#" className="hover:text-[#106f3cb3] hover:underline" onClick={() => setIsOpen(false)}>
                        Accommodation
                    </HashLink>

                    <HashLink to="/transport#" className="hover:text-[#106f3cb3] hover:underline" onClick={() => setIsOpen(false)}>
                        Transportation
                    </HashLink>

                    <HashLink to="/transport#" className="hover:text-[#106f3cb3] hover:underline" onClick={() => setIsOpen(false)}>
                        Transportation
                    </HashLink>


                    <HashLink to="/aboutUs#" className="hover:text-[#106f3cb3] hover:underline" onClick={() => setIsOpen(false)}>
                        About
                    </HashLink>

                    {/* <HashLink to="/contact#" className="hover:text-[#106f3cb3] hover:underline" onClick={() => setIsOpen(false)}>
                        Contact
                    </HashLink> */}


                    {/* Mobile Number */}
                    <a
                        href="https://wa.me/995595706585?text=Hello,%20I%20would%20like%20to%20book%20an%20activity."
                        className="flex items-center gap-2 hover:text-[#106f3cb3]"
                    >
                        <img src="src/assets/number 3.png" alt="icon" className="w-6" />
                        <p>+995 592 43 66 51</p>
                    </a>

                    {/* Language */}
                    {/* <div className="flex items-center gap-2 cursor-pointer hover:text-[#106f3cb3]">
                        <img src="src/assets/lang 3.png" alt="lang" className="w-6" />
                        <p>EN</p>
                    </div> */}

                    {/* Book Now */}
                    <button className="bg-[#FF6900] px-6 py-3 rounded-lg text-white font-semibold hover:bg-[#ff8a05dd] hover:text-black cursor-pointer duration-300">
                        Book Now
                    </button>
                </div>
            )}
        </>
    )
}

export default DropDownMenu