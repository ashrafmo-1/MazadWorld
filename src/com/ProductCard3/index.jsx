import { Button } from "@mui/base";
import SvgIcon1 from "./icons/SvgIcon1";

function ProductCard3() {
  return (
    <div className="rounded bg-[#f7e99e] box-border flex justify-start items-center flex-col w-[100.00%] py-8">
      <img
        src="/assets/image_1ec998d0.png"
        className="shadow-[0px_12px_24px_rgba(0,0,0,0.24)] h-[108px] max-w-[initial] object-cover w-[108px] mix-blend-normal box-border block grow-0 shrink-0 basis-auto border-[none]"
      />
      <p className="[font-family:'Public_Sans',sans-serif] text-[28px] font-semibold text-center leading-8 text-[#191c1f] max-w-[250px] grow-0 shrink-0 basis-auto box-border mt-3 m-0 p-0">
        Xiaomi True Wireless Earbuds
      </p>
      <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-center leading-6 text-[#475156] max-w-[250px] grow-0 shrink-0 basis-auto box-border mt-2 m-0 p-0">
        Escape the noise, It&apos;s time to hear the magic with Xiaomi Earbuds.
      </p>
      <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto mt-4">
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-[#475156] grow-0 shrink-0 basis-auto m-0 p-0">Only for:</p>
        <div className="bg-[white] box-border flex justify-center items-stretch flex-col h-9 grow-0 shrink-0 basis-auto ml-[7px] px-[11px] rounded-[3px]">
          <p className="[font-family:'Public_Sans',sans-serif] text-base font-semibold text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">$299 USD</p>
        </div>
      </div>
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="bg-[#fa8232] [font-family:'Public_Sans',sans-serif] text-sm font-bold tracking-[0.17px] uppercase text-[white] min-w-[248px] h-12 w-[248px] cursor-pointer inline-flex items-center justify-center gap-[9px] box-border grow-0 shrink-0 basis-auto mt-6 rounded-sm border-[none]">
        Shop now
        <SvgIcon1 className="w-4 h-4 flex" />
      </Button>
    </div>
  );
}

export default ProductCard3;
