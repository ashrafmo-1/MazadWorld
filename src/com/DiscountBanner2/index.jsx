import { Button } from "@mui/base";
import ImageDisplay from "../ImageDisplay";

function DiscountBanner2({ imgContent31 }) {
  return (
    <div className="grow-0 shrink-0 basis-auto">
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="bg-[#efd33d] [font-family:'Public_Sans',sans-serif] text-xs font-semibold text-[#191c1f] min-w-[73px] h-[26px] w-[73px] cursor-pointer block box-border rounded-sm border-[none]">
        25% OFF
      </Button>
      <ImageDisplay imgContent31={imgContent31} />
    </div>
  );
}

export default DiscountBanner2;
