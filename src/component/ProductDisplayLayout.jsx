
import CardSlider from "./sliderMain.jsx";
import Slider1 from "./slider1o.jsx";
import {Button} from "@mui/base";
import SvgIcon1 from "./ProductCardWidget1/icons/SvgIcon1.jsx";
import Newswiper from "./newswiper";

function ProductDisplayLayout() {
    return (
        < div className='flex justify-center items-center'>

                <div className="grid-cols-[872px_424px] grid lg:px-14 pb-4 gap-4     max-xl:grid-cols-[800px] max-xl:gap-4  max-lg:grid-cols-[750px] max-md:px-4 max-md:grid-cols-1 ">
                    <div className='flex h-full w-full  bg-[#f2f4f5]'>
                        {/*<CardSlider/>*/}
                        <Newswiper/>
                    </div>
                    <div className="flex  max-sm:flex-col xl:flex-col max-sm:w-[300px] justify-center items-center gap-4 shrink-0  box-border   ">
                        <div
                            className="bg-[#191c1f] box-border h-[248px]   flex justify-start items-stretch flex-col w-[100.00%] pt-6 rounded-md max-lg:pt-2">
                            <div
                                className="flex justify-between items-start flex-row gap-2 grow-0 shrink-0 basis-auto pl-[39px] max-lg:pl-1 max-xl:pl-1 pr-6  ">
                                <div className="max-w-[162px] max-sm:text-lg grow-0 shrink-0 basis-auto box-border pt-[22px]">
                                    <p className="[font-family:'Public_Sans',sans-serif] text-sm font-medium uppercase text-[#ebc80c] m-0 p-0">Summer
                                        Sales</p>
                                    <p className="[font-family:'Public_Sans',sans-serif] text-2xl font-semibold text-left leading-8 text-[white] w-[100.00%] max-lg:text-lg box-border mt-[5px] max-sm:text-sm max-sm:w-[100px]">New
                                        Google Pixel 6 Pro</p>
                                </div>
                                <div
                                    className=" flex relative  justify-center items-center bg-[#efd33d] [font-family:'Public_Sans',sans-serif] text-base font-semibold text-[#141414] min-w-[102px] h-10 w-[102px] cursor-pointer  box-border ">
                                    29% OFF
                                </div>
                            </div>
                            <div className="mt-[-88px] self-end grow-0 shrink-0 basis-auto max-lg:pt-4  ">
                                <img src="/assets/image_ed3710c6.png"
                                     className="h-[201px] max-w-[initial] object-cover w-[236px]  max-sm:w-[150px] max-sm:pr-3 "/>
                            </div>
                            <div className="mt-[-95px] grow-0 shrink-0 basis-auto pl-10 pr-[35px] max-lg:pt-4">
                                {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
                                <Button
                                    className="bg-[#fa8232] [font-family:'Public_Sans',sans-serif] text-sm font-bold tracking-[0.17px] uppercase text-[white]  h-12 min-w-[156px] cursor-pointer inline-flex items-center justify-center gap-[9px] box-border rounded-sm border-[none]">
                                    Shop Now
                                    <SvgIcon1 className="w-4 h-4 flex"/>
                                </Button>
                            </div>
                        </div>

                        <div
                            className="bg-[#f2f4f5] box-border h-[248px] flex justify-start items-center flex-row w-[100.00%]  px-8 py-10 max-sm:p-0 rounded-md">
                            <img src="/assets/image_5b71379e.png"
                                 className=" max-sm:w-[150px]  w-40 box-border "/>
                            <div className="max-w-[174px] max-sm:w-[100px] grow-0 shrink basis-auto box-border  max-sm:m-0 ml-[19px]">
                                <p className="[font-family:'Public_Sans',sans-serif] text-2xl font-semibold text-left leading-8 text-[#191c1f] w-[100.00%] box-border m-0 p-0">Xiaomi
                                    FlipBuds Pro</p>
                                <p className="[font-family:'Public_Sans',sans-serif] text-lg font-semibold text-[#2da5f3] mt-3 m-0 p-0">$299
                                    USD</p>
                                {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
                                <button
                                    className="bg-[#fa8232] [font-family:'Public_Sans',sans-serif] text-sm font-bold tracking-[0.17px] uppercase text-[white]  h-12 min-w-[140px]  max-w-[156px]  inline-flex items-center justify-center   box-border mt-5 rounded-sm border-[none]">
                                    Shop Now
                                    <SvgIcon1 className="w-4 h-4 flex"/>
                                </button>
                            </div>
                        </div>
                    </div>


            </div>
            {/*<Slider1/>*/}

        </div>
    );
}

export default ProductDisplayLayout;
