import { Button } from "@mui/base";
import SvgIcon1 from "./StylishConsolePromo/icons/SvgIcon1";
import React from "react";
import img from "../assets/image_5ef9f7f2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module

// Import Swiper styles (required)
import "swiper/css";
import "swiper/css/pagination";

export default function Newswiper() {
    return (
        <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]} // Include Autoplay in modules
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
                <div className="grid grid-cols-2 px-4 py-5 max-sm:grid-cols-1  items-end rounded-md [font-family:'Public_Sans',sans-serif]">
                    <div>
                        <div className="items-center justify-center pt-[88px] ">
                            <div className="flex">
                                <div className="box-border px-3 ">
                                    <div className="flex justify-start items-center flex-row">
                                        <div className="w-[18px] box-border border-t-2 border-t-[#2da5f3] border-solid" />
                                        <p className="text-sm font-semibold text-[#2484c2] ml-1.5">
                                            THE BEST PLACE TO PLAY
                                        </p>
                                    </div>
                                    <p className="text-5xl font-semibold leading-[56px] text-[#191c1f] mt-1">
                                        Xbox Consoles
                                    </p>
                                    <p className="text-lg text-left leading-6 text-[#475156] mt-4">
                                        Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
                                    </p>
                                    <Button className="bg-[#fa8232] text-base font-bold uppercase text-white min-w-[191px] h-14 w-[191px] cursor-pointer inline-flex items-center justify-center gap-3.5 box-border mt-6 rounded-[3px]">
                                        SHOP NOW 1
                                        <SvgIcon1 />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-start flex-row max-lg:hidden ml-[35px]">
                        <img src={img} className="h-[408px] object-contain w-[368px]" />
                        <div className="ml-[-103px] pb-[304px]">
                            <div
                                className="flex bg-[#2da5f3] text-[22px] font-semibold text-white min-w-[109px] h-[108px] w-[109px] cursor-pointer rounded-[100px] border-4 border-white flex items-center justify-center">
                                300 $
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="grid grid-cols-2 px-4 py-5 max-sm:grid-cols-1 items-end rounded-md [font-family:'Public_Sans',sans-serif]">
                    <div>
                        <div className="items-center justify-center pt-[88px]">
                            <div className="flex">
                                <div className="box-border px-3">
                                    <div className="flex justify-start items-center flex-row">
                                        <div className="w-[18px] box-border border-t-2 border-t-[#2da5f3] border-solid" />
                                        <p className="text-sm font-semibold text-[#2484c2] ml-1.5">
                                            THE BEST PLACE TO PLAY
                                        </p>
                                    </div>
                                    <p className="text-5xl font-semibold leading-[56px] text-[#191c1f] mt-1">
                                        Xbox Consoles
                                    </p>
                                    <p className="text-lg text-left leading-6 text-[#475156] mt-4">
                                        Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
                                    </p>
                                    <Button className="bg-[#fa8232] text-base font-bold uppercase text-white min-w-[191px] h-14 w-[191px] cursor-pointer inline-flex items-center justify-center gap-3.5 box-border mt-6 rounded-[3px]">
                                        SHOP NOW 1
                                        <SvgIcon1 />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-start flex-row max-lg:hidden ml-[35px]">
                        <img src={img} className="h-[408px] object-contain w-[368px]" />
                        <div className="ml-[-103px] pb-[304px]">
                            <div className="flex bg-[#2da5f3] text-[22px] font-semibold text-white min-w-[109px] h-[108px] w-[109px] cursor-pointer rounded-[100px] border-4 border-white flex items-center justify-center">
                                300 $
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
