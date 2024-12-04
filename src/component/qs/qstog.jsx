import React from 'react';
import plus from '../../img/Plus.svg';
import ni from '../../img/mins.svg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';

 function Qstogil({ head, tit }) {
    return (
        <Accordion
            allowZeroExpanded
            className=" w-[760px]  flex flex-col gap-4"
        >
            <AccordionItem
                className=" w-[760px] border min-h-[80px] flex flex-col justify-center items-end  rounded-lg"
            >
                <AccordionItemHeading>
                    <AccordionItemState>
                        {({ expanded }) => (
                            <AccordionItemButton
                                className={` w-[760px] border min-h-[80px]  flex  items-center justify-between px-4 gap-4          rounded-lg${
                                    expanded ? 'pt-4  bg-[#FA8232]' : ''
                                }`}
                            >
                                <div className="   max-sm:max-w-[250px]">{head}</div>
                                <img
                                    src={expanded ? ni : plus}
                                        className={`transition-transform  mr-2 ${
                                        expanded ? 'rotate-180' : ''
                                    }`}
                                    alt="icon"
                                />
                            </AccordionItemButton>
                        )}
                    </AccordionItemState>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div
                        className="  flex items-start justify-start text-start"
                        style={{ maxHeight: '500px' }}
                    >
                        <p className="text-sm text-[#777777] py-4  px-4  w-[750px]    flex  ">{tit}</p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}
export default Qstogil