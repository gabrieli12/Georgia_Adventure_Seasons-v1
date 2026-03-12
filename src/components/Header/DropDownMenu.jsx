import React, { memo, useCallback } from "react";
import { HashLink } from "react-router-hash-link";

function DropDownMenu({ isOpen, setIsOpen }) {
  const closeMenu = useCallback(() => setIsOpen(false), [setIsOpen]);

  if (!isOpen) return null; // avoid rendering DOM

  return (
    <div className="absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-4 px-6 flex flex-col gap-6 text-[#707070] border border-gray-200 z-40 transition-transform duration-300 transform translate-y-0 opacity-100">
      <HashLink to="/#" className="hover:text-[#106f3cb3] hover:underline" onClick={closeMenu}>
        Home
      </HashLink>

      <HashLink to="/#activities" className="hover:text-[#106f3cb3] hover:underline" onClick={closeMenu}>
        Tours & Activities
      </HashLink>

      <HashLink to="/accommodation#" className="hover:text-[#106f3cb3] hover:underline" onClick={closeMenu}>
        Accommodation
      </HashLink>

      <HashLink to="/transport#" className="hover:text-[#106f3cb3] hover:underline" onClick={closeMenu}>
        Transportation
      </HashLink>

      <HashLink to="/aboutUs#" className="hover:text-[#106f3cb3] hover:underline" onClick={closeMenu}>
        About
      </HashLink>

      {/* Mobile Number */}
      <a href="https://wa.me/995595706585?text=Hello" className="flex items-center gap-2 hover:text-[#106f3cb3]">
        <img src="src/assets/number 3.png" alt="icon" className="w-6" />
        <p>+995 592 43 66 51</p>
      </a>

      {/* Book Now */}
      <button className="bg-[#FF6900] px-6 py-3 rounded-lg text-white font-semibold hover:bg-[#ff8a05dd] hover:text-black cursor-pointer duration-300">
        Book Now
      </button>
    </div>
  );
}

export default memo(DropDownMenu);