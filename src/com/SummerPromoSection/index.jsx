import { Button } from "@mui/base";
import SvgIcon1 from "./icons/SvgIcon1";

function SummerPromoSection() {
  return (
    <div className="rounded bg-[#124261] box-border flex justify-center items-stretch flex-col gap-3 w-[100.00%] mt-6 px-[23px] py-10">
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="bg-[rgba(255,255,255,0.12)] [font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[white] min-w-[137px] h-8 w-[137px] cursor-pointer block box-border self-center grow-0 shrink-0 basis-auto rounded-sm border-[none]">
        SUMMER SALES
      </Button>
      <p className="[font-family:'Public_Sans',sans-serif] text-[28px] font-semibold text-center leading-8 text-[white] grow-0 shrink-0 basis-auto mx-2 m-0 p-0">37% DISCOUNT</p>
      <p className="text-center text-[white] grow-0 shrink-0 basis-auto m-0 p-0">
        <span className="[font-family:'Public_Sans',sans-serif] text-lg font-normal text-center">only for </span>
        <span className="[font-family:'Public_Sans',sans-serif] text-lg font-semibold text-[#ebc80c] text-center">SmartPhone</span>
        <span className="[font-family:'Public_Sans',sans-serif] text-lg font-normal text-center"> product.</span>
      </p>
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="bg-[#2da5f3] [font-family:'Public_Sans',sans-serif] text-sm font-bold tracking-[0.17px] uppercase text-[white] min-w-[248px] h-12 cursor-pointer inline-flex items-center justify-center gap-[9px] box-border grow-0 shrink-0 basis-auto mt-3 mx-[9px] rounded-sm border-[none]">
        Shop now
        <SvgIcon1 className="w-4 h-4 flex" />
      </Button>
    </div>
  );
}

export default SummerPromoSection;
