function TimeDisplayWidget() {
  return (
    <div className=" max-sm:hidden bg-[#f3de6d] box-border flex justify-center items-center flex-row gap-1 h-9 grow-0 shrink-0 basis-auto ml-[11px] px-[11px] rounded-sm">
      <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">16d</p>
      <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">:</p>
      <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">21h</p>
      <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">:</p>
      <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">57m</p>
      <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">:</p>
      <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">23s</p>
    </div>
  );
}

export default TimeDisplayWidget;
