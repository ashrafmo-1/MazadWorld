import Header from "./Header";
import Footer from "./Footer";
import Aro from "../img/ArrowRight.svg";
import React from "react";
import Google from "../img/Google.png";
import Apple from "../img/Apple.png";

function SignUp() {
    return (<>
            <Header/>
            <div className='flex   items-center justify-center  pt-4 pb-28 sm:my-[20px]'>
                <div className='w-[424px]  max-sm:w-[300px] shadow-2xl pb-10 mt-10   '>
                    <div className='text-xl font-semibold'>
                        <button className='w-[212px] max-sm:w-[150px] h-[60px] text-[#77878F]'>
                            Sign In
                        </button>
                        <button className='w-[212px] max-sm:w-[150px] h-[60px] border-b-4 border-[#FA8232]'>
                            Sign Up
                        </button>
                    </div>

                    <div className='  flex flex-col justify-center items-center  '>
                        <div>
                            <div className='flex justify-start  gap-44 py-4 '>
                                <h1>Name</h1>
                            </div>
                            <input type='text'
                                   className='border  w-[360px]  max-sm:w-[280px] h-[44px] justify-center flex rounded px-3   '/>
                        </div>
                    </div>
                    <div className='  flex flex-col justify-center items-center  '>
                        <div>
                            <div className='flex justify-start  gap-44 py-4 '>
                                <h1>Email Address</h1>
                            </div>
                            <input type='email'
                                   className='border  w-[360px]  max-sm:w-[280px] h-[44px] justify-center flex rounded  px-3   '/>
                        </div>
                    </div>
                    <div className='  flex flex-col  pl-9  max-sm:pl-3 '>
                        <div className='flex  items-start justify-start text-start max-sm:gap-20 py-4   '>
                            <h1>Password</h1>
                        </div>
                        <input type='password' placeholder='8+ characters'
                               className='border  w-[360px]  max-sm:w-[280px] h-[44px] justify-center flex rounded px-3'/>
                    </div>
                    <div className='  flex flex-col  pl-9  max-sm:pl-3   '>
                        <div className='flex  items-start justify-start text-start max-sm:gap-20 py-4   '>
                            <h1>Confirm Password</h1>
                        </div>
                        <input type='password'
                               className='border  w-[360px]  max-sm:w-[280px] h-[44px] justify-center flex rounded px-3'/>
                    </div>
                    <div className='pl-9  max-sm:pl-3   pt-3 flex gap-3 items-center'>
                        <div><input type='checkbox' /></div>
                        <div>                        Are you agree to Clicon <span className='text-blue-700'>Terms of Condition</span> and <span className='text-blue-700'>Privacy Policy </span>.
                        </div>
                    </div>
                    <div className='bg-white h-[48px] mt-8  mx-auto w-[360px]  max-sm:w-[280px]  '>
                        <button
                            className='bg-[#FA8232] h-[48px] w-[360px]  max-sm:w-[280px] flex justify-center items-center gap-1 text-sm font-semibold text-white text-center  uppercase  rounded'> Sign up <img
                                src={Aro}/></button>


                    </div>
                    <div className='flex items-center justify-center pt-2  text-sm font-normal text-[#77878F]'>or</div>
                    <div
                        className='w-[360px] max-sm:w-[280px]  flex flex-col rounded justify-center items-center gap-4 mx-auto pt-3'>
                        <button
                            className='w-[360px] max-sm:w-[280px] rounded h-[44px] border-2 border-[#E4E7E9] text-sm font-normal '>
                            <div className='flex justify-start gap-24 px-3  items-start'>
                                <img src={Google} className='flex '/> <span>Login with Google</span>
                            </div>
                        </button>
                        <button
                            className='w-[360px] max-sm:w-[280px] rounded h-[44px] border-2 border-[#E4E7E9] text-sm font-normal '>
                            <div className='flex justify-start gap-24 px-2  items-start'>
                                <img src={Apple} className='flex '/> <span>Login with Apple</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        <Footer/>

    </>)
}

export default SignUp