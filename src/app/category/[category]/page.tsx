import React from 'react'
import BlogCard, { Data } from '../../components/BlogCard'
import { client } from '@/sanity/lib/client'

const CategoryBlog = async ({ params }: { params: { category: string } }) => {
    const categoryValue = params.category.replace('%20', ' ');
    const res: Data[] = await client.fetch(`*[_type == 'blog' && category->name == '${categoryValue.toLowerCase()}']{title, meta_description, category -> {name}, image, slug}`)
    return (
        <div className='w-full py-20'>
            <div className='px-5 md:px-20'>
                <h3 className='text-4xl font-semibold text-white'>Blogs of {categoryValue.toUpperCase()}</h3>
                <p className='text-gray-300 text-sm'>Here you will see all blogs of {categoryValue}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-40 px-2 md:px-20 gap-5">
                {res.map((blog: Data, index: number) => (
                    <BlogCard key={index} data={blog} />
                ))}
            </div>
        </div>
    )
}

export default CategoryBlog
