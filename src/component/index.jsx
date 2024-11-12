import {Button} from "@mui/base";
import ProductDisplayLayout from "./ProductDisplayLayout.jsx";
import ProductDisplayContainer from "./ProductDisplayContainer";
import SvgIcon1 from "./icons/SvgIcon1.jsx";
import SvgIcon3 from "./icons/SvgIcon3.jsx";
import ProductDisplayWidget4 from "./ProductDisplayWidget4";
import MainSlider from "./slider1";
import Hovercard from "./hovercard";
import ProductCardHover from "./hovercard";
import DiscountBanner1 from "./DiscountBanner1";
import SvgIcon2 from "./ProductCardWidget5/icons/SvgIcon2";

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

                        {/*/ time /*/}
                        <div
                            className=" max-sm:hidden bg-[#f3de6d] box-border flex justify-center items-center flex-row gap-1 h-9 grow-0 shrink-0 basis-auto ml-[11px] px-[11px] rounded-sm">
                            <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">16d</p>
                            <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">:</p>
                            <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">21h</p>
                            <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">:</p>
                            <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">57m</p>
                            <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">:</p>
                            <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">23s</p>
                        </div>
                    </div>
                    <button className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto">
                        <p className=" text-sm font-semibold text-[#2da5f3] grow-0 shrink-0 basis-auto m-0 p-0">Browse
                            All Product</p>
                        <SvgIcon1 className="w-4 h-4 flex grow-0 shrink-0 basis-auto ml-[9px]"/>
                    </button>
                </div>
                <div className="flex justify-start gap-2 items-center flex-row  mt-[23.5px]">
                    <div
                        className="border   max-xl:hidden bg-[white] box-border grow-0 shrink-0 basis-[329px] pt-[16.5px] pb-[22.5px] px-[16.5px] h-[592px] border-solid border-[#e4e7e9]">
                        <DiscountBanner1/>
                        <div className="flex justify-start items-center flex-row mt-6 px-[9.5px]">
                            <img src="/assets/image_5670be83.png" alt=""
                                 className="h-[16.5px] max-w-[initial] w-[105px] block box-border"/>
                            <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-[#77878f] grow-0 shrink-0 basis-auto ml-[2.25px] m-0 p-0"> (52,677)</p>
                        </div>
                        <div className="mt-1.5 px-[7px]">
                            <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-left leading-6 text-[#191c1f] max-w-[282px] box-border m-0 p-0">
                                Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...
                            </p>
                        </div>
                        <div className="flex justify-start items-center flex-row mt-3 px-[7px]">
                            <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal line-through text-[#adb7bc] grow-0 shrink-0 basis-auto m-0 p-0">$865.99</p>
                            <p className="[font-family:'Public_Sans',sans-serif] text-lg font-semibold text-[#2da5f3] grow-0 shrink-0 basis-auto ml-0.5 m-0 p-0">$442.12</p>
                        </div>
                        <div className="mt-3 px-[7px]">
                            <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-left leading-5 text-[#5f6c72] max-w-[282px] box-border m-0 p-0">
                                Games built using the Xbox Series X|S development kit showcase unparalleled load times,
                                visuals.
                            </p>
                        </div>
                        <div className="flex justify-start items-stretch flex-row gap-2 h-12 box-border mt-6 px-2">
                            <div
                                className="bg-[#ffe7d6] box-border flex justify-center items-center flex-col grow-0 shrink-0 basis-auto px-3.5 rounded-sm">
                                <img src='../assets/Vector.png' className="w-5 h-5 flex grow-0 shrink-0 basis-auto"/>
                            </div>
                            <Button
                                className="bg-[#fa8232] [font-family:'Public_Sans',sans-serif] text-sm font-bold tracking-[0.17px] uppercase text-[white] min-w-[173px] h-12 w-[173px] cursor-pointer inline-flex items-center justify-center gap-[9px] box-border grow-0 shrink-0 basis-auto rounded-sm border-[none]">
                                <div className=' w-[18px] h-[18px] flex'>
                                    <svg fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
                                        <g id="ShoppingCartSimple_3" xmlns="http://www.w3.org/2000/svg"
                                           data-node-id="I316:1908;289:797">
                                            <path
                                                id="Vector_67"
                                                d="M6.7773,15.9425c0,0.27 -0.224,0.5 -0.5,0.5c-0.276,0 -0.5,-0.23 -0.5,-0.5c0,-0.28 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.22 0.5,0.5z"
                                                fill="white"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                data-node-id="I316:1908;289:797;279:8195"
                                            />
                                            <path
                                                id="Vector_68"
                                                d="M14.4023,17.1825c0.69,0 1.25,-0.55 1.25,-1.24c0,-0.7 -0.56,-1.26 -1.25,-1.26c-0.69,0 -1.25,0.56 -1.25,1.26c0,0.69 0.56,1.24 1.25,1.24z"
                                                fill="white"
                                                data-node-id="I316:1908;289:797;279:8196"
                                            />
                                            <path
                                                id="Vector_69"
                                                d="M3.3323,4.6925h14.015l-2.062,7.21c-0.074,0.27 -0.231,0.5 -0.449,0.66c-0.217,0.16 -0.482,0.25 -0.754,0.25h-7.485c-0.272,0 -0.537,-0.09 -0.754,-0.25c-0.218,-0.16 -0.375,-0.39 -0.449,-0.66l-2.828,-9.89c-0.037,-0.13 -0.116,-0.24 -0.225,-0.32c-0.108,-0.09 -0.241,-0.13 -0.377,-0.13h-1.312"
                                                stroke="white"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                data-node-id="I316:1908;289:797;279:8197"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                Add to card
                            </Button>
                            <div
                                className="bg-[#ffe7d6] box-border flex justify-center items-center flex-col grow-0 shrink-0 basis-auto px-3 rounded-sm">
                                <img src='../assets/Eye.svg' className="w-6 h-6 flex grow-0 shrink-0 basis-auto"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ProductDisplayWidget4/>
                    </div>
                </div>
            </div>

        </div>
        <div className="flex justify-center  items-stretch flex-col gap-[72px]  box-border pt-6 pb-[72px]">

            <div className="flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto px-[35px]">
                <p className="[font-family:'Public_Sans',sans-serif] text-[32px] max-md:text-lg font-semibold text-center text-[#191c1f] grow-0 shrink-0 basis-auto mx-[23px] m-0 ">Shop
                    with Categorys</p>
                <div className="flex justify-center gap-4 mt-10">
                    <MainSlider/>
                </div>
            </div>
        </div>
        <div className=" flex justify-center  items-center flex-col ">

            <div className="flex justify-center  items-stretch flex-col gap-[72px]   pt-6 pb-[72px]">

                <div
                    className="flex justify-start items-start flex-row  pt-7 self-center gap-4 shrink-0 basis-auto box-border">
                    <div className='pt-7 h-[300px]'><ProductDisplayContainer/></div>
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
                                            All Product<SvgIcon1
                                                className="w-4 h-4 text-black flex grow-0 shrink-0 basis-auto ml-[9px]"/>
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div
                                className=" bg-[white]    gap-2  grid grid-cols-4  max-lg:grid-cols-3   max-md:grid-cols-2     ">
                                <Hovercard img='/assets/image_291e5106.png'
                                           tit='Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...'
                                           pri='2,300'/>
                                <ProductCardHover img='/assets/image_b2c31b8c.png'
                                                  tit='Simple Mobile 4G LTE Prepaid Smartphone' pri='220'/>
                                <Hovercard img='/assets/image_c8e6a9da.png'
                                           tit='4K UHD LED Smart TV with Chromecast Built-in' pri='1,50'/>
                                <Hovercard tit='Sony DSCHX8 High Zoom Point &amp; Shoot Camera' pri='1,200'
                                           img='/assets/image_4c00d604.png'/>
                                <Hovercard img='/assets/image_291e5106.png'
                                           tit='Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...'
                                           pri='2,300'/>
                                <ProductCardHover img='/assets/image_b2c31b8c.png'
                                                  tit='Simple Mobile 4G LTE Prepaid Smartphone' pri='220'/>
                                <Hovercard img='/assets/image_c8e6a9da.png'
                                           tit='4K UHD LED Smart TV with Chromecast Built-in' pri='1,50'/>
                                <Hovercard tit='Sony DSCHX8 High Zoom Point &amp; Shoot Camera' pri='1,200'
                                           img='/assets/image_4c00d604.png'/>


                            </div>

                        </div>
                    </div>

                </div>
                <div
                    className="grid justify-items-center grid-cols-2 max-xl:grid-cols-1 max-xl:gap-4 gap-4 max-w-[1320px] ">
                    <div
                        className="rounded bg-[#f2f4f5] box-border flex justify-center items-center max-lg:w-[770px] flex-row  pl-[43px] pr-11 py-11 max-md:w-[300px] max-md:flex-col">
                        <div className="grow-0 shrink basis-auto ">
                            {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
                            <Button
                                className="bg-[#2da5f3]  text-sm font-semibold text-[white] min-w-[123px] h-8 w-[123px] cursor-pointer block box-border rounded-sm border-[none]">
                                INTRODUCING
                            </Button>
                            <p className=" text-[32px] font-semibold text-left leading-10 text-[#191c1f] mt-2 m-0 p-0">
                                New Apple
                                <br/>
                                Homepod Mini
                            </p>
                            <p className=" text-base font-normal text-left leading-6 text-[#475156] w-[100.00%] box-border mt-3 m-0 p-0">
                                Jam-packed with innovation, HomePod mini delivers unexpectedly.
                            </p>
                            {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
                            <Button
                                className="bg-[#fa8232] [font-family:'Public_Sans',sans-serif] text-sm font-bold tracking-[0.17px] uppercase text-[white]  min-w-[156px] h-12 w-[156px] cursor-pointer inline-flex items-center justify-center gap-[9px] box-border mt-5 rounded-sm border-[none]">
                                Shop now
                                <SvgIcon1 className="w-4 h-4 flex"/>
                            </Button>
                        </div>
                        <img src="/assets/image_fb2e5f98.png"
                             className="h-60 max-w-[initial] max-md:pt-6  object-contain w-60 box-border block sm:ml-[39px]"/>
                    </div>
                    <div
                        className="rounded bg-black box-border max-lg:w-[770px]  grid grid-cols-2 max-md:grid-cols-1 basis-[648px] pl-[43px] pr-11 py-11 max-md:w-[300px]">
                        <div className="flex justify-center items-stretch flex-col grow-0 shrink basis-auto ">
                            {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
                            <Button
                                className="bg-[#efd33d]  [font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#191c1f] min-w-[159px] h-8 w-[159px] cursor-pointer block box-border grow-0 shrink-0 basis-auto rounded-sm border-[none]">
                                INTRODUCING NEW
                            </Button>
                            <p className="[font-family:'Public_Sans',sans-serif] text-[32px] font-semibold text-left leading-10 text-[white] grow-0 shrink-0 basis-auto mt-2 m-0 p-0">
                                Xiaomi Mi 11 Ultra
                                <br/>
                                12GB+256GB
                            </p>
                            <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-left leading-6 text-[#adb7bc] grow-0 shrink-0 basis-auto mt-3 m-0 p-0">
                                *Data provided by internal laboratories. Industry measurment.
                            </p>
                            {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
                            <Button
                                className="bg-[#fa8232] [font-family:'Public_Sans',sans-serif] text-sm font-bold tracking-[0.17px] uppercase text-[white] min-w-[156px] h-12 w-[156px] cursor-pointer inline-flex items-center justify-center gap-[9px] box-border grow-0 shrink-0 basis-auto mt-5 rounded-sm border-[none]">
                                Shop now
                                <SvgIcon1 className="w-4 h-4 flex"/>
                            </Button>
                        </div>
                        <div className=" grid grid-cols-1 basis-auto   max-md:pt-4  max-md:w-[80px]">
                            <div className="grow-0 shrink-0 basis-auto sm:px-6 max-md:p-0">
                                <Button
                                    className="bg-[#2da5f3]  max-md:w-10 max-md:h-10 max-md:text-xs max-md:p-0 relative [font-family:'Public_Sans',sans-serif] text-xl font-semibold text-[white]  h-[88px] w-[88px] cursor-pointer block box-border rounded-[1000px] border-[none]">
                                    $590
                                </Button>
                            </div>

                            <div className="mt-[-81px]  max-md:pt-16   ">
                                <img src="/assets/image_ae13c409.png"
                                     className=" h-[305px] max-md:h-[150px]   max-sm:w-[150px]  max-lg:max-w-[initial] object-contain w-[312px] box-border block border-[none] "/>

                            </div>
                        </div>
                    </div>
                    <div className="grow-0 shrink-">

                    </div>
                </div>
                <div className='sm:W-[1438px] '>

                    <div
                        className="bg-[#ffe7d6]  flex justify-center items-center  mx-auto max-sm:w-[320px] max-lg:w-[700px] ">
                        <div
                            className="      grid grid-cols-2 max-md:grid-cols-1 max-lg:grid-cols-1 pb-9    ">
                            <div className='flex items-center justify-center'>
                                <div className="flex justify-start items-start flex-row grow-0 shrink-0 basis-auto">
                                    <div className="grow-0 shrink-0 basis-auto pt-[34px]">
                                        <Button
                                            className="bg-[#ffcead] relative max-md:w-[50px] max-md:text-xs max-md:mr-8 max-md:h-[50px] [font-family:'Public_Sans',sans-serif] text-xl font-semibold text-[#191c1f] sm:min-w-[122px] h-[122px] w-[122px] cursor-pointer block box-border rounded-[1000px] border-[6px] border-solid border-[white]">
                                            $1999
                                        </Button>
                                    </div>
                                    <img src="/assets/image_f61941ce.png"
                                         className="h-[424px] max-md:w-[250px] max-md:h-[200px]  w-[536px] box-border block ml-[-94px] border-[none]"/>
                                </div>
                            </div>
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
