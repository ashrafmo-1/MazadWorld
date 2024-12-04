import Qstog from "./qstog";
import Navgit from "../navgbar";
import 'primeicons/primeicons.css';

function Qs (){
    return(
        <>
            <Navgit/>
                <div className='flex justify-start px-52 pt-3 gap-44 py-20 max-sm:flex-col '>
                    < div className='items-center  justify-center flex-col gap-4 flex p-6'>
                        <Qstog tit={"ho"} head={"Suspendisse ultrices pharetra libero sed interdum."}/>
                        <Qstog tit={"Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus."} head={"Fusce molestie condimentum facilisis."}/>
                        <Qstog tit={"ho"} head={"Quisque quis nunc quis urna tempor lobortis vel non orci. "}/>
                        <Qstog tit={"ho"} head={"Donec rutrum ultrices ante nec malesuada. In accumsan eget nisi a rhoncus."}/>
                        <Qstog tit={"ho"} head={"Nulla sed sapien maximus, faucibus massa vitae."}/>
                    </div>
                    <div className='bg-[#FBF4CE]  flex flex-col items-center   min-h-[456px] w-[424px]'>
                    <div className=' flex flex-col items-start gap-5 pt-7   w-[360px]'>
<h1 >Don’t find your answer, Ask for support.</h1>
                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis primis in faucibu raesent eget sem purus.</p>
                        <form className='flex flex-col gap-7 w-[360px] text-[14px] '>
                            <input required={true} placeholder='email' type='email' className='h-[44px]  pl-[16px] py-[12px] '/>
                            <input required={true} placeholder='Subject' type='text' className='h-[44px]  pl-[16px] py-[12px]'/>
                            <textarea required={false} placeholder='Message (Optional)'      className='min-h-[88px] pl-[16px] pt-[12px]'/>
                            <button type={"submit"} className='py-5 mb-7  w-[191px]  bg-[#FA8232] text-white flex items-center justify-center'>Send message<i className="pi  pi-arrow-right px-4" style={{ fontSize: '1rem'  }}></i> </button>
                        </form>
                    </div>
                    </div>
                </div>
        </>
    )
}
export default Qs;