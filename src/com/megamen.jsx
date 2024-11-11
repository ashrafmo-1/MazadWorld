import React, {useState} from 'react';

const MegaMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMouseEnter = () => setIsMenuOpen(true);
    const handleMouseLeave = () => setIsMenuOpen(false);

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className=' flex bg-[#F2F4F5]  items-center justify-center font-medium text-xm h-[48px] w-[154px] hover:bg-[#FA8232] max-sm:hover:hover:bg-[#1B6392] max-sm:bg-[#1B6392]  '>
                All Category
                <img className='flex w-[24px] h-[24px] max-sm:w-[24px] max-sm:h-[18px]  pl-1' src='/src/img/CaretDown.svg' />
            </button>
            {isMenuOpen && (
                <div className="absolute left-0 top-full bg-white shadow-lg p-3 text-sm h-[420px] w-[240px] max-sm:bg-[#2281bf] max-sm:w-[200px] max-sm:pt-2  ">
                    <div>
                        <ul className=' '>
                            <li className='p-2'>Computer & Laptop</li>
                            <li className='p-2'>Computer Accessories</li>
                            <li className='p-2'>SmartPhone</li>
                            <li className='p-2'>Headphone</li>
                            <li className='p-2'>Mobile Accessories</li>
                            <li className='p-2'> Gaming Console</li>
                            <li className='p-2'>Camera & Photo</li>
                            <li className='p-2'>TV & Homes Appliances</li>
                            <li className='p-2' >Watchs & Accessories</li>
                            <li className='p-2'>GPS & Navigation</li>
                            <li className='p-2' >Warable Technology</li>
                        </ul>
                    </div>

                </div>
            )}
        </div>
    );
};

export default MegaMenu;
