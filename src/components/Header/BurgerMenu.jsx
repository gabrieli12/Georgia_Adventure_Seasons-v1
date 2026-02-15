import { useState } from 'react';

// dropDownMenu
import DropDownMenu from './DropDownMenu';

function BurgerMenu() {

    const [isOpen, setIsOpen] = useState(false); //burger menu <show />


    return (
        <div className="relative lg:hidden">
            <div
                className="cursor-pointer z-50"
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
            >
                <img className="w-8 bg-white rounded-full p-1" src="src/assets/burger.png" alt="menu" />
            </div>

            {/* Dropdown Menu */}
            <DropDownMenu setIsOpen={setIsOpen} isOpen={isOpen}  />
            
        </div>
    )
}

export default BurgerMenu