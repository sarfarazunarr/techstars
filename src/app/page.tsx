import { client } from "@/sanity/lib/client";
import BlogCard, { Data } from "./components/BlogCard";
import Hero from "./components/Hero";

export default async function Home() {

    const res: Data[] = await client.fetch(`*[_type == 'blog']{title, meta_description, category -> {name}, image, slug}`)
  return (
    <>
      <Hero />
      <div className="grid grid-cols-3 mt-40 px-20 gap-5">
      {res.map((blog: Data, index: number) => (
        <BlogCard key={index} data={blog} />
      ))}

      </div>
    </>
  );
}