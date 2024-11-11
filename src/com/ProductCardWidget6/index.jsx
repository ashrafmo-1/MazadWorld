import ProductPromoWidget from "../ProductPromoWidget";
import ProductDescriptionWidget4 from "../ProductDescriptionWidget4";

function ProductCardWidget6() {
  return (
    <div className="border bg-[white] box-border min-w-[234px] grow-0 shrink-0 basis-auto pt-3 pb-4 px-3 rounded-[3px] border-solid border-[#e4e7e9]">
      <ProductPromoWidget />
      <div className="flex justify-start items-center flex-row mt-4 px-[2.5px]">
        <img src="/assets/image_db8c561e.png" alt="" className="h-[12.5px] max-w-[initial] w-[77px] block box-border" />
        <p className="[font-family:'Public_Sans',sans-serif] text-xs font-normal text-[#77878f] grow-0 shrink-0 basis-auto ml-[3.75px] m-0 p-0">(583)</p>
      </div>
      <ProductDescriptionWidget4 />
      <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2da5f3] mt-2 m-0 px-[3px] p-0">$220</p>
    </div>
  );
}

export default ProductCardWidget6;
