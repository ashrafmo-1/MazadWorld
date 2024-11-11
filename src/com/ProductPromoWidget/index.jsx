import { Button } from "@mui/base";
import ImageContainer from "../ImageContainer";

function ProductPromoWidget() {
  return (
    <div className="w-[100.00%] box-border">
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="bg-[#2db224] [font-family:'Public_Sans',sans-serif] text-xs font-semibold text-[white] min-w-[52px] h-[26px] w-[73px] cursor-pointer block box-border rounded-sm border-[none]">
        SALE
      </Button>
      <ImageContainer />
    </div>
  );
}

export default ProductPromoWidget;
