import xlo from "../assets/Xlog.png"
function CardCar({img , tite , price}) {
    return(
        <>
            <div className='flex pt-7 justify-center items-center gap-10'>
                <div className='w-[80px] border-2  h-[84px]'> <img className='w-[80px]  bg-cover h-[80px]' src={img}/></div>
                <div>
                    <h1 className='w-[200px] h-[40px]  font-semibold text-sm'>{tite}</h1>
                    <h1 className='text-sm pt-2'>x * <span className='text-[#2DA5F3] font-bold'>$ {price}</span></h1>
                </div>
                <button className='w-[16px] h-[16px] justify-center flex items-center'><img src={xlo}/></button>
            </div>
        </>
    )
}
export default CardCar