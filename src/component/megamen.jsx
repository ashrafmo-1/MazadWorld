import React, { useState, useRef, useEffect } from "react";
import main from "../img/CaretDown.svg";

const MegaMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative z-10" ref={menuRef}>
            <button
                onClick={toggleMenu}
                className="flex bg-[#F2F4F5] items-center justify-center font-medium text-xm h-[48px] w-[154px] hover:bg-[#FA8232] max-sm:hover:bg-[#1B6392] max-sm:bg-[#1B6392]"
            >
                All Category
                <img
                    className="flex w-[24px] h-[24px] max-sm:w-[24px] max-sm:h-[18px] pl-1"
                    src={main}
                    alt="Caret Down"
                />
            </button>
            {isMenuOpen && (
                <div className="absolute left-0 top-full bg-white shadow-lg p-3 text-sm h-[420px] w-[240px] max-sm:bg-[#2281bf] max-sm:w-[200px] max-sm:pt-2">
                    <ul>
                        <button className="p-2">Computer & Laptop</button>
                        <li className="p-2">Computer Accessories</li>
                        <li className="p-2">SmartPhone</li>
                        <li className="p-2">Headphone</li>
                        <li className="p-2">Mobile Accessories</li>
                        <li className="p-2">Gaming Console</li>
                        <li className="p-2">Camera & Photo</li>
                        <li className="p-2">TV & Home Appliances</li>
                        <li className="p-2">Watches & Accessories</li>
                        <li className="p-2">GPS & Navigation</li>
                        <li className="p-2">Wearable Technology</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MegaMenu;
