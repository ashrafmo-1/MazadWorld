import {Button} from "@mui/base";

function ProductDisplayContainer() {
    return (
        <div
            className=" bg-[#f3de6d] max-xl:hidden box-border flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto pt-8 rounded-[3px]">
            <div className="flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto pl-[17px] pr-[18px]">
                <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-center text-[#be4646] grow-0 shrink-0 basis-auto ml-3.5 mr-[13px] m-0 p-0">COMPUTER &amp; ACCESSORIES</p>
                <p className="[font-family:'Public_Sans',sans-serif] text-[32px] font-semibold text-center text-[#191c1f] grow-0 shrink-0 basis-auto ml-3.5 mr-[13px] mt-2 m-0 p-0">32%
                    Discount</p>
                <p className="[font-family:'Public_Sans',sans-serif] text-base font-normal text-center text-[#475156] grow-0 shrink-0 basis-auto ml-3.5 mr-[13px] mt-3 m-0 p-0">For
                    all ellectronics products</p>
                <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto mt-4">
                    <p className="[font-family:'Public_Sans',sans-serif] text-sm font-medium text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">Offers
                        ends in:</p>
                    <div
                        className="bg-[white] box-border flex justify-center items-stretch flex-col h-8 grow-0 shrink-0 basis-auto ml-[7px] px-[11px] rounded-sm">
                        <p className="[font-family:'Public_Sans',sans-serif] text-sm font-semibold text-[#191c1f] grow-0 shrink-0 basis-auto m-0 p-0">ENDS
                            OF CHRISTMAS</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-start items-center flex-col grow-0 shrink-0 basis-auto mt-8">
                <Button
                    className="bg-[#fa8232] [font-family:'Public_Sans',sans-serif] text-base font-bold tracking-[0.19px] uppercase text-[white] min-w-[191px] h-14 w-[191px] cursor-pointer inline-flex items-center justify-center gap-3.5 box-border grow-0 shrink-0 basis-auto rounded-[3px] border-[none]">
                    Shop now
                    <div className="w-[18px]  flex  h-[18px] ">
                    <svg fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
                        <g id="Regular/ArrowRight_7" xmlns="http://www.w3.org/2000/svg"
                           data-node-id="I378:2011;285:749">
                            <path id="Vector_81" d="M0.75,9h16.5" stroke="white" strokeLinecap="round"
                                  strokeLinejoin="round" strokeWidth="2" data-node-id="I378:2011;285:749;279:12476"/>
                            <path id="Vector_82" d="M10.5,2.25l6.75,6.75l-6.75,6.75" stroke="white"
                                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  data-node-id="I378:2011;285:749;279:12477"/>
                        </g>
                    </svg>
            </div>
        </Button>
    <div className="grow-0 shrink-0 basis-auto mt-4">
        <img src="/assets/image_9d4b9722.jpeg" className=" h-[320px] box-border block bg-cover"/>
    </div>
</div>
</div>
)
    ;
}

export default ProductDisplayContainer;
