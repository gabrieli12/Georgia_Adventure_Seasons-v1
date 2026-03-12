import { useState, useCallback, memo } from "react";

// dropDownMenu
import DropDownMenu from './DropDownMenu';

function BurgerMenu() {

    const [isOpen, setIsOpen] = useState(false); //burger menu <show />

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);


    return (
        <div className="relative lg:hidden">
            <div
                className="cursor-pointer z-50"
                onClick={toggleMenu}
            >
                <img className="w-8 bg-white rounded-full p-1" src="icons/burger.png" alt="menu" />
            </div>

            {/* Dropdown Menu */}
            <DropDownMenu setIsOpen={setIsOpen} isOpen={isOpen} />

        </div>
    )
}

export default memo(BurgerMenu);