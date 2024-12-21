import { Data } from '@/app/components/BlogCard';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleBlog = async ({ params }: { params: { slug: string } }) => {
    let data: Data | string = "";
        try {
            const res = await client.fetch(`*[_type == "blog" && slug.current == "${params.slug}"]{
                title,
                slug,
                category->{
                  name
                },
                tags,
                image,
                content, meta_description
              }[0]`)
              data = res;
        } catch (error) {
              data = "Failed to Load Data!"
        }
    console.log(data);
          
    return (
        <>
       {typeof data !== "string" && <div className='w-full px-40 py-10 flex flex-col justify-center items-center gap-y-10'>
            <div className='p-3 flex flex-col gap-y-4'>
                <span className='px-2 rounded-md bg-asmani text-white w-min p-1'>{data.category.name}</span>
                <Link href={`/blog/${data.slug.current}`}><h2 className='text-dark dark:text-white font-semibold text-4xl'>{data.title}</h2></Link>
                <div className='flex justify-start items-center gap-3'>
                    <Image className=' rounded-full' src={"/user.jpg"} alt={'user'} width={40} height={40} />
                    <h5 className='text-gray-500 dark:text-gray-300 font-semibold text-sm'>Sarfaraz Unar</h5>
                    <p className='text-gray-500 dark:text-gray-300 text-sm'>16th December 2024</p>
                </div>
            </div>
            <Image src={urlFor(data.image).url()} alt='hero' width={800} height={460} className='object-cover px-20 object-center rounded-md w-full' />

            <div id='content'>
                {data.meta_description}
            </div>
        </div>}
        {typeof data === "string" && <div className='flex w-full h-screen justify-center items-center'>
            <h1 className='text-4xl text-white font-semibold'>{data}</h1></div>}
        </>
    )
}

export default SingleBlog
