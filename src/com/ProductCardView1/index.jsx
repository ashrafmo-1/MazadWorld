import { Button } from "@mui/base";

function ProductCardView1() {
  return (
      <div className='flex items-center justify-center'>
    <div className="flex justify-start items-start flex-row grow-0 shrink-0 basis-auto">
      <div className="grow-0 shrink-0 basis-auto pt-[34px]">
        <Button className="bg-[#ffcead] relative max-md:w-[50px] max-md:text-xs max-md:mr-8 max-md:h-[50px] [font-family:'Public_Sans',sans-serif] text-xl font-semibold text-[#191c1f] sm:min-w-[122px] h-[122px] w-[122px] cursor-pointer block box-border rounded-[1000px] border-[6px] border-solid border-[white]">
          $1999
        </Button>
      </div>
      <img src="/assets/image_f61941ce.png" className="h-[424px] max-md:w-[250px] max-md:h-[200px]  w-[536px] box-border block ml-[-94px] border-[none]" />
    </div>
    </div>
  );
}

export default ProductCardView1;
