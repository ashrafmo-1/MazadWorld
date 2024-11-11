import MainSlider from "../slider1.jsx";

function ShopCategoryDisplay() {
    return (
        <div className="flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto px-[35px]">
            <p className="[font-family:'Public_Sans',sans-serif] text-[32px] max-md:text-lg font-semibold text-center text-[#191c1f] grow-0 shrink-0 basis-auto mx-[23px] m-0 ">Shop
                with Categorys</p>
            <div className="flex justify-center gap-4 mt-10">
               <MainSlider/>
            </div>
        </div>
    );
}

export default ShopCategoryDisplay;
