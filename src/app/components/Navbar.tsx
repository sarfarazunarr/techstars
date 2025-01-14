"use client";
import { GiTechnoHeart } from "react-icons/gi"
import ThemeSwitch from "./ThemeToggler"
import Link from "next/link"
import { BsSearch } from "react-icons/bs"
import { useState } from "react"

const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "All Blogs",
      link: "/blog"
    },
    {
      name: "Technology",
      link: "/category/technology"
    },
    {
      name: "AI",
      link: "/category/artificial intelligence"
    },
    {
      name: "Machine Learning",
      link: "/ml"
    },
    {
      name: "Developer",
      link: "https://github.com/sarfarazunar"
    },
  ]
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full px-4 md:px-20 grid grid-cols-2 md:grid-cols-4 py-5">
      <h1 className="font-normal text-black dark:text-white text-3xl flex justify-start items-center gap-1"><GiTechnoHeart className="text-black dark:text-white" /> Tech <span className="font-bold">Stars</span></h1>

      <div className="hidden md:flex justify-between items-center col-span-2">
        {links.map((link, index) => (<Link key={index} href={link.link} className="text-[#3B3C4A] dark:text-gray-200" >{link.name}</Link>))}
      </div>
      <ul className={`col-span-10 md:hidden order-3 lg:order-2 items-start justify-center flex-col gap-4 bg-gray-300 dark:bg-gray-800 absolute top-20 w-full px-10 py-5 ${open ? 'flex' : 'hidden'} transition-all duration-200`}>
        {links.map((link, index) => (<Link key={index} href={link.link} className='w-full border-b border-gray-400 hover:bg-blue-900 block hover:text-white transition-all duration-200 p-2 hover:rounded-md' onClick={() => setOpen(false)} >{link.name}</Link>))}
      </ul>
      <div className="hidden md:flex justify-end items-center gap-3">
        <div className="hidden w-[60%] pl-3 h-full md:flex justify-start items-center bg-gray-200 rounded-sm">
          <input type="text" className="border-none outline-none bg-transparent placeholder:text-gray-600 text-black w-3/4" placeholder="Search Here" />
          <BsSearch className="text-xl text-gray-600 w-1/4" />
        </div>
        <ThemeSwitch />

        <div>
        </div>
      </div>
      <div className="md:hidden flex justify-end items-center gap-3">
      <div className={`w-8 md:hidden justify-self-end flex flex-col justify-center gap-1 ${open ? 'cross' : ''}`} onClick={() => setOpen(!open)}>
        <div className="w-full h-1 bg-black dark:bg-gray-700 transition-transform duration-500 ease-in-out"></div>
        <div className="w-full h-1 bg-black dark:bg-gray-700 transition-transform duration-500 ease-in-out"></div>
        <div className="w-full h-1 bg-black dark:bg-gray-700 transition-transform duration-500 ease-in-out"></div>
      </div>
      <ThemeSwitch />
      </div>

    </div>
  )
}

export default Navbar
