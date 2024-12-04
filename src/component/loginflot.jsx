import React, { useState, useRef, useEffect } from "react";
import Aro from "../img/ArrowRight.svg";
import usre from "../img/User.png";
import {Link} from "react-router-dom";

const LoginFlot = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    // Handle clicks outside the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        // Add event listener for clicks
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Cleanup event listener on unmount
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <button onClick={toggleMenu}>
                <img src={usre} className="w-[32px] h-[32px]" alt="User Icon" />
            </button>
            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="absolute flex flex-col items-center rounded-xl right-1 z-10 top-[45px] bg-white shadow-lg p-3 text-sm h-[444px] w-[424px]"
                >
                    <div>
                        <h1 className="text-xl pt-5 font-semibold">Sign in to your account</h1>
                    </div>

                    <div className="w-[360px] h-[16px] text-sm font-normal">
                        <div className="h-[72px]">
                            <h1 className="py-2">Email Address</h1>
                            <input type="email" className="border px-3 w-[360px] h-[44px]" />
                        </div>
                        <div className="h-[72px] pt-5">
                            <div className="flex justify-between pb-3">
                                <h1>Password</h1>
                                <Link to='/login/forgetPassword' onClick={toggleMenu} className="text-[#2DA5F3] font-medium text-sm">
                                    Forget Password
                                </Link>
                            </div>
                            <input type="password" className="border px-3 w-[360px] h-[44px]" />
                        </div>
                        <div className="bg-white h-[48px] mt-11 w-[360px]">
                            <button className="bg-[#FA8232] h-[48px] w-[360px] flex justify-center items-center gap-2 text-sm font-semibold text-white text-center">
                                LOGIN <img src={Aro} alt="Arrow Icon" />
                            </button>
                        </div>
                        <div className="flex justify-center mt-3">Don’t have account</div>
                        <Link to='/SignUp'>
                            <button onClick={toggleMenu}
                                className="bg-white mt-3 h-[48px] w-[360px] flex justify-center items-center gap-2 text-sm font-semibold text-[#FA8232] border-[#FFE7D6] border shadow-[#FFE7D6] mx-5">
                                CREATE ACCOUNT <img src={Aro} alt="Arrow Icon"/>
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginFlot;
