import { GiTechnoHeart } from "react-icons/gi"
import ThemeSwitch from "./ThemeToggler"
import Link from "next/link"
import { BsSearch } from "react-icons/bs"

const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "All Blogs",
      link: "/blogs"
    },
    {
      name: "Technology",
      link: "/tech"
    },
    {
      name: "AI",
      link: "/ai"
    },
    {
      name: "Machine Learning",
      link: "/machine-learning"
    },
    {
      name: "Developer",
      link: "/dev"
    },
  ]
  return (
   <div className="w-full px-20 grid grid-cols-4 py-5">
    <h1 className="font-normal text-black dark:text-white text-3xl flex justify-start items-center gap-1"><GiTechnoHeart className="text-black dark:text-white" /> Tech <span className="font-bold">Stars</span></h1>
    <div className="flex justify-between items-center col-span-2">
      {links.map((link, index) => (<Link key={index} href={link.link} className="text-[#3B3C4A] dark:text-gray-200" >{link.name}</Link>))}
    </div>
    <div className="flex justify-end items-center gap-3">
      <div className="w-[60%] pl-3 h-full flex justify-start items-center bg-gray-200 rounded-sm">
        <input type="text" className="border-none outline-none bg-transparent placeholder:text-gray-600 text-black w-3/4" placeholder="Search Here" />
        <BsSearch className="text-xl text-gray-600 w-1/4" />
      </div>
    <ThemeSwitch />

    </div>
   </div>
  )
}

export default Navbar
