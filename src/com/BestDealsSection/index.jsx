import TimeDisplayWidget from "../TimeDisplayWidget";
import ProductCardWidget5 from "../ProductCardWidget5";
import ProductDisplayWidget4 from "../ProductDisplayWidget4";
import SvgIcon1 from "./icons/SvgIcon1";

function BestDealsSection() {
  return (
    <div className="justify-center   pl-28 md  items-center  shrink-0 basis-auto px-[58px]">
      <div className="flex justify-between items-center flex-row gap-2  box-border pr-[3px]">
        <div className="flex  justify-start items-center flex-row grow-0 shrink-0 basis-auto">
          <p className="[font-family:'Public_Sans',sans-serif] text-2xl font-semibold text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">Best Deals</p>
          <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-[black] grow-0 shrink-0 basis-auto ml-[22px] m-0 p-0">Deals ends in</p>
          <TimeDisplayWidget />
        </div>
        <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto">
          <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2da5f3] grow-0 shrink-0 basis-auto m-0 p-0">Browse All Product</p>
          <SvgIcon1 className="w-4 h-4 flex grow-0 shrink-0 basis-auto ml-[9px]" />
        </div>
      </div>
      <div className="flex justify-start gap-2 items-center flex-row w-[100.00%] box-border mt-[23.5px]">
        <ProductCardWidget5 />
        <div className="flex justify-start items-stretch flex-col grow-0 shrink basis-[993px] box-border -ml-px">
          <ProductDisplayWidget4 />
          <ProductDisplayWidget4 />
          {/*<ProductDisplayWidget5 />*/}
        </div>
      </div>
    </div>
  );
}

export default BestDealsSection;
