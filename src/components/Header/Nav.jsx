import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="flex gap-7 justify-between items-center text-white  max-lg:hidden font-poppins  max-2xl:gap-3 ">
            <a className="hover:underline " href="/">
                Home
            </a>
            <a className="hover:underline " href="#activities">
                Tours & Activities
            </a>
            <a className="hover:underline " href="#accommodation">
                Accommodation
            </a>

            <a className="hover:underline " href="#transportation">
                Transportation
            </a>
            <Link to={'/contact'}><a className="hover:underline max-xl:hidden " href="#">
                Contact
            </a></Link>
            
        </nav>
    )
}

export default Nav