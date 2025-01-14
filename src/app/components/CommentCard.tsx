"use client";
import { client } from '@/sanity/lib/client';
import React, { FormEvent, useEffect, useState } from 'react'

interface CommentType {
    _type: string, _id: string, name: string, email: string, comment: string, slug: string
}
const CommentCard = ({ slug }: { slug: string }) => {
    const [data, setData] = useState<CommentType[]>()
    const [commentData, setCommentData] = useState<CommentType>({ _type: "comment", _id: ``, name: '', email: '', comment: '', slug: slug });
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState({ type: "", active: false });
    const getData = async () => {
        try {
            setLoading({ type: "load", active: true })
            const res = await client.fetch(`*[_type == "comment" && slug == "${slug}"]`)
            setData(res);
            setCommentData({ ...commentData, _id: `comment-${data?.length}-${slug.slice(0, 5)}` })
            setLoading({ type: "load", active: false })
        } catch (error) {
            console.log(error)
            setErrorMessage("Failed to Load Comments!")
            setLoading({ type: "load", active: false })

        }
    }
    const PostComment = async (e: FormEvent) => {
        setLoading({ type: "submit", active: true })
        e.preventDefault();
        try {
            await client.createOrReplace(commentData);
            setLoading({ type: "submit", active: false })
            await getData();
            setCommentData({
                _type: "comment", _id: `comment-${data?.length}-${slug.slice(0, 5)}`, name: '', email: '', comment: '', slug: slug
            })
        } catch (error) {
            setErrorMessage("Failed to Post Comment! Try Again!")
            console.log(error);
            setLoading({ type: "submit", active: false })
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className='w-full md:w-[50%] flex flex-col gap-4'>
            <div className='flex justify-center items-start flex-col'>
                <h3 className='text-2xl font-bold text-black dark:text-white py-4'>Post Comment</h3>
                <form onSubmit={(e) => PostComment(e)} className='grid grid-cols-2 gap-3 w-full'>
                    <input type="text" name='name' className='px-2 py-2 bg-transparent border border-gray-500 text-white placeholder:text-gray-500 outline-none focus:border-gray-300 transition-colors duration-200' placeholder='Enter Name' onChange={(e) => setCommentData({ ...commentData, name: e.target.value })} required />
                    <input type="text" name='email' className='px-2 py-2 bg-transparent border border-gray-500 text-white placeholder:text-gray-500 outline-none focus:border-gray-300 transition-colors duration-200' placeholder='Enter Email' onChange={(e) => setCommentData({ ...commentData, email: e.target.value })} required />
                    <textarea name="comment" className='px-2 py-2 bg-transparent border border-gray-500 text-white placeholder:text-gray-500 col-span-2 outline-none focus:border-gray-300 transition-colors duration-200' id="comment" onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })} cols={30} rows={10} placeholder='Write Comment'></textarea>
                    <button type='submit' className='bg-blue-900 dark:bg-blue-700 text-white px-3 py-2 rounded-sm' disabled={loading.type == "submit" && loading.active}>{loading.type == "submit" && loading.active ? "Posting Comment": "Post comment"}</button>
                </form>

            </div>

            <div className='flex flex-col gap-2 w-full'>
                {loading.type == "load" && loading.active && (
                    <p className='text-xl text-gray-500'>Getting New Comments...</p>
                )}
                {data && data.length == 0 && (
                    <p className='text-xl text-gray-500'>No Comments! Be First To Post Comment!</p>
                )}
                {data && data.map((comment, key) => (
                    <div key={key} className='bg-gray-800 border border-gray-500 rounded-md px-2 py-2 flex flex-col justify-center items-start'>
                        <p className='text-white font-semibold' title={comment.email}><span className="text-gray-500 text-sm font-normal">Comment By:</span> {comment.name}</p>
                        <p className='text-gray-400 py-2 font-normal'>{comment.comment}</p>
                    </div>
                ))}
                {errorMessage.length > 2 && (
                    <p className='text-xl text-gray-500'>{errorMessage}</p>
                )}
            </div>
        </div>
    )
}

export default CommentCard
