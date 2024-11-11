import { Button } from "@mui/base";
import ImageContainer4 from "../ImageContainer4";
import SvgIcon1 from "./icons/SvgIcon1";

function ShopSection() {
  return (
    <div className="flex justify-start items-center flex-col grow-0 shrink-0 basis-auto mt-8">
      <Button className="bg-[#fa8232] [font-family:'Public_Sans',sans-serif] text-base font-bold tracking-[0.19px] uppercase text-[white] min-w-[191px] h-14 w-[191px] cursor-pointer inline-flex items-center justify-center gap-3.5 box-border grow-0 shrink-0 basis-auto rounded-[3px] border-[none]">
        Shop now
        <SvgIcon1 className="w-[18px] h-[18px] flex" />
      </Button>
      <ImageContainer4 />
    </div>
  );
}

export default ShopSection;
