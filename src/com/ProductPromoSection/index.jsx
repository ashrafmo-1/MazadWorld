import { Button } from "@mui/base";
import SvgIcon1 from "./icons/SvgIcon1";

function ProductPromoSection() {
  return (
    <div className="rounded bg-[#f2f4f5] box-border flex justify-center items-center max-lg:w-[770px] flex-row  pl-[43px] pr-11 py-11 max-md:w-[300px] max-md:flex-col">
      <div className="grow-0 shrink basis-auto ">
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="bg-[#2da5f3]  text-sm font-semibold text-[white] min-w-[123px] h-8 w-[123px] cursor-pointer block box-border rounded-sm border-[none]">
          INTRODUCING
        </Button>
        <p className=" text-[32px] font-semibold text-left leading-10 text-[#191c1f] mt-2 m-0 p-0">
          New Apple
          <br />
          Homepod Mini
        </p>
        <p className=" text-base font-normal text-left leading-6 text-[#475156] w-[100.00%] box-border mt-3 m-0 p-0">
          Jam-packed with innovation, HomePod mini delivers unexpectedly.
        </p>
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="bg-[#fa8232] [font-family:'Public_Sans',sans-serif] text-sm font-bold tracking-[0.17px] uppercase text-[white]  min-w-[156px] h-12 w-[156px] cursor-pointer inline-flex items-center justify-center gap-[9px] box-border mt-5 rounded-sm border-[none]">
          Shop now
          <SvgIcon1 className="w-4 h-4 flex" />
        </Button>
      </div>
      <img src="/assets/image_fb2e5f98.png" className="h-60 max-w-[initial] max-md:pt-6  object-contain w-60 box-border block sm:ml-[39px]" />
    </div>
  );
}

export default ProductPromoSection;
