import { Button } from "@mui/base";
import ImageContainer10 from "../ImageContainer10";

function HotItemsSection() {
  return (
    <div className="w-[100.00%] box-border">
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="bg-[#ee5858] [font-family:'Public_Sans',sans-serif] text-xs font-semibold text-[white] min-w-[46px] h-[26px] w-[46px] cursor-pointer relative flex items-center justify-center box-border rounded-sm border-[none]">
        HOT
      </Button>
      <ImageContainer10 />
    </div>
  );
}

export default HotItemsSection;
