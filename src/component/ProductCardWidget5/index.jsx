import { Button } from "@mui/base";
import DiscountBanner1 from "../DiscountBanner1";
import ProductDescriptionBlock from "../ProductDescriptionBlock";
import GameInfoCard from "../GameInfoCard";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";

function ProductCardWidget5() {
  return (
    <div className="border   max-xl:hidden bg-[white] box-border grow-0 shrink-0 basis-[329px] pt-[16.5px] pb-[22.5px] px-[16.5px] h-[592px] border-solid border-[#e4e7e9]">
      <DiscountBanner1 />
      <div className="flex justify-start items-center flex-row mt-6 px-[9.5px]">
        <img src="/assets/image_5670be83.png" alt="" className="h-[16.5px] max-w-[initial] w-[105px] block box-border" />
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-[#77878f] grow-0 shrink-0 basis-auto ml-[2.25px] m-0 p-0"> (52,677)</p>
      </div>
      <ProductDescriptionBlock />
      <div className="flex justify-start items-center flex-row mt-3 px-[7px]">
        <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal line-through text-[#adb7bc] grow-0 shrink-0 basis-auto m-0 p-0">$865.99</p>
        <p className="[font-family:'Public_Sans',sans-serif] text-lg font-semibold text-[#2da5f3] grow-0 shrink-0 basis-auto ml-0.5 m-0 p-0">$442.12</p>
      </div>
      <GameInfoCard />
      <div className="flex justify-start items-stretch flex-row gap-2 h-12 box-border mt-6 px-2">
        <div className="bg-[#ffe7d6] box-border flex justify-center items-center flex-col grow-0 shrink-0 basis-auto px-3.5 rounded-sm">
          <SvgIcon1 className="w-5 h-5 flex grow-0 shrink-0 basis-auto" />
        </div>
        <Button className="bg-[#fa8232] [font-family:'Public_Sans',sans-serif] text-sm font-bold tracking-[0.17px] uppercase text-[white] min-w-[173px] h-12 w-[173px] cursor-pointer inline-flex items-center justify-center gap-[9px] box-border grow-0 shrink-0 basis-auto rounded-sm border-[none]">
            <div className=' w-[18px] h-[18px] flex'>
                <svg fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
                    <g id="ShoppingCartSimple_3" xmlns="http://www.w3.org/2000/svg" data-node-id="I316:1908;289:797">
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
  );
}

export default ProductCardWidget5;
