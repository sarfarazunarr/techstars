import { client } from '@/sanity/lib/client'
import React from 'react'
import BlogCard, { Data } from '../components/BlogCard'

const BlogPage = async () => {
    const res: Data[] = await client.fetch(`*[_type == 'blog']{title, meta_description, category -> {name}, image, slug}`)
    return (
        <div className='w-full py-20'>
            <div className='px-5 md:px-20'>
                <h3 className='text-4xl font-semibold text-white'>All Blogs</h3>
                <p className='text-gray-300 text-sm'>Here you will see all blogs!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-40 px-2 md:px-20 gap-5">
                {res.map((blog: Data, index: number) => (
                    <BlogCard key={index} data={blog} />
                ))}
            </div>
        </div>
    )
}

export default BlogPage
