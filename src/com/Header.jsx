import MegaMenu from "./megamen.jsx";
import {useState} from "react";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='font-sans'>
                <div
                    className='bg-[#1B6392] px-3 py-2.5 border-b border-b-[#427ea6] flex items-center justify-between text-center text-white text-xs max-sm:gap-y-1 max-sm:flex-col max-sm:justify-center lg: '>
                    <div className='flex items-center mx-auto  max-sm:justify-center'>
                        <div className='flex  justify-center items-center  h-[20px] w-[258px]'><span>Welcome to Clicon online eCommerce store. </span>
                        </div>
                    </div>
                    <div
                        className='flex mx-auto max-h-[28px] max-w-[396px] gap-6 items-center max-sm:justify-center max-sm:px-2 '>
                        <div className='flex gap-4'>
                            Follow us :
                            <ol className='flex gap-2 max-sm:justify-center items-center'>
                                <li><a href='https://x.com/' target='_blank'>
                                    <FaXTwitter/>
                                </a></li>
                                <li><a href='https://www.facebook.com/' target='_blank'><FaFacebook/>
                                </a></li>
                                <li><a href='https://www.youtube.com/' target='_blank'><FaYoutube />
                                </a>
                                </li>
                                <li><a href='https://www.instagram.com/' target='_blank'><FaInstagram/>
                                </a></li>
                            </ol>
                        </div>
                        <div>
                            Eng
                        </div>
                        <div>
                            USD
                        </div>
                    </div>
                </div>
                <div className='bg-[#1B6392] h-[88px] flex justify-center items-center'>
                    <div className='mr-4 flex gap-24 max-lg:gap-0 max-lg:px-8 max-xl:px-8 '>
                        <img src='/src/img/Logo.png'
                             className='w-[177px] h-[48px] max-sm:w-16 max-sm:h-10 max-sm:ml-2.5 max-lg:w-[140px] max-xl:w-[200px] ' alt='logo'/>

                        <div className='w-[546px] h-[48px] flex items-center justify-center max-sm:hidden'>

                            <input className='w-[546px] h-[48px] px-4 absolute max-lg:w-[250px]  '
                                   type='search'/>
                        </div>
                        <div
                            className='flex justify-center items-center max-sm:mx-auto gap-2.5'>
                            <button><img src='/src/img/ShoppingCartSimple.png' className='w-[32px]  h-[32px]'/></button>
                            <button>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2511_3961)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M8 0C12.4183 0 16 3.58173 16 8C16 12.4183 12.4183 16 8 16C3.58173 16 0 12.4183 0 8C0 3.58173 3.58173 0 8 0Z"
                                              fill="white"/>
                                        <path
                                            d="M9.04144 15.9328V9.75225H10.7849L11.016 7.57697H9.04144L9.04437 6.48815C9.04437 5.92079 9.0983 5.61693 9.91372 5.61693H11.0038V3.44128H9.25992C7.16524 3.44128 6.42808 4.49647 6.42808 6.27123V7.57714H5.12231V9.75261H6.42808V15.8452C6.93677 15.9465 7.46267 16 8.00114 16C8.34899 16 8.69648 15.9776 9.04144 15.9328Z"
                                            fill="#1B6392"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2511_3961">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button><img src='/src/img/User.png' className='w-[32px] h-[32px]'/></button>
                            {isOpen && (
                                <div
                                    className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity"
                                    onClick={toggleDrawer}
                                />
                            )}
                            <button className='sm:hidden' onClick={toggleDrawer}>
                                <svg width="32px" height="32px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" stroke="#ffffff">

                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                                    <g id="SVGRepo_iconCarrier">
                                        <path fill="#ffffff" fill-rule="evenodd"
                                              d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"/>
                                    </g>

                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className='max-sm:hidden h-[80px]  flex  pl-[220px] max-lg:justify-center  max-lg:my-2.5 max-lg:flex-col    pr-[280px] items-center  max-xl:px-7  max-xl:justify-center  justify-between  '>

                    <div className='w-[695px] h-[48px]  max-lg:justify-center max-lg:ml-16 max-lg:flex   '>

                        <div className='flex   items-center gap-2  '>
                            <MegaMenu/>
                            <div className='flex gap-2  '>
                                <button className=' flex  h-[24px] text-sm w-[107px] items-center justify-center gap-1'>
                                    <img
                                        className='flex w-[24px] h-[24px]' src='/src/img/MapPinLine.svg'/> track order
                                </button>
                                <button className=' flex  h-[24px] text-sm w-[89px] items-center justify-center gap-1'>
                                    <img
                                        className='flex w-[24px] h-[24px]'
                                        src='/src/img/ArrowsCounterClockwise.svg'/> Compare
                                </button>
                                <button
                                    className=' flex  h-[24px] text-sm w-[150px] items-center justify-center  gap-1'>
                                    <img
                                        className='flex w-[18px] h-[15px]' src='/src/img/Vector.svg'/> Customer Support
                                </button>
                                <button
                                    className=' flex  h-[24px] text-sm  w-[150px] items-center justify-center  gap-1'>
                                    <img
                                        className='flex w-[24px] h-[24px]' src='/src/img/Info.svg'/> Need Help
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex   items-center max-lg:hidden '>
                        <img className='w-[24px] h-[24px]' src='/src/img/PhoneCall.svg'/> +1-202-555-0104
                    </div>

                </div>
            </div>
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#1B6392] text-white transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out`}
            >
                <div className="p-4 text-lg font-bold">All Category</div>
                <nav className="p-4">
                    <div className='flex flex-col items-start gap-10'>
                        <MegaMenu/>
                        <button className=' flex  h-[24px] text-sm w-[107px] items-center justify-center gap-1'>
                            <img
                                className='flex w-[24px] h-[24px]' src='/src/img/MapPinLine.svg'/> track order
                        </button>
                        <button className=' flex  h-[24px] text-sm w-[89px] items-center justify-center gap-1'>
                            <img
                                className='flex w-[24px] h-[24px]' src='/src/img/MapPinLine.svg'/> Compare
                        </button>
                        <button
                            className=' flex  h-[24px] text-sm w-[150px] items-center justify-center  gap-1'>

                            <img

                                className='flex w-[18px] h-[15px]' src='/src/img/Vector.svg'/> Customer Support
                        </button>
                        <button
                            className=' flex  text-sm  items-center justify-center  gap-1'>
                            <img
                                className='flex w-[24px] h-[24px]' src='/src/img/Info.svg'/> Need Help
                        </button>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Header
