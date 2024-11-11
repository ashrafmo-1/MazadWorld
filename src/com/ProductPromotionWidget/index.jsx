import { Button } from "@mui/base";
import ImageDisplayWidget1 from "../ImageDisplayWidget1";

function ProductPromotionWidget({ imgContent16 }) {
  return (
    <div className="grow-0 shrink-0 basis-auto">
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="bg-[#2da5f3] [font-family:'Public_Sans',sans-serif] text-xs font-semibold text-[white] min-w-[94px] h-[26px] w-[94px] cursor-pointer block box-border rounded-sm border-[none]">
        BEST DEALS
      </Button>
      <ImageDisplayWidget1 imgContent16={imgContent16} />
    </div>
  );
}

export default ProductPromotionWidget;
