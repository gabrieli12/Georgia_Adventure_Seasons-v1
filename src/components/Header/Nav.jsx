import React from 'react'

function Nav() {
    return (
        <nav className="w-[30%] flex justify-between items-center text-[#707070] max-xl:w-[35%] max-lg:hidden">
            <a className="hover:underline " href="#">
                Home
            </a>
            <a className="hover:underline " href="#">
                Tours
            </a>
            <a className="hover:underline " href="#">
                Activities
            </a>
            <a className="hover:underline " href="#">
                Gallery
            </a>
            <a className="hover:underline " href="#">
                About
            </a>
            <a className="hover:underline " href="#">
                Contact
            </a>
        </nav>
    )
}

export default Nav