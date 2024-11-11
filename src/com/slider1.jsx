// CardSlider.js
import React, {useState} from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import {Button} from "@mui/base";

const items = [
    {label: 'Computer & Laptop ', image: '../../public/assets/image_d86df926.png'},
    {label: 'SmartPhone', image: '../../public/assets/image_80b676af.png'},
    {label: 'Headphones', image: '../../public/assets/image_b6ea7f35.png'},
    {label: 'Accessories', image: '../../public/assets/image_af2ab8bb.png'},
    {label: 'Camera & Photo', image: '../../public/assets/image_869344bb.png'},
    {label: 'TV & Homes', image: '../../public/assets/image_47fb4dc9.png'},
 {label: 'Computer & Laptop ', image: '../../public/assets/image_d86df926.png'},
    {label: 'SmartPhone', image: '../../public/assets/image_80b676af.png'},
    {label: 'Headphones', image: '../../public/assets/image_b6ea7f35.png'},
    {label: 'Accessories', image: '../../public/assets/image_af2ab8bb.png'},
    {label: 'Camera & Photo', image: '../../public/assets/image_869344bb.png'},
    {label: 'TV & Homes', image: '../../public/assets/image_47fb4dc9.png'},


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
            <div className="flex justify-start pl-28 items-center gap-2">
                <button
                    onClick={handlePrev}
                    className="absolute left-0 z-10 p-2 text-white bg-orange-500 rounded-full hover:bg-orange-600"
                >
                    <FaArrowLeft/>
                </button>

                <div
                    className="flex transition-transform gap-4  max-md:w-[100px] w-[205px] h-[263px]  duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 130}%)`,
                        width: `${items.length * 15}px`
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
