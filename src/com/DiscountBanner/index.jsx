function DiscountBanner() {
  return (
    <div className="flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto pl-[17px] pr-[18px]">
      <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-center text-[#be4646] grow-0 shrink-0 basis-auto ml-3.5 mr-[13px] m-0 p-0">COMPUTER &amp; ACCESSORIES</p>
      <p className="[font-family:'Public_Sans',sans-serif] text-[32px] font-semibold text-center text-[#191c1f] grow-0 shrink-0 basis-auto ml-3.5 mr-[13px] mt-2 m-0 p-0">32% Discount</p>
      <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-center text-[#475156] grow-0 shrink-0 basis-auto ml-3.5 mr-[13px] mt-3 m-0 p-0">For all ellectronics products</p>
      <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto mt-4">
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-medium text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">Offers ends in:</p>
        <div className="bg-[white] box-border flex justify-center items-stretch flex-col h-8 grow-0 shrink-0 basis-auto ml-[7px] px-[11px] rounded-sm">
          <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">ENDS OF CHRISTMAS</p>
        </div>
      </div>
    </div>
  );
}

export default DiscountBanner;
