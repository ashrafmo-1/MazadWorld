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
          <SvgIcon2 className="w-[18px] h-[18px] flex" />
          Add to card
        </Button>
        <div className="bg-[#ffe7d6] box-border flex justify-center items-center flex-col grow-0 shrink-0 basis-auto px-3 rounded-sm">
          <SvgIcon3 className="w-6 h-6 flex grow-0 shrink-0 basis-auto" />
        </div>
      </div>
    </div>
  );
}

export default ProductCardWidget5;
