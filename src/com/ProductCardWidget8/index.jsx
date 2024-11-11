import ProductGalleryWidget from "../ProductGalleryWidget";

function ProductCardWidget8() {
  return (
    <div className="border shadow-[0px_8px_24px_rgba(25,28,31,0.12)] bg-[white] box-border flex justify-start items-stretch flex-col gap-2 max-w-[234px] grow-0 shrink-0 basis-auto pt-3 pb-4 px-3 rounded-[3px] border-solid border-[#c9cfd2]">
      <ProductGalleryWidget />
      <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto mt-4 px-[2.5px]">
        <img src="/assets/image_db8c561e.png" alt="" className="h-[12.5px] max-w-[initial] w-[77px] block box-border" />
        <p className="[font-family:'Public_Sans',sans-serif] text-xs font-normal text-[#77878f] grow-0 shrink-0 basis-auto ml-[3.75px] m-0 p-0">(426)</p>
      </div>
      <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-left leading-5 text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">
        Dell Optiplex 7000x7480 All-in-One Computer Monitor
      </p>
      <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2da5f3] grow-0 shrink-0 basis-auto m-0 p-0">$250</p>
    </div>
  );
}

export default ProductCardWidget8;
