import { urlFor } from '@/sanity/lib/image'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface Data {
    title: string,
    content: string,
    meta_description: string,
    category: { name: string },
    tags: string[],
    image: SanityImageSource,
    slug: {current: string}
}
// 
const BlogCard = ({ data }: { data?: Data | undefined }) => {
    return (
        <>
            {data &&
                <div className='bg-white w-full dark:bg-[#181A2A] rounded-md flex flex-col items-start gap-y-3 border border-gray-200 dark:border-[#242535]  p-5'>
                    <Image src={urlFor(data.image).url()} width={360} height={240} alt='blog' className='rounded-md object-cover h-1/2' />
                    <div className='p-3 flex flex-col gap-y-3'>
                        <span className='text-asmani px-2 rounded-md'>{data.category.name}</span>
                        <Link href={`/blog/${data.slug.current}`}><h2 className='text-dark dark:text-white font-semibold text-2xl hover:text-asmani transition-colors duration-150 line-clamp-2'>{data.title}</h2></Link>
                        <p className='text-sm text-gray-400 line-clamp-3'>{data.meta_description}</p>
                        <div className='flex justify-start items-center gap-3'>
                            <Image className=' rounded-full' src={"/user.jpg"} alt={'user'} width={40} height={40} />
                            <h5 className='text-gray-500 dark:text-gray-300 font-semibold text-sm'>Sarfaraz Unar</h5>
                            <p className='text-gray-500 dark:text-gray-300 text-sm'>16th December 2024</p>
                        </div>
                    </div>
                </div>
             }
        </>
    )
}

export default BlogCard
