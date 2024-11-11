import { Button } from "@mui/base";
import ImageContainer5 from "../ImageContainer5";

function ProductPromoCard({ imgContent21 }) {
  return (
    <div className="grow-0 shrink-0 basis-auto">
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="bg-[#2db224] [font-family:'Public_Sans',sans-serif] text-xs font-semibold text-[white] min-w-[52px] h-[26px] w-[52px] cursor-pointer block box-border rounded-sm border-[none]">
        SALE
      </Button>
      <ImageContainer5 imgContent21={imgContent21} />
    </div>
  );
}

export default ProductPromoCard;
