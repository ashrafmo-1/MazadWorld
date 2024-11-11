import {Button} from "@mui/base";
import ProductDisplayLayout from "./ProductDisplayLayout.jsx";
import ShopCategoryDisplay from "./ShopCategoryDisplay/index.jsx";
import ProductDisplayContainer from "./ProductDisplayContainer/index.jsx";

import ProductPromoSection from "./ProductPromoSection/index.jsx";
import ProductDisplayWidget1 from "./ProductDisplayWidget1/index.jsx";

import ProductCardView1 from "./ProductCardView1/index.jsx";

import SvgIcon1 from "./icons/SvgIcon1.jsx";
import SvgIcon3 from "./icons/SvgIcon3.jsx";
import TimeDisplayWidget from "./TimeDisplayWidget/index.jsx";
import ProductCardWidget5 from "./ProductCardWidget5/index.jsx";
import ProductDisplayWidget4 from "./ProductDisplayWidget4/index.jsx";

function Main() {
    return (<>
        <ProductDisplayLayout/>
        <div className='flex justify-center items-center '>
            <div className=" ">
                <div className="flex justify-between items-center flex-row gap-2  box-border pr-[3px]">
                    <div className="flex  justify-start items-center flex-row grow-0 shrink-0 basis-auto">
                        <p className="xt-2xl font-semibold text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">Best
                            Deals</p>
                        <p className=" max-sm:hidden  text-sm font-normal text-[black] grow-0 shrink-0 basis-auto ml-[22px] m-0 p-0">Deals
                            ends in</p>
                        <TimeDisplayWidget/>
                    </div>
                    <button className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto">
                        <p className=" text-sm font-semibold text-[#2da5f3] grow-0 shrink-0 basis-auto m-0 p-0">Browse
                            All Product</p>
                        <SvgIcon1 className="w-4 h-4 flex grow-0 shrink-0 basis-auto ml-[9px]"/>
                    </button>
                </div>
                <div className="flex justify-start gap-2 items-center flex-row  mt-[23.5px]">
                    <ProductCardWidget5/>
                    <div>
                        <ProductDisplayWidget4/>
                    </div>
                </div>
            </div>

        </div>
        <div className="flex justify-center  items-stretch flex-col gap-[72px]  box-border pt-6 pb-[72px]">

            <ShopCategoryDisplay/>
        </div>
        <div className=" flex justify-center  items-center flex-col ">

            <div className="flex justify-center  items-stretch flex-col gap-[72px]   pt-6 pb-[72px]">

                <div
                    className="flex justify-start items-start flex-row  self-center gap-4 shrink-0 basis-auto box-border">
                    <ProductDisplayContainer/>
                    <div>

                        <div className="grow shrink-0 basis-auto ml-[23px]">

                            <div
                                className="flex justify-between items-center flex-row gap-2 w-[100.00%] box-border">
                                <p className=" text-2xl max-md:text-sm font-semibold text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">Featured
                                    Products</p>
                                <div
                                    className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto">
                                    <div
                                        className=" flex justify-start items-center flex-row gap-3.5 grow-0 shrink-0 basis-auto">

                                        <button
                                            className=" max-md:hidden text-sm font-normal  ml-[-7px] hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500 hover:font-medium  ">
                                            All Product

                                        </button>

                                        <button
                                            className=" max-md:hidden text-sm font-normal  ml-[-7px] hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500 hover:font-medium ">Smart
                                            Phone
                                        </button>
                                        <button
                                            className=" max-md:hidden text-sm font-normal text-[#5f6c72] hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500 hover:font-medium">Laptop
                                        </button>
                                        <button
                                            className=" max-md:hidden text-sm font-normal text-[#5f6c72]   hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500 hover:font-medium">Headphone
                                        </button>
                                        <button
                                            className=" max-md:hidden text-sm font-normal text-[#5f6c72] hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500 hover:font-medium ">
                                            TV
                                        </button>
                                        <button
                                            className=" text-sm  max-md:text-base flex font-semibold hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500 hover:font-medium  ">Browse
                                            All Product<SvgIcon1 className="w-4 h-4 text-black flex grow-0 shrink-0 basis-auto ml-[9px]"/>
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <ProductDisplayWidget4/>


                        </div>
                    </div>

                </div>
                <div
                    className="grid justify-items-center grid-cols-2 max-xl:grid-cols-1 max-xl:gap-4 gap-4 max-w-[1320px] ">
                    <ProductPromoSection/><ProductDisplayWidget1/>

                    <div className="grow-0 shrink-">

                    </div>
                </div>
                <div className='sm:W-[1438px] '>

                    <div
                        className="bg-[#ffe7d6]  flex justify-center items-center  mx-auto max-sm:w-[320px] max-lg:w-[700px] ">
                        <div
                            className="      grid grid-cols-2 max-md:grid-cols-1 max-lg:grid-cols-1 pb-9    ">
                            <ProductCardView1/>
                            <div className='flex items-center   justify-center max-md:p-3'>
                                <div
                                    className="flex justify-center  flex-col gap-[22px] max-w-[420px] min-w-[300px]  ">
                                    <Button
                                        className="bg-[#2da5f3] max-md:text-sm text-sm font-semibold text-[white] min-w-[165px] h-8 w-[165px] cursor-pointer block box-border grow-0 shrink-0 basis-auto rounded-sm border-[none]">
                                        SAVE UP TO $200.00
                                    </Button>
                                    <p className=" text-5xl font-semibold leading-[56px] text-[#191c1f] grow-0 shrink-0 basis-auto -mt-2.5 m-0 p-0">Macbook
                                        Pro</p>
                                    <p className=" text-2xl font-normal text-left leading-8 text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">
                                        Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
                                    </p>
                                    <Button
                                        className="bg-[#fa8232]  text-base font-bold tracking-[0.19px] uppercase text-[white] min-w-[191px] h-14 w-[191px] cursor-pointer inline-flex items-center justify-center gap-3.5 box-border grow-0 shrink-0 basis-auto rounded-[3px] border-[none]">
                                        Shop now
                                        <SvgIcon3 className="w-[18px] h-[18px] flex"/>
                                    </Button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Main;
