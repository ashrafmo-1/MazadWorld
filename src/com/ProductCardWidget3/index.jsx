function ProductCardWidget3({ imgContent32, productDescriptionOrName, productPriceText2 }) {
  return (
    <div className="border bg-[white] box-border flex justify-center items-center flex-row w-[100.00%] h-[104px] pl-3 pr-[11px] rounded-[3px] border-solid border-[#e4e7e9] first:mt-0 mt-[16.00px]">
      <img className="h-20 max-w-[initial] object-cover w-20 box-border block border-[none]" src={imgContent32} />
      <div className="grow-0 shrink basis-auto ml-[11px] py-[18px]">
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-left leading-5 text-[#191c1f] whitespace-pre-wrap w-[100.00%] box-border m-0 p-0">{productDescriptionOrName}</p>
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2da5f3] whitespace-pre-wrap mt-2 m-0 p-0">{productPriceText2}</p>
      </div>
    </div>
  );
}

export default ProductCardWidget3;
