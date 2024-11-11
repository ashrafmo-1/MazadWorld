import { Button } from "@mui/base";
import ImageDisplayWidget from "../ImageDisplayWidget";

function ProductCard7({ imgContent26 }) {
  return (
    <div className="grow-0 shrink-0 basis-auto">
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="bg-[#ee5858] [font-family:'Public_Sans',sans-serif] text-xs font-semibold text-[white] min-w-[46px] h-[26px] w-[46px] cursor-pointer block box-border rounded-sm border-[none]">
        HOT
      </Button>
      <ImageDisplayWidget imgContent26={imgContent26} />
    </div>
  );
}

export default ProductCard7;
