import { Button } from "@mui/base";
import ImageBox from "../ImageBox";

function DiscountOfferWidget() {
  return (
    <div className="w-[100.00%] box-border">
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="bg-[#efd33d] [font-family:'Public_Sans',sans-serif] text-xs font-semibold text-[#191c1f] min-w-[73px] h-[26px] w-[73px] cursor-pointer block box-border rounded-sm border-[none]">
        25% OFF
      </Button>
      <ImageBox />
    </div>
  );
}

export default DiscountOfferWidget;
