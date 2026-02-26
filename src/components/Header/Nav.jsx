import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function Nav({ scrolled }) {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav scrolled={scrolled} className="flex gap-7 justify-between items-center text-white  max-lg:hidden font-poppins  max-2xl:gap-3 max-xl:text-[15px]   text-[14px] ">
            <HashLink className="hover:underline " to="/#">
                Home
            </HashLink>
            <HashLink className="hover:underline " to="/#activities">
                Tours & Activities
            </HashLink>
            <HashLink className="hover:underline " to="/accommodation#">
                Accommodation
            </HashLink>

            <HashLink className="hover:underline " to="/transport#">
                Transportation
            </HashLink>

            {/* Dropdown Container */}
            {/* Dropdown - Company Section */}
            <div
                className="relative py-3 group"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <button className="flex items-center gap-1.5 outline-none font-medium text-[14px] tracking-wide uppercase transition-all group-hover:opacity-70 ">
                    Company
                    <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Dropdown Menu - მინიმალისტური და სუფთა */}
                <div className={`
                    absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.15)] py-2 text-gray-800
                    transition-all duration-300 border border-gray-100 z-50
                    ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2 '}
                `}>
                    <Link
                        to="/about"
                        className="block px-6 py-2.5 hover:bg-gray-50 hover:text-blue-600 transition-colors text-[14px] font-medium "
                    >
                        About Us
                    </Link>

                    <HashLink
                        to="/contact#"
                        className="block px-6 py-2.5 hover:bg-gray-50 hover:text-blue-600 transition-colors text-[14px] font-medium"
                    >
                        Contact
                    </HashLink>

                    {/* ნაზი გამყოფი ხაზი */}
                    <div className="mx-6 my-1 border-t border-gray-100"></div>

                    <HashLink
                        to="/#reviews"
                        className="block px-6 py-2.5 hover:bg-gray-50 hover:text-blue-600 transition-colors text-[14px] font-medium"
                    >
                        Reviews
                    </HashLink>

                    <HashLink
                        to="/#faq-section"
                        className="block px-6 py-2.5 hover:bg-gray-50 hover:text-blue-600 transition-colors text-[14px] font-medium"
                    >
                        FAQ
                    </HashLink>

                </div>
            </div>

        </nav>
    )
}

export default Nav