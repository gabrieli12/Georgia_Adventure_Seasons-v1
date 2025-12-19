import { useState } from "react";


function DropDownMenu({ isOpen, setIsOpen }) {

    // const [isOpen, setIsOpen] = useState(false); //burger menu <show />

    return (
        <>
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-4 px-6 flex flex-col gap-6 text-[#707070] border border-gray-200 z-40">
                    <a
                        className="hover:text-[#106f3cb3] hover:underline"
                        href="#"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        className="hover:text-[#106f3cb3] hover:underline"
                        href="#"
                        onClick={() => setIsOpen(false)}
                    >
                        Tours
                    </a>
                    <a
                        className="hover:text-[#106f3cb3] hover:underline"
                        href="#"
                        onClick={() => setIsOpen(false)}
                    >
                        Activities
                    </a>
                    <a
                        className="hover:text-[#106f3cb3] hover:underline"
                        href="#"
                        onClick={() => setIsOpen(false)}
                    >
                        Gallery
                    </a>
                    <a
                        className="hover:text-[#106f3cb3] hover:underline"
                        href="#"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </a>
                    <a
                        className="hover:text-[#106f3cb3] hover:underline"
                        href="#"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </a>

                    {/* Mobile Number */}
                    <a
                        href="tel:+995 592 43 66 51"
                        className="flex items-center gap-2 hover:text-[#106f3cb3]"
                    >
                        <img src="src/assets/number 3.png" alt="icon" className="w-6" />
                        <p>+995 592 43 66 51</p>
                    </a>

                    {/* Language */}
                    <div className="flex items-center gap-2 cursor-pointer hover:text-[#106f3cb3]">
                        <img src="src/assets/lang 3.png" alt="lang" className="w-6" />
                        <p>EN</p>
                    </div>

                    {/* Book Now */}
                    <button className="bg-[#FF6900] px-6 py-3 rounded-lg text-white font-semibold hover:bg-[#ff8a05dd] hover:text-black">
                        Book Now
                    </button>
                </div>
            )}
        </>
    )
}

export default DropDownMenu