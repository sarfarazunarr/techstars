import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import React from 'react'

const Hero = async () => {
  const res = await client.fetch(`*[_type=="blog"]{title, category -> {name}}[0]`);

  return (
    <div className='md:mx-20 rounded-md h-[500px] md:p-10 bg-no-repeat bg-center bg-cover relative' style={{backgroundImage: "url('./hero.png')"}}>
      {res && <div className='bg-white dark:bg-gray-900 rounded-md p-10 flex flex-col items-start gap-y-3 w-full md:w-[595px] shadow-sm shadow-gray-700 absolute -bottom-20'>
        <span className='bg-asmani text-white px-3 rounded-md '>{res.category.name}</span>
        <h2 className='text-dark dark:text-white font-semibold text-xl md:text-3xl'>{res.title}</h2>
        <div className='flex flex-col md:flex-row justify-start items-center gap-3'>
          <div className='flex justify-start items-center gap-3'>
          <Image className=' rounded-full' src={"/user.jpg"} alt={'user'} width={40} height={40} />
          <h5 className='text-gray-500 dark:text-gray-300 font-semibold text-sm'>Sarfaraz Unar</h5>
          </div>
          <p className='text-gray-500 dark:text-gray-300'>16th December 2024</p>
        </div>
      </div>}
    </div>
  )
}

export default Hero
