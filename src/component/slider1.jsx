// CardSlider.js
import React, {useState} from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
// import img from '../../public/assets/image_d86df926.png'
import {Button} from "@mui/base";
const items = [
    {label: 'Computer & Laptop ', image: "../assets/image_47fb4dc9.png" },
    {label: 'SmartPhone', image: '../assets/image_d86df926.png'},
    {label: 'Headphones', image: '../assets/image_b6ea7f35.png'},
    {label: 'Accessories', image: '../assets/image_af2ab8bb.png'},
    {label: 'Camera & Photo', image: '../assets/image_869344bb.png'},
    {label: 'TV & Homes', image: '../assets/image_47fb4dc9.png'},
 {label: 'Computer & Laptop ', image: '../assets/image_d86df926.png'},
    {label: 'SmartPhone', image: '../assets/image_80b676af.png'},
    {label: 'Headphones', image: '../assets/image_b6ea7f35.png'},
    {label: 'Accessories', image: '../assets/image_af2ab8bb.png'},
    {label: 'Camera & Photo', image: '../assets/image_869344bb.png'},
    {label: 'TV & Homes', image: '../assets/image_47fb4dc9.png'},


];

const MainSlider = () => {
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

    return (
        <Button className='relative w-full max-md:w-[300px] overflow-hidden'>
            <div className="flex justify-start pl-20 items-center gap-2">
                <button
                    onClick={handlePrev}
                    className="absolute left-0 z-10 p-2 text-white bg-orange-500 rounded-full hover:bg-orange-600"
                >
                    <FaArrowLeft/>
                </button>

                <div
                    className="flex transition-transform gap-1  xl:hidden md:hidden   max-md:w-[100px] w-[205px] h-[263px]  duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 130}%)`,
                        width: `${items.length * 14}px`
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex flex-col items-center p-6 border w-[205px] h-[263px]  justify-center rounded-lg bg-white"
                        >
                            <img
                                src={item.image}
                                alt={item.label}
                                className="h-[148px] w-[148px]  object-contain"
                            />
                            <p className=" pt-7 flex justify-end text-sm font-semibold">{item.label}</p>
                        </div>
                    ))}
                </div>
                <div
                    className="flex transition-transform gap-0.5 max-sm:hidden     duration-500 "
                    style={{
                        transform: `translateX(-${currentIndex * 120}%)`,
                        width: `${items.length * 12}px`,
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex flex-col  items-center p-6 border w-[205px] h-[263px]  justify-center rounded-lg bg-white"
                        >
                            <img
                                src={item.image}
                                alt={item.label}
                                className="h-[130px] w-[130px]  object-contain"
                            />
                            <p className=" pt-7 flex justify-end text-sm font-semibold">{item.label}</p>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="absolute right-0 z-10 p-2 text-white bg-orange-500 rounded-full hover:bg-orange-600"
                >
                    <FaArrowRight/>
                </button>
            </div>
        </Button>
    );
};

export default MainSlider;
