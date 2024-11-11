import HotItemsSection from "../HotItemsSection";
import ProductDescriptionWidget7 from "../ProductDescriptionWidget7";
import DiscountBanner3 from "../DiscountBanner3";
import ProductDescriptionWidget1 from "../ProductDescriptionWidget1";

function ProductDisplayWidget5() {
  return (
    <div className="border bg-[white] box-border flex justify-between items-start flex-row gap-[30px] grow-0 shrink-0 basis-auto -mt-px pt-[12.5px] pb-[16.5px] px-[15.5px] border-solid border-[#e4e7e9]">
      <div className="max-w-[218px] grow-0 shrink-0 basis-auto box-border pt-1">
        <img src="/assets/image_d83179e5.png" className="h-[188px] max-w-[initial] object-cover w-[100.00%] box-border block border-[none]" />
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-left leading-5 text-[#191c1f] w-[100.00%] box-border mt-2 m-0 p-0">
          Dell Optiplex 7000x7480 All-in-One Computer Monitor
        </p>
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2da5f3] mt-2 m-0 p-0">$299</p>
      </div>
      <div className="max-w-[218px] grow-0 shrink-0 basis-auto box-border pt-1">
        <img src="/assets/image_dbb1c37c.png" className="h-[188px] max-w-[initial] object-cover w-[100.00%] box-border block border-[none]" />
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-left leading-5 text-[#191c1f] w-[100.00%] box-border mt-2 m-0 p-0">
          Portable Wshing Machine, 11lbs capacity Model 18NMFIAM
        </p>
        <div className="flex justify-start items-center flex-row mt-2">
          <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal line-through text-[#929fa5] grow-0 shrink-0 basis-auto m-0 p-0">$865.99</p>
          <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2da5f3] grow-0 shrink-0 basis-auto ml-0.5 m-0 p-0">$70</p>
        </div>
      </div>
      <div className="min-w-[221px] grow-0 shrink-0 basis-auto box-border">
        <HotItemsSection />
        <ProductDescriptionWidget7 />
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2da5f3] mt-2 m-0 px-[3px] p-0">$160</p>
      </div>
      <div className="min-w-[221px] grow-0 shrink-0 basis-auto box-border">
        <DiscountBanner3 />
        <ProductDescriptionWidget1 />
        <div className="flex justify-start items-center flex-row mt-2 px-[3px]">
          <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal line-through text-[#929fa5] grow-0 shrink-0 basis-auto m-0 p-0">$360</p>
          <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2da5f3] grow-0 shrink-0 basis-auto ml-0.5 m-0 p-0">$250</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplayWidget5;
