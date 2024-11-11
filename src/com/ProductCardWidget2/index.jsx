import ProductCard7 from "../ProductCard7";
import ProductDescriptionComponent from "../ProductDescriptionComponent";

function ProductCardWidget2({
  shouldRenderComponent1,
  renderAdditionalContent3,
  imgContent24,
  imgContent23,
  imgContent26,
  productPriceText1,
  productCountIdentifier1,
  productDescription7,
  productDescriptionTitle1,
  containerWidthStyle1,
  containerWidthConstraint5,
  imgHeight4,
  calculatePaddingDistance1,
  paddingRightValue1,
}) {
  return (
    <div
      className="border bg-[white] box-border flex justify-center items-stretch flex-col gap-2 grow-0 shrink-0 basis-auto pt-3 pb-4 px-3 rounded-[3px] border-solid border-[#e4e7e9]"
      style={{ minWidth: containerWidthConstraint5, maxWidth: containerWidthStyle1 }}
    >
      {shouldRenderComponent1 ? (
        <ProductCard7 imgContent26={imgContent26} />
      ) : (
        <img className="h-[172px] max-w-[initial] object-cover box-border block grow-0 shrink-0 basis-auto border-[none]" src={imgContent23} />
      )}
      <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto mt-4 px-[2.5px]">
        <img alt="" className="max-w-[initial] w-[77px] block box-border" style={{ height: imgHeight4 }} src={imgContent24} />
        <p className="[font-family:'Public_Sans',sans-serif] text-xs font-normal text-[#77878f] whitespace-pre-wrap grow-0 shrink-0 basis-auto ml-[3.75px] m-0 p-0">{productCountIdentifier1}</p>
      </div>
      {renderAdditionalContent3 ? (
        <ProductDescriptionComponent productDescriptionTitle1={productDescriptionTitle1} />
      ) : (
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-left leading-5 text-[#191c1f] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0">{productDescription7}</p>
      )}
      <p
        className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2da5f3] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0"
        style={{ paddingLeft: calculatePaddingDistance1, paddingRight: paddingRightValue1 }}
      >
        {productPriceText1}
      </p>
    </div>
  );
}

export default ProductCardWidget2;
