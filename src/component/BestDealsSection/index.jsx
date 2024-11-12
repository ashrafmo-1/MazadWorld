import TimeDisplayWidget from "../../component/TimeDisplayWidget";
import ProductCardWidget5 from "../ProductCardWidget5";
import ProductDisplayWidget4 from "../ProductDisplayWidget4";
import SvgIcon1 from "./icons/SvgIcon1";
import Hovercard from "../hovercard";
import ProductCardHover from "../hovercard";
import DiscountBanner1 from "../DiscountBanner1";
import ProductDescriptionBlock from "../ProductDescriptionBlock";
import GameInfoCard from "../GameInfoCard";
import {Button} from "@mui/base";
import SvgIcon2 from "../ProductCardWidget5/icons/SvgIcon2";
import SvgIcon3 from "../ProductCardWidget5/icons/SvgIcon3";

function BestDealsSection() {
    return (
        <div className="justify-center   pl-28 md  items-center  shrink-0 basis-auto px-[58px]">
            <div className="flex justify-between items-center flex-row gap-2  box-border pr-[3px]">
                <div className="flex  justify-start items-center flex-row grow-0 shrink-0 basis-auto">
                    <p className="[font-family:'Public_Sans',sans-serif] text-2xl font-semibold text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">Best
                        Deals</p>
                    <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-[black] grow-0 shrink-0 basis-auto ml-[22px] m-0 p-0">Deals
                        ends in</p>
                    {/*time*/}
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
                <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto">
                    <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2da5f3] grow-0 shrink-0 basis-auto m-0 p-0">Browse
                        All Product</p>
                    <SvgIcon1 className="w-4 h-4 flex grow-0 shrink-0 basis-auto ml-[9px]"/>
                </div>
            </div>
            <div className="flex justify-start gap-2 items-center flex-row w-[100.00%] box-border mt-[23.5px]">

                <div
                    className="border   max-xl:hidden bg-[white] box-border grow-0 shrink-0 basis-[329px] pt-[16.5px] pb-[22.5px] px-[16.5px] h-[592px] border-solid border-[#e4e7e9]">
                    <DiscountBanner1/>
                    <div className="flex justify-start items-center flex-row mt-6 px-[9.5px]">
                        <img src="/assets/image_5670be83.png" alt=""
                             className="h-[16.5px] max-w-[initial] w-[105px] block box-border"/>
                        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-[#77878f] grow-0 shrink-0 basis-auto ml-[2.25px] m-0 p-0"> (52,677)</p>
                    </div>
                    <ProductDescriptionBlock/>
                    <div className="flex justify-start items-center flex-row mt-3 px-[7px]">
                        <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal line-through text-[#adb7bc] grow-0 shrink-0 basis-auto m-0 p-0">$865.99</p>
                        <p className="[font-family:'Public_Sans',sans-serif] text-lg font-semibold text-[#2da5f3] grow-0 shrink-0 basis-auto ml-0.5 m-0 p-0">$442.12</p>
                    </div>
                    <GameInfoCard/>
                    <div className="flex justify-start items-stretch flex-row gap-2 h-12 box-border mt-6 px-2">
                        <div
                            className="bg-[#ffe7d6] box-border flex justify-center items-center flex-col grow-0 shrink-0 basis-auto px-3.5 rounded-sm">
                            <SvgIcon1 className="w-5 h-5 flex grow-0 shrink-0 basis-auto"/>
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
                            <SvgIcon3 className="w-6 h-6 flex grow-0 shrink-0 basis-auto"/>
                        </div>
                    </div>
                </div>
                <div
                    className="flex justify-start items-stretch flex-col grow-0 shrink basis-[993px] box-border -ml-px">
                    <div
                        className=" bg-[white]    gap-2  grid grid-cols-4  max-lg:grid-cols-3   max-md:grid-cols-2     ">
                        <Hovercard img='/assets/image_291e5106.png'
                                   tit='Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...' pri='2,300'/>
                        <ProductCardHover img='/assets/image_b2c31b8c.png' tit='Simple Mobile 4G LTE Prepaid Smartphone'
                                          pri='220'/>
                        <Hovercard img='/assets/image_c8e6a9da.png' tit='4K UHD LED Smart TV with Chromecast Built-in'
                                   pri='1,50'/>
                        <Hovercard tit='Sony DSCHX8 High Zoom Point &amp; Shoot Camera' pri='1,200'
                                   img='/assets/image_4c00d604.png'/>
                        <Hovercard img='/assets/image_291e5106.png'
                                   tit='Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...' pri='2,300'/>
                        <ProductCardHover img='/assets/image_b2c31b8c.png' tit='Simple Mobile 4G LTE Prepaid Smartphone'
                                          pri='220'/>
                        <Hovercard img='/assets/image_c8e6a9da.png' tit='4K UHD LED Smart TV with Chromecast Built-in'
                                   pri='1,50'/>
                        <Hovercard tit='Sony DSCHX8 High Zoom Point &amp; Shoot Camera' pri='1,200'
                                   img='/assets/image_4c00d604.png'/>


                    </div>
                    <div
                        className=" bg-[white]    gap-2  grid grid-cols-4  max-lg:grid-cols-3   max-md:grid-cols-2     ">
                        <Hovercard img='/assets/image_291e5106.png'
                                   tit='Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...' pri='2,300'/>
                        <ProductCardHover img='/assets/image_b2c31b8c.png' tit='Simple Mobile 4G LTE Prepaid Smartphone'
                                          pri='220'/>
                        <Hovercard img='/assets/image_c8e6a9da.png' tit='4K UHD LED Smart TV with Chromecast Built-in'
                                   pri='1,50'/>
                        <Hovercard tit='Sony DSCHX8 High Zoom Point &amp; Shoot Camera' pri='1,200'
                                   img='/assets/image_4c00d604.png'/>
                        <Hovercard img='/assets/image_291e5106.png'
                                   tit='Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...' pri='2,300'/>
                        <ProductCardHover img='/assets/image_b2c31b8c.png' tit='Simple Mobile 4G LTE Prepaid Smartphone'
                                          pri='220'/>
                        <Hovercard img='/assets/image_c8e6a9da.png' tit='4K UHD LED Smart TV with Chromecast Built-in'
                                   pri='1,50'/>
                        <Hovercard tit='Sony DSCHX8 High Zoom Point &amp; Shoot Camera' pri='1,200'
                                   img='/assets/image_4c00d604.png'/>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestDealsSection;
