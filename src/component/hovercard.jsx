import React from 'react';
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';

const ProductCardHover = ({img,tit,pri}) => {
    return (
        <div className="max-w-xs p-4  border   w-[248px] h-[300px] max-md:w-[130px] max-md:p-0  ">
            <div className="flex justify-center relative" >
                <img
                    src={img} // Replace with your image URL
                    alt="Product"
                    className="  h-[180px] "
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-lg">
                    <button className="p-2 bg-orange-500 rounded-full text-white hover:bg-orange-600">
                        <FaHeart />
                    </button>
                    <button className="p-2 bg-white rounded-full text-black hover:bg-gray-200">
                        <FaShoppingCart />
                    </button>
                    <button className="p-2 bg-white rounded-full text-black hover:bg-gray-200">
                        <FaEye />
                    </button>
                </div>
            </div>
            <div className="   text-start  h-[68px] pt-4  ">
                <p className=" text-[#191c1f]  max-md:text-sm">{tit}</p>
                <p className="  font-semibold text-[#2da5f3]  ">${pri}</p>
            </div>
        </div>
    );
};

export default ProductCardHover;
