import { Button } from "@mui/base";
import ImageContainer9 from "../ImageContainer9";
import SvgIcon1 from "./icons/SvgIcon1";

function ProductDisplayWidget1() {
  return (
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
  );
}

export default ProductDisplayWidget1;
