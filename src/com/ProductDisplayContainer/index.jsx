import DiscountBanner from "../DiscountBanner";
import ShopSection from "../ShopSection";

function ProductDisplayContainer() {
  return (
    <div className="bg-[#f3de6d] max-xl:hidden box-border flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto pt-8 rounded-[3px]">
      <DiscountBanner />
      <ShopSection />
    </div>
  );
}

export default ProductDisplayContainer;
