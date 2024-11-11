import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {Button} from "@mui/base";
const items = [
    { tit1: 'Fasted Delivery',tit2: 'Delivery in 24/H', image: 'assets/image_bb3e7111.png' },
    { tit1: '24 Hours Return',tit2: '100% money-back guarantee', image: '../../public/assets/image_d97cad21.png' },
    { tit1: 'Secure Payment',tit2: 'Your money is safe', image: '../../public/assets/image_a9d9064c.png' },
    { tit1: 'Support 24/7',tit2: 'Live contact/message', image: 'src/img/Vector.svg' },
    { tit1: 'Fasted Delivery',tit2: 'Delivery in 24/H', image: 'assets/image_bb3e7111.png' },
    { tit1: '24 Hours Return',tit2: '100% money-back guarantee', image: '../../public/assets/image_d97cad21.png' },
    { tit1: 'Secure Payment',tit2: 'Your money is safe', image: '../../public/assets/image_a9d9064c.png' },
    { tit1: 'Support 24/7',tit2: 'Live contact/message', image: 'src/img/Vector.svg' },
];

const Slider1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (<div className='flex items-center justify-center'>

        <Button className='relative  w-full max-sm:w-[300px] pt-7 overflow-hidden'>
            <div className="flex justify-start pl-28  items-center gap-2">
                <button
                    onClick={handlePrev}
                    className="absolute left-0  mx-11 z-10 p-2 text-white bg-orange-500 rounded-full hover:bg-orange-600"
                >
                    <FaArrowLeft />
                </button>

                <div
                    className="flex transition-transform gap-4  duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 120}%)`,
                        width: `${items.length * 15 }px`, // Dynamic width based on item width
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex  items-center justify-center w-[280px] h-[76px]   border rounded-lg bg-white"
                        >
                            <img src={item.image}
                                 className=" h-[35px] w-[30px]  "/>
                            <div
                                className="flex justify-center  mx-3 items-stretch flex-col grow-0 shrink-0 basis-auto w-[192px] h-[45px]">
                                <p className="[font-family:'Public_Sans',sans-serif] text-sm font-medium uppercase text-[#191c1f] ">{item.tit1}</p>
                                <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-[#5f6c72]">{item.tit2}</p>

                            </div>

                        </div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="absolute right-0 mx- z-10 p-2 text-white bg-orange-500 rounded-full hover:bg-orange-600"
                >
                    <FaArrowRight/>
                </button>
            </div>
        </Button>
    </div>
    );
};

export default Slider1;
