import DiscountOfferWidget from "../DiscountOfferWidget";
import ProductDescriptionWidget6 from "../ProductDescriptionWidget6";

function ProductCardWidget7() {
  return (
    <div className="border bg-[white] box-border min-w-[234px] grow-0 shrink-0 basis-auto pt-3 pb-4 px-3 rounded-[3px] border-solid border-[#e4e7e9]">
      <DiscountOfferWidget />
      <div className="flex justify-start items-center flex-row mt-4 px-[2.5px]">
        <img src="/assets/image_ad26471a.png" alt="" className="h-3.5 max-w-[initial] w-[77px] block box-border" />
        <p className="[font-family:'Public_Sans',sans-serif] text-xs font-normal text-[#77878f] grow-0 shrink-0 basis-auto ml-[3.75px] m-0 p-0">(877)</p>
      </div>
      <ProductDescriptionWidget6 />
      <div className="flex justify-start items-center flex-row mt-2 px-[3px]">
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal line-through text-[#929fa5] grow-0 shrink-0 basis-auto m-0 p-0">$1600</p>
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2da5f3] grow-0 shrink-0 basis-auto ml-0.5 m-0 p-0">$1,200</p>
      </div>
    </div>
  );
}

export default ProductCardWidget7;
