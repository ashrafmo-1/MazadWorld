import Header from "./Header";
import Footer from "./Footer";
import Aro from "../img/ArrowRight.svg";
import React from "react";
import Google from "../img/Google.png";
import Apple from "../img/Apple.png";

function ForgetPassword() {
    return (
        <>
            <Header/>
            <div className='flex   items-center justify-center  pt-4 pb-28 sm:my-[20px]'>
                <div className='w-[424px] h-[504px] max-sm:w-[300px] shadow-2xl pb-10 mt-10  text-xl font-semibold '>
                    <div
                        className=' min-h-[80px] flex justify-center flex-col items-center text-center  mx-auto w-[360px] max-sm:w-[280px] pt-3'>
                        <h1 className='text-center py-1 text-xl font-semibold'>
                            Forget Password
                        </h1>
                        <p className='text-[#5F6C72] font-normal text-sm pt-1'>
                            Enter the email address or mobile phone number associated with your Clicon account.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center sm:pl-7  max-sm:pl-2'>
                        <div className='flex justify-start font-normal text-sm gap-44 py-4 '>
                            <h1>Email Address</h1>
                        </div>
                        <input type='email'
                               className='border  w-[360px]  max-sm:w-[280px] h-[44px] justify-center flex rounded px-2   '/>
                    </div>
                    <div className='bg-white h-[48px] mt-8  mx-auto w-[360px]  max-sm:w-[280px]  '>
                        <button
                            className='bg-[#FA8232] h-[48px] w-[360px]  max-sm:w-[280px] flex justify-center items-center gap-1 text-sm font-semibold text-white text-center  uppercase  rounded'> Send
                            Code <img
                                src={Aro}/></button>


                    </div>
                    <div className='flex flex-col text-sm text-[#5F6C72] pl-7 max-sm:pl-3 pt-4 gap-2'>
                        <div> Already have account? <button className='text-[#2DA5F3]'>Sign In</button></div>
                        <div> Don’t have account? <button className='text-[#2DA5F3]'>Sign Up</button></div>
                    </div>
                    <hr className='border-[#E4E7E9] border max-w-[359px] max-sm:w-[250px]    mx-auto  mt-4'/>
<div className='text-sm text-[#A3A7AA] pl-7 max-sm:pl-3  max-sm:w-[280px] w-[360px] pt-2'>
    You may contact Customer Service for help restoring access to your account.

</div>                </div>

            </div>
            <Footer/>

        </>
    )
}

export default ForgetPassword