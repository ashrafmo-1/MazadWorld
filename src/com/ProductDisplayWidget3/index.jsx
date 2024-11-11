import DiscountBanner2 from "../DiscountBanner2";
import ProductDescriptionComponent1 from "../ProductDescriptionComponent1";

function ProductDisplayWidget3({
  renderComponentOrImage1,
  renderComponentOrText1,
  shouldApplyDiscount1,
  imgContent29,
  imgContent28,
  imgContent31,
  productDescriptionCount3,
  renderContentBasedOnCondition1,
  determinePriceDisplayStyle1,
  productDescriptionOrTitle3,
  productPriceRange1,
  productPriceDiscounted1,
  containerWidthSpecifier1,
  containerWidthConstraint1,
  imgHeight5,
}) {
  return (
    <div
      className="border bg-[white] box-border flex justify-center items-stretch flex-col gap-2 grow-0 shrink-0 basis-auto pt-3 pb-4 px-3 rounded-[3px] border-solid border-[#e4e7e9]"
      style={{ maxWidth: containerWidthSpecifier1, minWidth: containerWidthConstraint1 }}
    >
      {renderComponentOrImage1 ? (
        <DiscountBanner2 imgContent31={imgContent31} />
      ) : (
        <img className="h-[172px] max-w-[initial] object-cover box-border block grow-0 shrink-0 basis-auto border-[none]" src={imgContent28} />
      )}
      <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto mt-4 px-[2.5px]">
        <img alt="" className="max-w-[initial] w-[77px] block box-border" style={{ height: imgHeight5 }} src={imgContent29} />
        <p className="[font-family:'Public_Sans',sans-serif] text-xs font-normal text-[#77878f] whitespace-pre-wrap grow-0 shrink-0 basis-auto ml-[3.75px] m-0 p-0">{productDescriptionCount3}</p>
      </div>
      {renderComponentOrText1 ? (
        <ProductDescriptionComponent1 productDescriptionOrTitle3={productDescriptionOrTitle3} />
      ) : (
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal text-left leading-5 text-[#191c1f] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0">
          {renderContentBasedOnCondition1}
        </p>
      )}
      {shouldApplyDiscount1 ? (
        <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto px-[3px]">
          <p className="[font-family:'Public_Sans',sans-serif] text-sm font-normal line-through text-[#929fa5] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0">{productPriceRange1}</p>
          <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2da5f3] whitespace-pre-wrap grow-0 shrink-0 basis-auto ml-0.5 m-0 p-0">{productPriceDiscounted1}</p>
        </div>
      ) : (
        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2da5f3] whitespace-pre-wrap grow-0 shrink-0 basis-auto m-0 p-0">{determinePriceDisplayStyle1}</p>
      )}
    </div>
  );
}

export default ProductDisplayWidget3;
