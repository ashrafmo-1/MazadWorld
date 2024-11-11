import ProductPromoCard from "../ProductPromoCard";
import ProductDescriptionComponent3 from "../ProductDescriptionComponent3";

function ProductCardBuilder({
  shouldRenderComponent3,
  renderAdditionalContent1,
  imgContent19,
  imgContent18,
  imgContent21,
  productPrice1,
  productDescriptionCount1,
  renderContentBasedOnCondition3,
  productDescription9,
  containerWidthOrMinWidth1,
  containerWidthConstraints1,
  imgHeight3,
  dynamicPaddingSpacing1,
  paddingRightValue3,
}) {
  return (
    <div
      className="border bg-[white] box-border flex justify-center items-stretch flex-col gap-2 grow-0 shrink-0 basis-auto pt-3 pb-4 px-3 rounded-[3px] border-solid border-[#e4e7e9]"
      style={{ maxWidth: containerWidthOrMinWidth1, minWidth: containerWidthConstraints1 }}
    >
      {shouldRenderComponent3 ? (
        <ProductPromoCard imgContent21={imgContent21} />
      ) : (
        <img className="h-[172px] max-w-[initial] object-cover box-border block grow-0 shrink-0 basis-auto border-[none]" src={imgContent18} />
      )}
      <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto mt-4 px-[2.5px]">
        <img alt="" className="max-w-[initial] w-[77px] block box-border" style={{ height: imgHeight3 }} src={imgContent19} />
        <p className="[font-family:'Public_Sans',sans-serif] text-xs font-normal text-[#77878f] whitespace-pre-wrap grow-0 shrink-0 basis-auto ml-[3.75px] m-0 p-0">{productDescriptionCount1}</p>
      </div>
      {renderAdditionalContent1 ? (
        <ProductDescriptionComponent3 productDescription9={productDescription9} />
      ) : (
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-left leading-5 text-[#191c1f] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0">
          {renderContentBasedOnCondition3}
        </p>
      )}
      <p
        className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2da5f3] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0"
        style={{ paddingLeft: dynamicPaddingSpacing1, paddingRight: paddingRightValue3 }}
      >
        {productPrice1}
      </p>
    </div>
  );
}

export default ProductCardBuilder;
