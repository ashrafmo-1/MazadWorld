import TvCard from "../TvCard";
import SvgIcon1 from "./icons/SvgIcon1";

function ProductDisplaySection() {
  return (
    <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto">

      <div className="bg-[#fa8232] box-border flex justify-center items-center flex-col grow-0 shrink-0 basis-auto -ml-6 px-[15px] rounded-[100px]">
        <SvgIcon1 className="w-[18px] h-[18px] flex grow-0 shrink-0 basis-auto" />
      </div>
    </div>
  );
}

export default ProductDisplaySection;