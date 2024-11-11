import {Button} from "@mui/base";
import SvgIcon1 from "../StylishConsolePromo/icons/SvgIcon1.jsx";

function ProductDisplaySection1() {
  return (
      <div
          className="bg-[#f2f4f5] box-border flex justify-center items-end flex-row grow-0 shrink basis-[872px] pl-[55px] pr-[50px] pt-[52px] pb-14 rounded-md">
          <div className="grow-0 shrink basis-auto pt-[88px]">
              <div>
                  <div className=" box-border">
                      <div className="flex justify-start items-center flex-row">
                          <div
                              className="w-[26px] grow-0 shrink-0 basis-auto box-border border-t-2 border-t-[#2da5f3] border-solid"/>
                          <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#2484c2] grow-0 shrink-0 basis-auto ml-1.5 m-0 p-0">THE
                              BEST PLACE TO PLAY</p>
                      </div>
                      <p className="[font-family:'Public_Sans',sans-serif] text-5xl font-semibold leading-[56px] text-[#191c1f] mt-1 m-0 p-0">Xbox
                          Consoles</p>
                      <p className="[font-family:'Public_Sans',sans-serif] text-lg font-normal text-left leading-6 text-[#475156] w-[100.00%] box-border mt-4 m-0 p-0">
                          Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
                      </p>
                      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
                      <Button
                          className="bg-[#fa8232] [font-family:'Public_Sans',sans-serif] text-base font-bold tracking-[0.19px] uppercase text-[white] min-w-[191px] h-14 w-[191px] cursor-pointer inline-flex items-center justify-center gap-3.5 box-border mt-6 rounded-[3px] border-[none]">
                          Shop Now
                          <SvgIcon1 className="w-[18px] h-[18px] flex"/>
                      </Button>
                  </div>
              </div>
              <div className="mt-[90px]">
                  <img src="/assets/image_447152b3.png" alt=""
                       className="h-2.5 max-w-[initial] w-[46px] block box-border"/>
              </div>
          </div>
          <div className="flex justify-center items-start flex-row grow-0 shrink-0 basis-auto ml-[35px]">
              <img src="/assets/image_5ef9f7f2.png"
                   className="h-[408px] max-w-[initial] object-contain w-[368px] box-border block border-[none]"/>
              <div className="ml-[-103px] grow-0 shrink-0 basis-auto pb-[304px]">
                  <div
                      className=" items-center  justify-center flex bg-[#2da5f3] [font-family:'Public_Sans',sans-serif] text-[22px] font-semibold text-[white] min-w-[109px] h-[108px] w-[109px] cursor-pointer       box-border rounded-[100px] border-4 border-solid border-[white]">
                      $299
                  </div>
              </div>
          </div>
      </div>
  );
}

export default ProductDisplaySection1;
