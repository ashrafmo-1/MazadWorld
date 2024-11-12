

import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


function MainSlider() {
    return (<Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={true}
            breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6},

            }}

            pagination={true}
        >
            <SwiperSlide>
                <div className='flex mb-11 border  w-[205px] h-[236px]  items-center justify-center flex-col '>
                    <img
                        src="../assets/image_d86df926.png"
                        alt='Computer & Laptop'
                        className="h-[130px] w-[130px]  object-contain"/>
                    <p className=" py-2 flex justify-end text-sm font-semibold">Computer & Laptop</p>
                </div>
            </SwiperSlide>

        <SwiperSlide>
            <div className='flex mb-11 border  w-[205px] h-[236px] items-center justify-center flex-col '>
                <img
                    src="../assets/image_80b676af.png"
                    alt='SmartPhone'
                    className="h-[130px] w-[130px]  object-contain"/>
                <p className=" py-6 flex justify-end text-sm font-semibold">SmartPhone</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex  mb-11 border  w-[205px] h-[236px] items-center justify-center flex-col '>
                <img
                    src="../assets/image_b6ea7f35.png"
                    alt='SmartPhone'
                    className="h-[130px]   w-[130px]  object-contain"/>
                <p className=" py-6 flex justify-end text-sm font-semibold">Headphones</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex mb-11 border  w-[205px] h-[236px] items-center justify-center flex-col '>
                <img
                    src="../assets/image_af2ab8bb.png"
                    alt='SmartPhone'
                    className="h-[130px] w-[130px]  object-contain"/>
                <p className=" py-6 flex justify-end text-sm font-semibold">Accessories</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex mb-11 border   w-[205px] h-[236px] items-center justify-center flex-col '>
                <img
                    src="../assets/image_869344bb.png"
                    alt='SmartPhone'
                    className="h-[130px] w-[130px]  object-contain"/>
                <p className=" py-6 flex justify-end text-sm font-semibold">Camera & Photo</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex  mb-11  border w-[205px] h-[236px] items-center justify-center flex-col '>
                <img
                    src="../assets/image_47fb4dc9.png"
                    alt='SmartPhone'
                    className="h-[130px] w-[130px]  object-contain"/>
                <p className=" py-6 flex justify-end text-sm font-semibold">TV & Homes</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='flex mb-11 border  w-[205px] h-[236px]  items-center justify-center flex-col '>
                <img
                    src="../assets/image_d86df926.png"
                    alt='Computer & Laptop'
                    className="h-[130px] w-[130px]  object-contain"/>
                <p className=" py-2 flex justify-end text-sm font-semibold">Computer & Laptop</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='flex mb-11 border  w-[205px] h-[236px] items-center justify-center flex-col '>
                <img
                    src="../assets/image_80b676af.png"
                    alt='SmartPhone'
                    className="h-[130px] w-[130px]  object-contain"/>
                <p className=" py-6 flex justify-end text-sm font-semibold">SmartPhone</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex  mb-11 border  w-[205px] h-[236px] items-center justify-center flex-col '>
                <img
                    src="../assets/image_b6ea7f35.png"
                    alt='SmartPhone'
                    className="h-[130px]   w-[130px]  object-contain"/>
                <p className=" py-6 flex justify-end text-sm font-semibold">Headphones</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex mb-11 border  w-[205px] h-[236px] items-center justify-center flex-col '>
                <img
                    src="../assets/image_af2ab8bb.png"
                    alt='SmartPhone'
                    className="h-[130px] w-[130px]  object-contain"/>
                <p className=" py-6 flex justify-end text-sm font-semibold">Accessories</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex mb-11 border   w-[205px] h-[236px] items-center justify-center flex-col '>
                <img
                    src="../assets/image_869344bb.png"
                    alt='SmartPhone'
                    className="h-[130px] w-[130px]  object-contain"/>
                <p className=" py-6 flex justify-end text-sm font-semibold">Camera & Photo</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex  mb-11 border w-[205px] h-[236px] items-center justify-center flex-col '>
                <img
                    src="../assets/image_47fb4dc9.png"
                    alt='SmartPhone'
                    className="h-[130px] w-[130px]  object-contain"/>
                <p className=" py-6 flex justify-end text-sm font-semibold">TV & Homes</p>
            </div>
        </SwiperSlide>

        </Swiper>);
};
export default MainSlider;