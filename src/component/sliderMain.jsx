import React, {useState} from 'react';
import {Button} from "@mui/base";
import SvgIcon1 from "./StylishConsolePromo/icons/SvgIcon1.jsx";

const cards = [
    {
        title: 'Xbox Consoles',
        image: '/assets/image_5ef9f7f2.png',
        price: '$299',
        description: 'Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.',
        buttonText: 'SHOP NOW 1',
    },
    {
        title: 'PlayStation ',
        image: '/assets/image_5ef9f7f2.png',
        price: '$399',
        description: 'Experience the best games with PlayStation. Exclusive offers on games and accessories.',
        buttonText: 'SHOP NOW 2',
    },
    {
        title: 'Nintendo ',
        image: '/assets/image_5ef9f7f2.png',
        price: '$249',
        description: 'Discover amazing deals on Nintendo consoles and games. Limited time offer!',
        buttonText: 'SHOP NOW',
    },
];

const CardSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <div
            className="bg-[#f2f4f5] grid grid-cols-2   max-sm:grid-cols-1 max-sm:w-[300px]     items-end     rounded-md  ]  [font-family:'Public_Sans',sans-serif] ">
            <div className="flex justify-center items-start   xl:hidden lg:hidden   shrink-0 basis-auto ml-[35px]  max-sm:flex ">
                <img src={cards[currentIndex].image}

                     className="h-[408px]  object-contain box-border block border-[none]"/>
                <div className="ml-[-103px] grow-0 shrink-0 basis-auto pb-[304px]">
                    <div
                        className=" items-center  justify-center flex bg-[#2da5f3]  text-[22px] font-semibold text-[white] min-w-[109px] h-[108px] w-[109px] cursor-pointer       box-border rounded-[100px] border-4 border-solid border-[white]">
                        {cards[currentIndex].price}
                    </div>
                </div>
            </div>

            <div className=' '>
                <div className="     items-center justify-center    pt-[88px]">
                    <div className='flex'>
                        <div className=" box-border px-3">
                            <div className="flex justify-start items-center flex-row ">
                                <div
                                    className="w-[18px] box-border border-t-2 border-t-[#2da5f3] border-solid"/>
                                <p className=" text-sm font-semibold text-[#2484c2] grow-0 shrink-0 basis-auto ml-1.5 m-0 p-0">THE
                                    BEST PLACE TO PLAY</p>
                            </div>
                            <p className=" text-5xl font-semibold leading-[56px] text-[#191c1f] mt-1 m-0 ">{cards[currentIndex].title}</p>
                            <p className=" text-lg font-normal text-left leading-6 text-[#475156] w-[100.00%] box-border mt-4   ">
                                {cards[currentIndex].description}
                            </p>
                            {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
                            <Button
                                className="bg-[#fa8232]  text-base font-bold tracking-[0.19px] uppercase text-[white] min-w-[191px] h-14 w-[191px] cursor-pointer inline-flex items-center justify-center gap-3.5 box-border mt-6 rounded-[3px] border-[none]">
                                {cards[currentIndex].buttonText}
                                <SvgIcon1/>
                            </Button>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className="flex justify-center mt-4 space-x-2">
                            {cards.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full ${
                                        currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-start flex-row grow-0  max-lg:hidden shrink-0 basis-auto ml-[35px]">
                <img src={cards[currentIndex].image}

                     className="h-[408px] max-w-[initial] object-contain w-[368px] box-border block border-[none]"/>
                <div className="ml-[-103px] grow-0 shrink-0 basis-auto pb-[304px]">
                    <div
                        className=" items-center  justify-center flex bg-[#2da5f3]  text-[22px] font-semibold text-[white] min-w-[109px] h-[108px] w-[109px] cursor-pointer       box-border rounded-[100px] border-4 border-solid border-[white]">
                        {cards[currentIndex].price}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardSlider;


