import { Button } from "@mui/base";
import ImageContainer2 from "../ImageContainer2";

function DiscountBanner1() {
  return (
    <div className="w-[100.00%] box-border">
      <div className="flex justify-center items-stretch flex-col w-[100.00%] box-border">
        <div className="bg-[#efd33d] relative [font-family:'Public_Sans',sans-serif] text-xs font-semibold text-[#191c1f] min-w-[73px] h-[26px] w-[73px] cursor-pointer flex items-center justify-center box-border grow-0 shrink-0 basis-auto rounded-sm border-[none]">
          32% OFF
        </div>
        <Button className="bg-[#ee5858] [font-family:'Public_Sans',sans-serif] text-xs font-semibold text-[white] min-w-[46px] h-[26px] w-[46px] cursor-pointer block box-border grow-0 shrink-0 basis-auto z-[1] mt-2 rounded-sm border-[none]">
          HOT
        </Button>
      </div>
      <ImageContainer2 />
    </div>
  );
}

export default DiscountBanner1;
