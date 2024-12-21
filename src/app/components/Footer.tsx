import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full px-40 py-10 mt-20 bg-[#F6F6F7] dark:bg-[#141624]'>
            <div className='grid grid-cols-3 gap-10'>
                <div className='flex flex-col justify-start items-start gap-y-3'>
                    <h4 className='font-semibold text-[#181A2A] text-lg dark:text-white'>About Us</h4>
                    <p className='text-[#696A75] font-normal dark:text-[#97989F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div>
                        <p className='text-[#696A75] font-normal dark:text-[#97989F]'><span className='font-semibold text-[#181A2A] dark:text-white'>Email:</span> info@jstemplate.net</p>
                        <p className='text-[#696A75] font-normal dark:text-[#97989F]'><span className='font-semibold text-[#181A2A] dark:text-white'>Phone:</span> +880 123 456 789</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-20'>
                    <div className='flex flex-col justify-start items-start gap-y-3'>
                        <h4 className='font-semibold text-[#181A2A] text-lg dark:text-white'>Quick Links</h4>
                        <div className='flex flex-col gap-y-1'>
                            <Link href={"/"} className='text-[#696A75] font-normal dark:text-[#97989F]'>Home</Link>
                            <Link href={"/"} className='text-[#696A75] font-normal dark:text-[#97989F]'>About</Link>
                            <Link href={"/"} className='text-[#696A75] font-normal dark:text-[#97989F]'>Blog</Link>
                            <Link href={"/"} className='text-[#696A75] font-normal dark:text-[#97989F]'>Archived</Link>
                            <Link href={"/"} className='text-[#696A75] font-normal dark:text-[#97989F]'>Author</Link>
                            <Link href={"/"} className='text-[#696A75] font-normal dark:text-[#97989F]'>Contact</Link>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-y-3'>
                        <h4 className='font-semibold text-[#181A2A] text-lg dark:text-white'>Quick Links</h4>
                        <div className='flex flex-col gap-y-1'>
                            <Link href={"/"} className='text-[#696A75] font-normal dark:text-[#97989F]'>Home</Link>
                            <Link href={"/"} className='text-[#696A75] font-normal dark:text-[#97989F]'>About</Link>
                            <Link href={"/"} className='text-[#696A75] font-normal dark:text-[#97989F]'>Blog</Link>
                            <Link href={"/"} className='text-[#696A75] font-normal dark:text-[#97989F]'>Archived</Link>
                            <Link href={"/"} className='text-[#696A75] font-normal dark:text-[#97989F]'>Author</Link>
                            <Link href={"/"} className='text-[#696A75] font-normal dark:text-[#97989F]'>Contact</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='bg-white dark:bg-[#242535] px-4 py-6 rounded-md flex flex-col justify-center items-center gap-4'>
                        <div>
                            <h4 className='font-semibold text-[#181A2A] dark:text-white text-xl text-center'>Weekly Newsletter!</h4>
                            <p className='text-[#696A75] font-normal dark:text-[#97989F] text-center'>Get blog articles and offers via email</p>
                        </div>
                        <div>
                            <input type="email" placeholder='Email Address' className='px-3 py-2 rounded-md w-full border border-gray-400 outline-none' />
                            <button className='bg-asmani text-white px-3 py-2 rounded-md w-full mt-3'>Subscribe</button>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
