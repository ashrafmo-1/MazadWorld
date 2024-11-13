import React, { useState } from 'react';

import car from "../img/ShoppingCartSimple.png";
import CardCar from "./cardcarflot";
import im1 from '../assets/image_c013e549.png'
import Aro from '../img/ArrowRight.svg';

const Cartflot = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
            >
                <img src={car} className='w-[32px]  h-[32px]'/>
            </button>
            {isMenuOpen && (
                <div
                    className="absolute flex flex-col  rounded-xl   right-1 top-[45px] bg-white shadow-lg py-3 text-sm min-h-[464px] w-[424px] ">
                    <div className='px-6    '>
                        <h1 className='text-xl    items-start pt-3 font-semibold'>
                            Shopping Cart (X)
                        </h1>
                    </div>


                    <div className=''>
                      <CardCar img={im1} tite='Canon EOS 1500D DSLR Camera Body+ 18-55 mm'
                      price={1500}/>
                        <CardCar img={im1} tite='Canon EOS 1500D DSLR Camera Body+ 18-55 mm'
                                 price={1500}/>
                    </div>
                    <hr className='border-[#E4E7E9] mt-4 '/>
<div className=' flex justify-between px-6 py-4'>
    <div className='text-[#475156] text-sm font-normal'>Sub-Total:</div>
    <div className='text-[#191C1F] font-medium text-sm'>$ X USD</div>
</div>
                    <div className='flex flex-col justify-center items-center font-bold gap-4 text-sm capitalize'>
                        <button className=' bg-[#FA8232] h-[48px] w-[328px] flex justify-center items-center text-white gap-2 capitalize '>Checkout now <img src={Aro}/></button>
                        <button className='h-[48px] w-[328px] text-[#FA8232] border border-[#FFE7D6]'> View Cart</button>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Cartflot;
