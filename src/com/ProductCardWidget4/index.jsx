import ProductPromotionWidget from "../ProductPromotionWidget";
import ProductDescriptionComponent2 from "../ProductDescriptionComponent2";

function ProductCardWidget4({
  shouldRenderComponent5,
  renderComponentOrText3,
  imgContent14,
  imgContent13,
  imgContent16,
  productPrice3,
  productCountOrDescription1,
  productDescription5,
  productDescription8,
  containerWidthConstraint3,
  containerWidthConstraint7,
  dynamicPaddingAmount1,
  dynamicPaddingAmount3,
}) {
  return (
    <div
      className="border bg-[white] box-border flex justify-center items-stretch flex-col gap-2 grow-0 shrink-0 basis-auto pt-3 pb-4 px-3 rounded-[3px] border-solid border-[#e4e7e9]"
      style={{ minWidth: containerWidthConstraint7, maxWidth: containerWidthConstraint3 }}
    >
      {shouldRenderComponent5 ? (
        <ProductPromotionWidget imgContent16={imgContent16} />
      ) : (
        <img className="h-[172px] max-w-[initial] object-cover box-border block grow-0 shrink-0 basis-auto border-[none]" src={imgContent13} />
      )}
      <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto mt-4 px-[2.5px]">
        <img alt="" className="h-3.5 max-w-[initial] w-[78px] block box-border" src={imgContent14} />
        <p className="[font-family:'Public_Sans',sans-serif] text-xs font-normal text-[#77878f] whitespace-pre-wrap grow-0 shrink-0 basis-auto ml-[3.75px] m-0 p-0">{productCountOrDescription1}</p>
      </div>
      {renderComponentOrText3 ? (
        <ProductDescriptionComponent2 productDescription8={productDescription8} />
      ) : (
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-left leading-5 text-[#191c1f] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0">{productDescription5}</p>
      )}
      <p
        className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2da5f3] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0"
        style={{ paddingLeft: dynamicPaddingAmount1, paddingRight: dynamicPaddingAmount3 }}
      >
        {productPrice3}
      </p>
    </div>
  );
}

export default ProductCardWidget4;
