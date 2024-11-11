import { Button } from "@mui/base";
import SvgIcon1 from "./icons/SvgIcon1";

function StylishConsolePromo() {
  return (
    <div className=" box-border">
      <div className="flex justify-start items-center flex-row">
        <div className="w-[26px] grow-0 shrink-0 basis-auto box-border border-t-2 border-t-[#2da5f3] border-solid" />
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2484c2] grow-0 shrink-0 basis-auto ml-1.5 m-0 p-0">THE BEST PLACE TO PLAY</p>
      </div>
      <p className="[font-family:'Public_Sans',sans-serif] text-5xl font-semibold leading-[56px] text-[#191c1f] mt-1 m-0 p-0">Xbox Consoles</p>
      <p className="[font-family:'Public_Sans',sans-serif] text-lg font-normal text-left leading-6 text-[#475156] w-[100.00%] box-border mt-4 m-0 p-0">
        Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
      </p>
      <Button className="bg-[#fa8232] [font-family:'Public_Sans',sans-serif] text-base font-bold tracking-[0.19px] uppercase text-[white] min-w-[191px] h-14 w-[191px] cursor-pointer inline-flex items-center justify-center gap-3.5 box-border mt-6 rounded-[3px] border-[none]">
        Shop Now
        <SvgIcon1 className="w-[18px] h-[18px] flex" />
      </Button>
    </div>
  );
}

export default StylishConsolePromo;
